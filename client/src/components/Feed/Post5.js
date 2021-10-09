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
      <Avatar src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/energized--abstract-art-by-fidostudio-tom-fedro--fidostudio.jpg"/>
    </div>
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            Carlitos {" "} 
            <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge"/> @BobRossEnthusiast
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p> algo simple xD </p>
        </div>
      </div>
      <img src = "https://i.pinimg.com/originals/c0/46/72/c04672c6ba605b150e71a02ccf1185c0.jpg" alt=""/>
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