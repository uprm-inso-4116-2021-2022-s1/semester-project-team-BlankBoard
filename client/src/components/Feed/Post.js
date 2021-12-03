import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  createTheme,
  Typography,
  IconButton,
  Modal,
  CardHeader,
  CardMedia,
  Card,
  CardActions,
  Box,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Canvas from "../Canvas/Canvas";
import calculateTime from "../../common/common";
import { ThemeProvider } from "@mui/system";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import "./Post.css";

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

function Post(props) {
  const [postUser, setPostUser] = useState({});
  const [replies, setReplies] = useState([]);
  const [replyPosts, setReplyPosts] = useState([]);
  const [showReplies, setShowReplies] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleReplies = () => setShowReplies(!showReplies);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/users/${props.post.user_id}`
        );
        setPostUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    const getReplies = async () => {
      axios
        .get(`${process.env.REACT_APP_API}/replies/${props.post.post_id}`)
        .then((res) => {
          setReplies(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getReplies();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      if (!replies) return;
      let results = [];
      replies.forEach((reply) => {
        axios
          .get(`${process.env.REACT_APP_API}/users/${reply.user_id}`)
          .then((res) => {
            results.push({ ...reply, ...res.data });
            console.log("results:", results);
          })
          .catch((e) => {
            console.log(e);
          });
      });
      setReplyPosts(results);
    };
    getUsers();
  }, [replies]);

  const canvasCall = async (replyLink) => {
    let body = {
      user_id: props.user.user_id,
      post_id: props.post.post_id,
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
    window.location.reload();
  };

  const handleReplyButton = () => {
    if (!showReplies) return <KeyboardArrowDownIcon fontSize="large" />;
    else return <KeyboardArrowUpIcon fontSize="large" />;
  };

  const DisplayReplies = () => {
    if (!showReplies || !replyPosts) return;
    return (
      <ThemeProvider theme={theme}>
        {replyPosts.map((replyPost) => (
          <Card>
            <CardHeader
              avatar={
                <Avatar className="post_avatar" src={replyPost.profile} />
              }
              title={
                <Typography
                  className="post_text post_screen"
                  sx={{ fontFamily: "Montserrat", fontWeight: "700" }}
                >
                  {replyPost.screen_name}
                  <VerifiedUserIcon className="post__badge" /> @
                  {replyPost.username} ·{" "}
                  {calculateTime(replyPost.replies_timestamp)}
                </Typography>
              }
            />
            <CardMedia sx={{ alignItems: "center", justifyContent: "center" }}>
              <img
                className="post_picture"
                src={replyPost.replies_content}
                alt=""
              />
            </CardMedia>
          </Card>
        ))}
      </ThemeProvider>
    );
  };

  if (!props.post || !postUser) return;

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardHeader
          avatar={<Avatar className="post_avatar" src={postUser.profile} />}
          title={
            <Typography className="post_text post_screen">
              {postUser.screen_name}
              <VerifiedUserIcon className="post__badge" /> @{postUser.username}{" "}
              · {calculateTime(props.post.post_timestamp)}
            </Typography>
          }
        />
        <CardMedia>
          <img className="post_picture" src={props.post.post_content} alt="" />
        </CardMedia>
        <CardActions
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={openModal}>
            <ChatBubbleOutlineRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton onClick={handleReplies}>
            <ExpandMoreIcon> {handleReplyButton()}</ExpandMoreIcon>
          </IconButton>
        </CardActions>
        {DisplayReplies()}
      </Card>
      <Modal className="modalWindow" open={showModal} onClose={closeModal}>
        <Canvas canvasCall={canvasCall} user={postUser} visible={showModal} />
      </Modal>
    </ThemeProvider>
  );
}
export default Post;
