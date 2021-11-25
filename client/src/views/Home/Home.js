import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect, useHistory } from "react-router-dom";

import jwt_decode from "jwt-decode";
import { Grid } from "@mui/material";

import isAuthenticated from "../../common/authentication";
import userGetById from "../../requests/userGetById";
import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import Profile from "../../components/Profile/Profile";
import "./Home.css";

function Home() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["token"]);
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState("feed");
  const [user, setUser] = useState({});

  // <Modal className="modalWindow" open={showModal} onClose={closeModal}>{Canvas(1, 0, "pfp", showModal)}</Modal>

  const check = async () => {
    setAuthenticated(await isAuthenticated(cookies.token));

    if (authenticated) {
      setUser(await userGetById(jwt_decode(cookies.token).user.user_id));
    }

    setLoading(false);
  };

  const signOut = () => {
    setCookie("token", "");
    history.push("/login");
  };

  if (loading) {
    check();
    return <h1>Loading...</h1>;
  } else if (!authenticated) {
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
        {console.log("user:", user)}
        <Grid container className="home" justifyContent="center">
          <Grid item xs={6} className={tab === "feed" ? "show" : "hide"}>
            <Feed user={user} />
          </Grid>
          <Grid item xs={6} className={tab === "profile" ? "show" : "hide"}>
            <Profile user={user} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Home;
