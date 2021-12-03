import React, { useState, useEffect } from "react";
//import "./Feed.css";
import DrawBox from "./DrawBox";
import Post from "./Post";
//import { Card, Grid } from "@mui/material";
import axios from "axios";
import { Stack, createTheme } from "@mui/material";

function Feed(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/posts`);
        let posts = response.data.sort(function (a, b) {
          a = new Date(a.post_timestamp);
          b = new Date(b.post_timestamp);
          return b - a;
        });
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, []);

  const ShowPosts = () => {
    if (posts === []) return;
  };
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DrawBox user={props.user} />
      {ShowPosts()}

      {posts.map((post, i) => (
        <Post user={props.user} post={post} />
      ))}
    </Stack>
  );
}

export default Feed;
