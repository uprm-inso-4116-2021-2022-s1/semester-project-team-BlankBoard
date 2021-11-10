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
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636585376/blankboard/zhgxrirylenlghtrgi6m.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636584833/blankboard/fiewyhdxo7hb8xp9v6qj.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636585569/blankboard/jbmcsbvr2zbw982bpkd8.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636585796/blankboard/f5chxncquhdlo3z4e70v.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636585815/blankboard/nvezntg06oebio2ikzcf.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636586193/blankboard/xhzsb1sm5g7vf1nxqfij.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636585889/blankboard/oq2gieifmtmioygrfv26.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636586034/blankboard/xmygk1u9dhehijnv4zn7.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636585957/blankboard/jprpx4tmj6sqcda9xb7i.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636585973/blankboard/unokwhpi6posevnb1qct.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636586119/blankboard/tqlpetz0abv747fl0bam.png',
    'https://res.cloudinary.com/dsunqodr1/image/upload/v1636586093/blankboard/q2mxykwhhohyixetl46g.png'
  ];

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