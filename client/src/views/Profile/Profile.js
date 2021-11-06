import React from "react";
import { Modal, Button } from "@mui/material";
import Canvas from "../../components/Canvas/Canvas";
// import { withRouter } from "react-router-dom";
import "./Profile.css";

function Profile() {
// class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: "",
  //     following: "",
  //     blocking: "",
  //     posts: []
  //   }
  // }

  // componentDidMount() {
  // }

  // async getUserById() {
  //   // state.user
  //   // username
  //   // pfp
  // }

  // async getFollowers() {
  //   // state.user
  //   // followers
  // }

  // async getFollowing() {
  // }

  // async getBlocks() {
  // }

  // async getPosts() {
  //   // state.posts
  // }

  const[showModal, setShowModal] = React.useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const[followers, setFollowers] = React.useState(0);
  const[isFollowing, setIsFollowing] = React.useState(false);
  const username = "carloseli21";
  const numOfPosts = 0;
  const following = 0;

  const followUser = () => {
    setIsFollowing(true);
    setFollowers(followers+1);
  }
  const unfollowUser = () => {
    setIsFollowing(false);
    setFollowers(followers-1);
  }

  const followStatus = () => {
    if(!isFollowing) {
      return (
        <Button style={{width:" 144px", backgroundColor:"skyblue", color:"black"}} onClick={followUser}>follow</Button>
      );
    } else {
      return (
        <Button style={{width:" 144px", backgroundColor:"dodgerblue", color:"black"}} onClick={unfollowUser}>following</Button>
      );
    }
  }

  // render() {
    return (
      <div className="background">
        <div className="userInfo">
          <div className="pfp" onClick={openModal}></div>
          <Modal className="modalWindow" open={showModal} onClose={closeModal}>{Canvas("pfp", showModal)}</Modal>
          <div className="intro">
            <div className="username">{username}</div>
            <div>{followStatus()}</div>
          </div>
          <div className="stats">
            <div className="number">{numOfPosts}</div>
            <div className="number">{followers}</div>
            <div className="number">{following}</div>
            <div className="text">posts</div>
            <div className="text">followers</div>
            <div className="text">following</div>
          </div>
        </div>
        <div className="posts">POSTS</div>
      </div>
    );
  // }
}

export default Profile;
// export default withRouter(Profile);