import React from "react";
import "./Feed.css";
import DrawBox from "./DrawBox";
import Post from "./Post";
import { Card } from "@mui/material";

function Feed(props) {

  return (
    <Card className="feed">
      {/* Posts */}
      <DrawBox user={props.user} />

      {/* Use this format for loading a post */}
      <Post
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
      />

      {/* <Post
        displayName="Nat"
        username="pepper"
        avatar="https://res.cloudinary.com/dsunqodr1/image/upload/v1636846822/blankboard/vufoky3nucihrjoc6zfl.png"
        image="https://res.cloudinary.com/dsunqodr1/image/upload/v1636847791/blankboard/vy9wx7omqrowvv71c0k7.png"
      />

      <Post
        displayName="Berm"
        verified
        username="akuga"
        avatar="https://res.cloudinary.com/dsunqodr1/image/upload/v1636846672/blankboard/mkubnpvbpimpseoj5pse.png"
        image="https://res.cloudinary.com/dsunqodr1/image/upload/v1636847971/blankboard/fa70r2oje5zfjjwgicoy.png"
      />

      <Post
        displayName="Lewis"
        username="water_kami"
        avatar="https://res.cloudinary.com/dsunqodr1/image/upload/v1636846987/blankboard/oofc4liznkfgazygkttf.png"
        image="https://res.cloudinary.com/dsunqodr1/image/upload/v1636848088/blankboard/he8a4w2to0a9wjzalf15.png"
      />

      <Post
        displayName="Jesus"
        username="sleepless"
        avatar="https://res.cloudinary.com/dsunqodr1/image/upload/v1636847078/blankboard/bbgoq0wq4nvsydufbrpj.png"
        image="https://res.cloudinary.com/dsunqodr1/image/upload/v1636848464/blankboard/hrs2qd2pzivaqgttyl18.png"
      />

      <Post
        displayName="Carlos"
        username="bobby_ross"
        avatar="https://res.cloudinary.com/dsunqodr1/image/upload/v1636585758/blankboard/baipcld1vn0z9trwl2cq.png"
        image="https://res.cloudinary.com/dsunqodr1/image/upload/v1636847713/blankboard/cwtjqkvat2pgz4rljfoi.png"
      /> */}
    </Card>
  );
}

export default Feed;
