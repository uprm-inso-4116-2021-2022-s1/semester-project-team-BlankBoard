import React from 'react'
import { Avatar, Grid, Typography, IconButton } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <>
      <Grid container className="post">
        <Grid container item xs={12}>
          <Grid container item xs={2.5} alignItems="top" justifyContent="center">
            <Avatar className="post_avatar" src={avatar} />
          </Grid>
          <Grid container item xs={7}>
            <Grid container item xs={12} alignItems="center" margin={"10px"}>
              <Grid item>
                <Typography className="post_text post_screen">
                  {displayName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="post_text post_user">
                  {verified && <VerifiedUserIcon className="post__badge" />} @{username} · 2d
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <img className="post_picture" src={image} alt="" />
            </Grid>
          </Grid>
          <Grid item xs={2.5} />
        </Grid>
        <Grid container item xs={12} justifyContent="space-evenly" className="post_btns">
          <Grid container item xs={2} justifyContent="center">
            <IconButton>
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
