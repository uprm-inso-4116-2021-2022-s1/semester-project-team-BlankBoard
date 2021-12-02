import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Grid, Typography, IconButton, Modal } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Canvas from '../Canvas/Canvas';
import calculateTime from '../../common/common';
import "./Post.css";

function Post(props) {
  const [postUser, setPostUser] = useState({});
  const [replies, setReplies] = useState([]);
  const [replyUsers, setReplyUsers] = useState([]);
  const [showReplies, setShowReplies] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleReplies = () => setShowReplies(!showReplies);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/users/${props.post.user_id}`);
        setPostUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    const getReplies = async () => {
      axios.get(`${process.env.REACT_APP_API}/replies/${props.post.post_id}`)
        .then((res) => {
          console.log("r:", res.data);
          setReplies(res.data);
        }).catch(e => {
          console.log(e);
        });
    }
    getReplies();
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      if (!replies) return;
      let results = []
      replies.forEach((reply) => {
        axios.get(`${process.env.REACT_APP_API}/users/${reply.user_id}`)
          .then((res) => {
            console.log("user:", res.data);
            results.push(res.data);
          }).catch(e => {
            console.log(e);
          });
      })
      console.log("u:", results);
      setReplyUsers(results);
    }

    getUsers();
  }, [replies])

  const canvasCall = async (replyLink) => {
    let body = {
      user_id: props.user.user_id,
      post_id: props.post.post_id,
      replies_content: replyLink
    }
    let bodySend = JSON.stringify(body)
    await axios({
      method: 'POST',
      url: process.env.REACT_APP_API + `/reply`,
      data: bodySend,
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    }).then()
      .catch(e => {
        console.log(e);
      });
    closeModal();
    window.location.reload();
  };

  const handleReplyButton = () => {
    if (!showReplies)
      return <KeyboardArrowDownIcon fontSize="large" />
    else
      return <KeyboardArrowUpIcon fontSize="large" />
  }

  const DisplayReplies = () => {

    if (!showReplies || replies === [] || replyUsers === []) return;
    return (
      <Grid>
        {replies.map((reply, i) => (
          <Grid container className="reply">
            <Grid container item xs={12}>
              <Grid container item xs={2.5} alignItems="top" justifyContent="center">
                <Avatar className="post_avatar" src={replyUsers[i].profile} />
              </Grid>
              <Grid container item xs={7}>
                <Grid container item xs={12} alignItems="center" margin={"10px"}>
                  <Grid item>
                    <Typography className="post_text post_screen">
                      {replyUsers[i].screen_name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="post_text post_user">
                      <VerifiedUserIcon className="post__badge" /> @{replyUsers[i].username} · {calculateTime(reply.replies_timestamp)};
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                  <img className="post_picture" src={reply.replies_content} alt="" />
                </Grid>
              </Grid>
              <Grid item xs={2.5} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  }

  if(!props.post || !postUser) return;

  return (
    <>
      <Grid container className="post">
        <Grid container item xs={12}>
          <Grid container item xs={2.5} alignItems="top" justifyContent="center">
            <Avatar className="post_avatar" src={postUser.profile} />
          </Grid>
          <Grid container item xs={7}>
            <Grid container item xs={12} alignItems="center" margin={"10px"}>
              <Grid item>
                <Typography className="post_text post_screen">
                  {postUser.screen_name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="post_text post_user">
                  <VerifiedUserIcon className="post__badge" /> @{postUser.username} · {calculateTime(props.post.post_timestamp)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <img className="post_picture" src={props.post.post_content} alt="" />
            </Grid>
          </Grid>
          <Grid item xs={2.5} />
        </Grid>
        <Grid container item xs={12} justifyContent="space-evenly" className="post_btns">
          <Grid container item xs={2} justifyContent="center">
            <IconButton onClick={openModal}>
              <ChatBubbleOutlineRoundedIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid container item xs={2} justifyContent="center">
            <IconButton onClick={handleReplies}>
              {handleReplyButton()}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      {DisplayReplies()}
      <Modal className="modalWindow" open={showModal} onClose={closeModal}>
        <Canvas
          canvasCall={canvasCall}
          user={postUser}
          visible={showModal}
        />
      </Modal>
    </>
  );
}
export default Post;
