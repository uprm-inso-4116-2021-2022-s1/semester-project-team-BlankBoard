import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Typography,
  Modal,
  createTheme,
  ThemeProvider,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Canvas from "../../components/Canvas/Canvas";
import axios from "axios";
import { useCookies } from "react-cookie";

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
function DrawBox(props) {
  const [drawing, setDrawing] = useState(
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636918991/blankboard/xq6laesvfqfpoomvsumd.png"
  );
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const canvasCall = (newDrawing) => {
    setDrawing(newDrawing);
    closeModal();
  };

  const createPost = () => {
    //make a post with the drawing state as it's "post_content" field, and make this post tied to
    // use whose id is props.user.user_id as
    const body = {
      user_id: props.user.user_id,
      post_content: drawing,
    };
    const bodySend = JSON.stringify(body);
    axios({
      method: "POST",
      url: process.env.REACT_APP_API + "/post",
      data: bodySend,
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    })
      .then((res) => {
        setCookie("token", res.data.jwtToken);
        console.log(res);
        res.status(201).send();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ width: "fit-content" }}>
        <CardHeader
          avatar={
            <Avatar
              className="dbox_profile"
              src={props.user.profile ? props.user.profile : ""}
            ></Avatar>
          }
        ></CardHeader>
        <CardMedia
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
          }}
        >
          <Button onClick={openModal}>
            <img alt="post" id="dbd" className="dbox_drawing" src={drawing} />
          </Button>
        </CardMedia>
        <CardContent>
          <Typography
            color="gray"
            sx={{ alignItems: "center", justifyContent: "center", p: "2em" }}
          >
            You can click on the gray square to begin drawing. Press the Post
            button to post your drawing on BlankBoard!
          </Typography>
        </CardContent>
        <CardActions
          sx={{ alignItems: "center", justifyContent: "center", p: "2em" }}
        >
          <Button onClick={createPost}>Post</Button>
        </CardActions>
      </Card>
      <Modal className="modalWindow" open={showModal} onClose={closeModal}>
        <Canvas
          canvasCall={canvasCall}
          user={props.user}
          thread={0}
          options={"pfp"}
          visible={showModal}
        />
      </Modal>
    </ThemeProvider>
  );
}

export default DrawBox;
