import React, { useState, useEffect } from "react";
import "./Feed.css";
import DrawBox from "./DrawBox";
import Post from "./Post";
import { Card, Grid } from "@mui/material";
import axios from "axios";

function Feed(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/posts`);
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, []);

  const ShowPosts = () => {
    if (posts === []) return;
    return (
      <Grid>
        {posts.map((post, i) => (
          <Grid>
            <Post
              user={props.user}
              post={post}
            />
          </Grid>
        ))}
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
        post_user={{user_id: 58, screen_name: "Kevin", username: "Kevin", profile: "https://res.cloudinary.com/dsunqodr1/image/upload/v1636847144/blankboard/l97wzc55qyrsdc5dwesd.png"}}
        post_id={14}
        content={"https://res.cloudinary.com/dsunqodr1/image/upload/v1636950983/blankboard/j1seuyt7ktder3l2knix.png"}
        time_stamp={""}
      />

      <Post
        user={props.user}
        post_user={{user_id: 74, screen_name: "carlos", username: "carlos", profile: "http://res.cloudinary.com/dsunqodr1/image/upload/v1638129724/blankboard/fbkjcjgckhhlmvw4vgek.png"}}
        post_id={40}
        content={"http://res.cloudinary.com/dsunqodr1/image/upload/v1638149585/blankboard/iuxeqctdkjkjyo67mane.png"}
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
