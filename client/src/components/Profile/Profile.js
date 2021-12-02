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

  const showPosts = () => {
    return (
      <ImageList cols={3} gap={32}>
        {props.posts.map((post, i) => (
          <ImageListItem
            key={i}
            sx={{
              height: "10rem",
              width: "10rem",
            }}
          >
            <img
              className="prf_post"
              alt=""
              src={`${post.post_content}?w=320&h=320&fit=crop&auto=format`}
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
            mt: "4rem",
            width: "fit-content",
            height: "fit-content",
            [theme.breakpoints.up("sm")]: {
              ml: "20%",
            },
            [theme.breakpoints.up("md")]: {
              ml: "25%",
            },
            [theme.breakpoints.up("lg")]: {
              ml: "30%",
            },
            [theme.breakpoints.up("xl")]: {
              ml: "35%",
            },
          }}
        >
          <CardHeader
            avatar={
              <IconButton onClick={openModal}>
                <Avatar
                  sx={{
                    height: "5rem",
                    width: "5rem",
                    ml: "auto",
                  }}
                  src={props.user.profile ? props.user.profile : ""}
                ></Avatar>
              </IconButton>
            }
            title={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "30px",
                  ml: "auto",
                }}
              >
                {props.user.screen_name ? props.user.screen_name : ""}
              </Typography>
            }
            subheader={
              <Typography
                sx={{
                  color: "gray",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "30px",
                  ml: "auto",
                }}
              >
                @{props.user.username ? props.user.username : ""}
              </Typography>
            }
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
                  {props.posts.length}
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
                  {props.replies.length}
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
