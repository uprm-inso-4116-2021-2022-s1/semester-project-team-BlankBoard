import React, { useState, useEffect } from "react";
import "./Feed.css";
import DrawBox from "./DrawBox";
import Post from "./Post";
import { Card, Grid } from "@mui/material";
import axios from "axios";

function Feed(props) {
  
  const initUser = {
    username: "" ,
    user_id : 0 ,
    profile : "",
    screen_name : ""
  }

  const [user, setUser] = useState([]);

  const getUser = async(id) => {
    const resUser = await axios
    .get(`${process.env.REACT_APP_API}/users/${id}`) 
    .then(res => { setUser([...user, res.data]); console.log(user); });
  }

  const ShowPosts = () => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect( () => { 
        async function fetchData() {
            try {
                const resPost = await axios.get(`${process.env.REACT_APP_API}/posts`); 
                setUserPosts(resPost.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    // Screen_name set to display post_id for testing purposes
    // username set to display user_id for testing purposes

    // the following userPost parameters are used &/or displayed (user_id, post_id, content) 
    // missing: a way to show the post user's screen_name, username, profile picture & (optional given the time constraint: relative time in the post) 

    // Posts load from earliest to latest (should be latest to earliest according to specs)

    return (    
      <Grid>
      {userPosts.map((userPost) => (
        <Grid>
          {/* attemp at getting the user's info (didn't work T_T )) */}

          {/* {getUser(userPost.user_id)} */}
          <Post
          user={props.user}
          post_user={{user_id: userPost.user_id, 
                      screen_name: userPost.post_id ,
                      username: userPost.user_id ,
                      profile: "" }}
          post_id={userPost.post_id}
          content={userPost.post_content}
          time_stamp={userPost.post_timestamp}
          />
        </Grid>
      )) }
      </Grid>
    )
  }

  return (
    <Card className="feed">
      {/* Posts */}
      <DrawBox user={props.user} />

      {ShowPosts()}

      {/* {getPosts()} */}

      {/* {console.log(userPosts)} */}

      {/* Use this format for loading a post */}
      {/* <Post
        user={props.user}
        post_user={{user_id: 69, screen_name: "Seraphchim", username: "Seraphchim", profile: "http://res.cloudinary.com/dsunqodr1/image/upload/v1636917375/blankboard/z7sy991oq1zjwpq4wkac.png"}}
        post_id={15}
        content={"http://res.cloudinary.com/dsunqodr1/image/upload/v1636950983/blankboard/j1seuyt7ktder3l2knix.png"}
        time_stamp={""}
      /> */}

      {/* <Post
        displayName="Nat"
        username="pepper"
        avatar="https://res.cloudinary.com/dsunqodr1/image/upload/v1636846822/blankboard/vufoky3nucihrjoc6zfl.png"
        image="https://res.cloudinary.com/dsunqodr1/image/upload/v1636847791/blankboard/vy9wx7omqrowvv71c0k7.png"
      /> */}

    </Card>
  );
}

export default Feed;
