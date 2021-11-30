import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Card,
  Avatar,
  Typography,
  IconButton,
  Modal,
  ThemeProvider,
  CardMedia,
  CardContent,
  CardHeader,
  createTheme,
  Stack,
  ListItem,
} from "@mui/material";
import Canvas from "../../components/Canvas/Canvas";
import axios from "axios";
import Divider from "@mui/material/Divider";

function Profile(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const canvasCall = async (profile) => {
    await axios({
      method: "PUT",
      url: process.env.REACT_APP_API + `/users/${props.user.user_id}`,
      data: JSON.stringify({ profile }),
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    });
    window.location.reload(false);
  };

  const numOfPosts = 3;
  const numOfComments = 7;

  const posts = [
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636585376/blankboard/zhgxrirylenlghtrgi6m.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636584833/blankboard/fiewyhdxo7hb8xp9v6qj.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636585569/blankboard/jbmcsbvr2zbw982bpkd8.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636585796/blankboard/f5chxncquhdlo3z4e70v.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636585815/blankboard/nvezntg06oebio2ikzcf.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636586193/blankboard/xhzsb1sm5g7vf1nxqfij.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636585889/blankboard/oq2gieifmtmioygrfv26.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636586034/blankboard/xmygk1u9dhehijnv4zn7.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636585957/blankboard/jprpx4tmj6sqcda9xb7i.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636585973/blankboard/unokwhpi6posevnb1qct.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636586119/blankboard/tqlpetz0abv747fl0bam.png",
    "https://res.cloudinary.com/dsunqodr1/image/upload/v1636586093/blankboard/q2mxykwhhohyixetl46g.png",
  ];

  const showPosts = () => {
    return (
      <ImageList cols={3} gap={32}>
        {posts.map((post, i) => (
          <ImageListItem key={i} sx={{ width: "150px", height: "150px" }}>
            <img
              className="prf_post"
              alt=""
              src={`${post}?w=320&h=320&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300,
        sm: 500,
        md: 700,
        lg: 1000,
        xl: 1200,
      },
    },
  });

  // render() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            [theme.breakpoints.up("xs")]: {
              mt: "30px",
              ml: "0",
              borderRadius: "10px",
              width: "fit-content",
              height: "auto",
            },
            [theme.breakpoints.up("md")]: {
              ml: "10%",
            },
            [theme.breakpoints.up("lg")]: {
              ml: "30%",
            },
          }}
        >
          <CardHeader
            avatar={
              <IconButton onClick={openModal}>
                <Avatar
                  src={props.user.profile ? props.user.profile : ""}
                  sx={{
                    height: "5rem",
                    width: "5rem",
                    margin: "30px",
                  }}
                ></Avatar>
              </IconButton>
            }
            title={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "30px",
                  m: "10px",
                }}
              >
                {props.user.screen_name ? props.user.screen_name : ""}{" "}
              </Typography>
            }
            titleTypographyProps={{ align: "center" }}
            subheader={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "30px",
                  m: "10px",
                  color: "gray",
                }}
              >
                @{props.user.username ? props.user.username : ""}{" "}
              </Typography>
            }
            subheaderTypographyProps={{ align: "center", gutterBottom: true }}
          />
          <CardContent>
            <Stack
              spacing={3}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    m: "10px",
                  }}
                >
                  {numOfPosts}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    m: "10px",
                  }}
                >
                  posts
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    m: "10px",
                  }}
                >
                  {numOfComments}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    m: "10px",
                  }}
                >
                  replies
                </Typography>
              </ListItem>
            </Stack>
            <CardMedia>{showPosts()}</CardMedia>
          </CardContent>
        </Card>
      </ThemeProvider>
      <Modal
        className="modalWindow"
        open={showModal}
        onClose={closeModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Canvas
          canvasCall={canvasCall}
          user={props.user}
          thread={0}
          options={"pfp"}
          visible={showModal}
          sx={{ width: "75%" }}
        />
      </Modal>
    </React.Fragment>
  );
}

export default Profile;
