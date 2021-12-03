import { Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import jwt_decode from "jwt-decode";
import isAuthenticated from "../../common/authentication";
import userGetById from "../../requests/userGetById";
import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import Profile from "../../components/Profile/Profile";
//import "./Home.css";

function Home() {
  let history = useHistory();
  const [cookies, setCookie] = useCookies(["token"]);
  const [authentication, setAuthentication] = useState({
    loading: true,
    authenticated: false,
  });
  const [tab, setTab] = useState("feed");
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [userReplies, setUserReplies] = useState([]);

  useEffect(() => {
    let profileUser;
    async function authenticate() {
      let flag = await isAuthenticated(cookies.token);
      setAuthentication({ loading: false, authenticated: flag });
      if (flag) {
        profileUser = await userGetById(jwt_decode(cookies.token).user.user_id);
        setUser(profileUser);
        await loadProfileData();
      }
      setAuthentication({ loading: false, authenticated: flag });
    }
    async function loadProfileData() {
      await axios({
        method: "GET",
        url: process.env.REACT_APP_API + `/posts`,
        params: { user_id: profileUser.user_id },
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      })
        .then((res) => {
          setUserPosts(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      await axios({
        method: "GET",
        url: process.env.REACT_APP_API + `/replies`,
        params: { user_id: profileUser.user_id },
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      })
        .then((res) => {
          setUserReplies(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    authenticate();
  }, []);

  const signOut = () => {
    setCookie("token", "");
    history.push("/login");
  };

  if (authentication.loading) {
    return <h1>Loading...</h1>;
  } else if (!authentication.authenticated) {
    return <Redirect to={"/login"} />;
  } else {
    return (
      <>
        <Navbar
          user={user}
          history={history}
          signOut={signOut}
          setTab={setTab}
        />
        {tab === "feed" ? (
          <Feed user={user} />
        ) : (
          <Profile user={user} posts={userPosts} replies={userReplies} />
        )}
      </>
    );
  }
}

export default Home;
