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
      <Avatar src="https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg"/>
    </div>
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            Nat {" "} 
            <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge"/> @RelatableNatalia
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p> mood </p>
        </div>
      </div>
      <img src = "https://ih1.redbubble.net/image.1348636732.8074/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" alt=""/>
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
