import React from "react";
import "./Navbar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";

function Navbar(props) {
  return (
    <>
      <AppBar position="fixed" className="nav">
        <Toolbar>
          <Grid container>
            <Grid container item xs={1.5}>
              <img
                alt="logo"
                className="nav_logo"
                src="https://res.cloudinary.com/dsunqodr1/image/upload/v1636853232/blankboard/assets/uhi3r9t3jzqls4xhcsyx.png"
              ></img>
            </Grid>
            <Grid container item xs={3.5}>
              <Typography
                className="nav_text nav_title"
                sx={{ fontFamily: "Caveat Brush" }}
              >
                BlankBoard
              </Typography>
            </Grid>
            <Grid container item xs={1}>
              <IconButton
                onClick={() => {
                  props.setTab("feed");
                }}
              >
                <HomeRoundedIcon className="nav_btn"></HomeRoundedIcon>
              </IconButton>
            </Grid>
            <Grid container item xs={2}>
              <IconButton
                onClick={() => {
                  props.setTab("profile");
                }}
              >
                <AccountCircleIcon className="nav_btn"></AccountCircleIcon>
              </IconButton>
            </Grid>
            <Grid container item xs={0.5}>
              <Avatar
                src={props.user.profile ? props.user.profile : ""}
                className="nav_prof_pic"
              />
            </Grid>
            <Grid container item xs={1}>
              <Typography className="nav_text nav_name">
                {props.user.screen_name
                  ? props.user.screen_name
                  : props.user.username
                  ? props.user.username
                  : ""}
              </Typography>
            </Grid>
            <Grid container item xs={1}>
              <IconButton onClick={props.signOut}>
                <ExitToAppIcon className="nav_btn"></ExitToAppIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
