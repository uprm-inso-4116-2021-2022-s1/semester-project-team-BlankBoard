import React, { useState } from "react";
import axios from "axios";
import {
  Avatar,
  Grid,
  Typography,
  IconButton,
  Modal,
  ThemeProvider,
  createTheme,
  Divider,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Canvas from "../Canvas/Canvas";
//import "./Post.css";

function Post(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const canvasCall = async (replyLink) => {
    let body = {
      user_id: props.user.user_id,
      post_id: props.post_id,
      replies_content: replyLink,
    };
    let bodySend = JSON.stringify(body);
    await axios({
      method: "POST",
      url: process.env.REACT_APP_API + `/reply`,
      data: bodySend,
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    })
      .then()
      .catch((e) => {
        console.log(e);
      });
    closeModal();
  };

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

  return (
    <ThemeProvider theme={theme}>
      <Card className="post" sx={{ width: "fit-content" }}>
        <CardHeader
          className="post"
          avatar={
            <Avatar className="post_avatar" src={props.post_user.profile} />
          }
          title={
            <Typography
              className="post_text post_screen"
              sx={{ fontFamily: "Montserrat", fontWeight: "700" }}
            >
              {props.post_user.screen_name}
              <VerifiedUserIcon className="post__badge" />
              {""}@{props.post_user.username} · 2d
            </Typography>
          }
        ></CardHeader>
        <CardMedia
          className="post"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <img className="post_picture" src={props.content} alt="" />
        </CardMedia>
        <Divider />
        <CardActions
          className="post"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <IconButton onClick={openModal}>
            <ChatBubbleOutlineRoundedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ShareOutlinedIcon fontSize="small" />
          </IconButton>
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
export default Post;
