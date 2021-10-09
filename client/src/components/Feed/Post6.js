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
      <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be782447-0a36-46a3-b393-7a0c41cce06d/db99n60-231b3eed-813c-4b34-8a82-df132abe7dea.png/v1/fit/w_300,h_660,strp/_persona_5__protag_akira_kurusu___joker_by_yuuike_db99n60-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjYwIiwicGF0aCI6IlwvZlwvYmU3ODI0NDctMGEzNi00NmEzLWIzOTMtN2EwYzQxY2NlMDZkXC9kYjk5bjYwLTIzMWIzZWVkLTgxM2MtNGIzNC04YTgyLWRmMTMyYWJlN2RlYS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GqYsFmjflzsvblydByjO6swuXEnpg7i4SJA88EdvuTY"/>
    </div>
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            JBerm {" "} 
            <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge"/> @Udez
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p> hahahaha :) </p>
        </div>
      </div>
      <img src = "https://i.pinimg.com/736x/cc/c7/6a/ccc76a5288deaa55f053f13ea4859b11.jpg" alt=""/>
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