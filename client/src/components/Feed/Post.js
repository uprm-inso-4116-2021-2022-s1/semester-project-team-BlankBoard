import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Grid, Typography, IconButton, Modal } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Canvas from '../Canvas/Canvas';
import "./Post.css";

function Post(props) {

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
    window.location.reload();
  };

  const [showReplies, setShowReplies] = useState(false);
  const handleReplies = () => setShowReplies(!showReplies);

  const handleReplyButton = () => {
    if(!showReplies)
      return <KeyboardArrowDownIcon fontSize="large" />
    else
      return <KeyboardArrowUpIcon fontSize="large" />
  }

  const DisplayReplies = () => {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API}/replies/${props.post_id}`)
        .then((resReplies) => {
          console.log(resReplies.data);
          // setReplies(resReplies.data);
        });
    }, []);

    if(!showReplies) return;

    // replies.map((reply) => {
    //   console.log(reply);
    // });

    // return (
    //   <Grid>
    //     {replies.map((reply) => (
    //       <Grid container className="reply">
    //         <Grid container item xs={12}>
    //           <Grid container item xs={2.5} alignItems="top" justifyContent="center">
    //             <Avatar className="post_avatar" src={"users[i].profile"} />
    //           </Grid>
    //           <Grid container item xs={7}>
    //             <Grid container item xs={12} alignItems="center" margin={"10px"}>
    //               <Grid item>
    //                 <Typography className="post_text post_screen">
    //                   {"user[i].screen_name"}
    //                 </Typography>
    //               </Grid>
    //               <Grid item>
    //                 <Typography className="post_text post_user">
    //                   <VerifiedUserIcon className="post__badge" /> @{"users[i].username"} · 2d
    //                 </Typography>
    //               </Grid>
    //             </Grid>
    //             <Grid container item xs={12} justifyContent="center">
    //               <img className="post_picture" src={reply.replies_content} alt="" />
    //             </Grid>
    //           </Grid>
    //           <Grid item xs={2.5} />
    //         </Grid>
    //       </Grid>
    //     ))}
    //   </Grid>
    // );
  }

  return (
    <>
      <Grid container className="post">
        <Grid container item xs={12}>
          <Grid container item xs={2.5} alignItems="top" justifyContent="center">
            <Avatar className="post_avatar" src={props.post_user.profile} />
          </Grid>
          <Grid container item xs={7}>
            <Grid container item xs={12} alignItems="center" margin={"10px"}>
              <Grid item>
                <Typography className="post_text post_screen">
                  {props.post_user.screen_name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="post_text post_user">
                  <VerifiedUserIcon className="post__badge" /> @{props.post_user.username} · 2d
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <img className="post_picture" src={props.content} alt="" />
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
          user={props.user}
          visible={showModal}
        />
      </Modal>
    </>
  );
}
export default Post;
