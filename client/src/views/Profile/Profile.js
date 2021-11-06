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
  //     posts: []
  //   }
  // }

  // componentDidMount() {
  // }

  // async getUserById() {
  //  state.user
  //  username
  //  pfp
  // }

  // async getPosts() {
  //  state.posts
  // }

  const[showModal, setShowModal] = React.useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const username = "carloseli21";
  const numOfPosts = 0;
  const numOfComments = 0;

  const showPosts = () => {
    let i = 0;
    for(i = 0; i < 12; i++) {
      return(
        <div></div>
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
          </div>
          <div className="stats">
            <div className="number">{numOfPosts}</div>
            <div className="number">{numOfComments}</div>
            <div className="text">posts</div>
            <div className="text">comments</div>
          </div>
        </div>
        <div className="posts">POSTS{showPosts()}</div>
      </div>
    );
  // }
}

export default Profile;
// export default withRouter(Profile);