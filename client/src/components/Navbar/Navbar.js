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
      <AppBar position="sticky" className="nav">
        <Toolbar>
          <Grid container>
            <Grid container item>
              <img
                alt="logo"
                className="nav_logo"
                src="https://res.cloudinary.com/dsunqodr1/image/upload/v1636853232/blankboard/assets/uhi3r9t3jzqls4xhcsyx.png"
              ></img>
            </Grid>
            <Grid container item>
              <Typography
                className="nav_text nav_title"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                BlankBoard
              </Typography>
            </Grid>
            <Grid container item>
              <IconButton
                onClick={() => {
                  props.setTab("feed");
                }}
              >
                <HomeRoundedIcon className="nav_btn"></HomeRoundedIcon>
              </IconButton>
            </Grid>
            <Grid container item>
              <IconButton
                onClick={() => {
                  props.setTab("profile");
                }}
              >
                <AccountCircleIcon className="nav_btn"></AccountCircleIcon>
              </IconButton>
            </Grid>
            <Grid container item>
              <Avatar
                src={props.user.profile ? props.user.profile : ""}
                className="nav_prof_pic"
              />
            </Grid>
            <Grid container item>
              <Typography
                className="nav_text nav_name"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                {props.user.screen_name
                  ? props.user.screen_name
                  : props.user.username
                  ? props.user.username
                  : ""}
              </Typography>
            </Grid>
            <Grid container item>
              <IconButton onClick={props.signOut}>
                <ExitToAppIcon className="nav_btn"></ExitToAppIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <Grid container spacing={0} className="nav">
                <Grid item xs={12} justifyContent="center" textAlign="center">
                    <h1> BlankBoard </h1>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" className="nav_button" fullWidth>
                        <HomeRoundedIcon /> Home
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" className="nav_button" fullWidth >
                        <AccountCircleOutlinedIcon /> Profile
                    </Button>
                </Grid>
                <Grid container item xs={12}>
                    <Button variant="outlined" className="nav_button nav_draw" fullWidth>
                        Draw
                    </Button>
                </Grid>
            </Grid> */}
    </>
  );
}

export default Navbar;
