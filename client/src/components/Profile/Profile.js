import React, { useState } from "react";
import { ImageList, ImageListItem, Card, Avatar, Grid, Typography, IconButton, Modal } from "@mui/material";
import Canvas from "../../components/Canvas/Canvas";

// import { withRouter } from "react-router-dom";
import "./Profile.css";
import axios from "axios";

function Profile(props) {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const canvasCall = async (profile) => {
    await axios({
      method: 'PUT',
      url: process.env.REACT_APP_API + `/users/${props.user.user_id}`,
      data: JSON.stringify({ profile }),
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    })
    window.location.reload(false);
  };

  const showPosts = () => {
    return (
      <ImageList cols={3} gap={32}>
        {props.posts.map((post, i) => (
          <ImageListItem key={i}>
            <img className="prf_post" alt="" src={`${post.post_content}?w=320&h=320&fit=crop&auto=format`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  // render() {
  return (
    <>
      <Card className="background">
        <Grid container item xs={12}>
          <Grid container item xs={12} justifyContent="center">
            <IconButton onClick={openModal}>
              <Avatar className="pf_picture" src={props.user.profile ? props.user.profile : ""}></Avatar>
            </IconButton>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Typography className="pf_text pf_screen_name">
              {props.user.screen_name ? props.user.screen_name : ""}
            </Typography>
            <Typography className="pf_text pf_username">
              @{props.user.username ? props.user.username : ""}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={3}>
            <Grid container item xs={12} justifyContent="center">
              <Typography className="pf_text pf_stats">
                {props.posts.length}
              </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Typography className="pf_text pf_stats">
                posts
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={3}>
            <Grid container item xs={12} justifyContent="center">
              <Typography className="pf_text pf_stats">
                {props.replies.length}
              </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Typography className="pf_text pf_stats">
                replies
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item className="pf_posts">
            {showPosts()}
          </Grid>
        </Grid>
        <Modal className="modalWindow" open={showModal} onClose={closeModal}>
          <Canvas canvasCall={canvasCall} user={props.user} thread={0} options={"pfp"} visible={showModal} />
        </Modal>
        {/* <div className="userInfo">
          <div onClick={openModal}>

          </div>
        
          <div className="username">{props.user.username ? props.user.username : ""}</div>
          <div className="stats">
            <div className="number">{numOfPosts}</div>
            <div className="number">{numOfComments}</div>
            <div className="text">posts</div>
            <div className="text">comments</div>
          </div>
        </div>
        <div className="posts">{showPosts()}</div> */}
      </Card>
    </>
  );
  // }
}

export default Profile;
// export default withRouter(Profile);