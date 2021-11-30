import React from "react";
//import "./Feed.css";
import DrawBox from "./DrawBox";
import Post from "./Post";
import { Divider, Stack } from "@mui/material";
import { createTheme } from "@mui/system";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 500,
      md: 700,
      lg: 1000,
      xl: 1200,
    },
  },
});
function Feed(props) {
  return (
    <Stack
      mt={10}
      spacing={2}
      direction="column"
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Posts */}
      {/* <Grid
        item
        wrap
        sx={{
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.up("xs")]: { m: "20px" },
        }}
      > */}
      <DrawBox user={props.user} />
      {/* </Grid> */}

      {/* Use this format for loading a post */}
      {/* <Grid
        item
        wrap
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}
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
      {/* </Grid> */}
    </Stack>
  );
}

export default Feed;
