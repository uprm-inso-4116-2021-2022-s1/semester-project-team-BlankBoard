import React from "react";
//import "./Feed.css";
import DrawBox from "./DrawBox";
import Post from "./Post";
import { Card } from "@mui/material";

function Feed(props) {
  return (
    <Card>
      {/* Posts */}
      <DrawBox user={props.user} />

      {/* Use this format for loading a post */}
      <Post
        user={props.user}
        post_user={{
          user_id: 69,
          screen_name: "Seraphchim",
          username: "Seraphchim",
          profile:
            "http://res.cloudinary.com/dsunqodr1/image/upload/v1636917375/blankboard/z7sy991oq1zjwpq4wkac.png",
        }}
        post_id={15}
        content={
          "http://res.cloudinary.com/dsunqodr1/image/upload/v1636950983/blankboard/j1seuyt7ktder3l2knix.png"
        }
        time_stamp={""}
      />
    </Card>
  );
}

export default Feed;
