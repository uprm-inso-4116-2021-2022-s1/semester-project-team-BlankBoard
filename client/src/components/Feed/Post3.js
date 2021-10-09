import React from 'react'
import {Avatar} from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import "./Post.css";

function Post ({ displayName, username, verified, text, image, avatar}) {
  return (
  <div className="post">
    <div className="post__avatar">
      <Avatar src="https://i1.sndcdn.com/artworks-7Zc6h0hOyAzwkB14-SSs0eQ-t500x500.jpg"/>
    </div>
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            Kev {" "} 
            <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge"/> @Purcell
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p> Lol </p>
        </div>
      </div>
      <img src = "https://i.pinimg.com/originals/a1/e3/6b/a1e36bcb8ce179bd8cc8db28ff4ef6fb.jpg" alt=""/>
      <div className="post__footer">
        <ThumbUpAltOutlinedIcon fontSize="small"/>
        <ChatBubbleOutlineRoundedIcon fontSize="small"/>
        <ShareOutlinedIcon fontSize="small"/>
      </div>
    </div>
  </div>
  );
}    
export default Post;