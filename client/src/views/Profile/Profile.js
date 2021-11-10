import React from "react";
import { ImageList, ImageListItem, Modal } from "@mui/material";
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
  const numOfPosts = 12;
  const numOfComments = 48;

  const posts = [
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    'https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
  ];

  // const posts = [];

  const showPosts = () => {
    return (
        <ImageList cols={3} gap={32}>
          {posts.map((post, i) => (
            <ImageListItem key={i}>
              <img alt="" src={`${post}?w=320&h=320&fit=crop&auto=format`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
    );
  }

  // render() {
    return (
      <div className="background">
        <div className="userInfo">
          <div className="pfp" onClick={openModal}></div>
          <Modal className="modalWindow" open={showModal} onClose={closeModal}>{Canvas(1, 0, "pfp", showModal)}</Modal>
            <div className="username">{username}</div>
          <div className="stats">
            <div className="number">{numOfPosts}</div>
            <div className="number">{numOfComments}</div>
            <div className="text">posts</div>
            <div className="text">comments</div>
          </div>
        </div>
        <div className="posts">{showPosts()}</div>
      </div>
    );
  // }
}

export default Profile;
// export default withRouter(Profile);