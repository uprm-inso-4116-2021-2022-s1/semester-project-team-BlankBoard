import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Grid, Typography, IconButton, Modal } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Canvas from '../Canvas/Canvas';
import "./Post.css";

function Post(props) {
  let [user, setUser] = useState({})

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/users/${props.post.user_id}`);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const canvasCall = async (replyLink) => {
    let body = {
      user_id: props.user.user_id,
      post_id: props.post_id,
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
  };
  if(!props.post || !user) return;

  return (
    <>
      <Grid container className="post">
        <Grid container item xs={12}>
          <Grid container item xs={2.5} alignItems="top" justifyContent="center">
            <Avatar className="post_avatar" src={user.profile} />
          </Grid>
          <Grid container item xs={7}>
            <Grid container item xs={12} alignItems="center" margin={"10px"}>
              <Grid item>
                <Typography className="post_text post_screen">
                  {user.screen_name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="post_text post_user">
                  <VerifiedUserIcon className="post__badge" /> @{user.username} · {props.post.post_timestamp}
                  {/* Date format: "2021-11-29T01:46:37.634Z" */}
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
            <IconButton>
              <ShareOutlinedIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Modal className="modalWindow" open={showModal} onClose={closeModal}>
        <Canvas
          canvasCall={canvasCall}
          user={props.user}
          thread={0}
          options={"pfp"}
          visible={showModal}
        />
      </Modal>
      {/* <div className="post">
        <div className="post__avatar">

        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">

                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>

          <div className="post__footer">
            <ChatBubbleOutlineRoundedIcon fontSize="small" />
            <ShareOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Post;
