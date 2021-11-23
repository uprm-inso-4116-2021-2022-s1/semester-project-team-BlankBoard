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
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material";

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

function Navbar(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toolbar>
          <AppBar position="fixed" className="nav">
            <Grid container>
              <Grid container item xs={1.2} sm={1.5} md={1}>
                <img
                  alt="logo"
                  className="nav_logo"
                  src="https://res.cloudinary.com/dsunqodr1/image/upload/v1636853232/blankboard/assets/uhi3r9t3jzqls4xhcsyx.png"
                ></img>
              </Grid>
              <Grid container item xs={2.5} sm={4.5} md={3.5}>
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
                  className="nav_btn"
                >
                  <HomeRoundedIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      [theme.breakpoints.up("xs")]: {
                        width: "1em",
                        height: "1em",
                      },
                      [theme.breakpoints.between("sm", "md")]: {
                        width: "2em",
                        height: "2em",
                      },
                      [theme.breakpoints.up("lg")]: {
                        width: "3em",
                        height: "3em",
                      },
                    }}
                  ></HomeRoundedIcon>
                </IconButton>
              </Grid>
              <Grid container item xs={1.5} sm={2} md={1.5}>
                <IconButton
                  onClick={() => {
                    props.setTab("profile");
                  }}
                  className="nav_btn"
                >
                  <AccountCircleIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      [theme.breakpoints.up("xs")]: {
                        width: "1em",
                        height: "1em",
                      },
                      [theme.breakpoints.between("sm", "md")]: {
                        width: "2em",
                        height: "2em",
                      },
                      [theme.breakpoints.up("lg")]: {
                        width: "3em",
                        height: "3em",
                      },
                    }}
                  ></AccountCircleIcon>
                </IconButton>
              </Grid>
              <Grid container item xs={0.1} sm={0.5} md={1}>
                <Avatar
                  src={props.user.profile ? props.user.profile : ""}
                  className="nav_prof_pic"
                  sx={{
                    [theme.breakpoints.up("xs")]: {
                      width: "1.5em",
                      height: "1.5em",
                    },
                    [theme.breakpoints.up("sm")]: {
                      width: "2.5em",
                      height: "2.5em",
                    },
                    [theme.breakpoints.up("md")]: {
                      width: "3em",
                      height: "3em",
                    },
                    [theme.breakpoints.up("lg")]: {
                      width: "4em",
                      height: "4em",
                    },
                  }}
                />
              </Grid>
              <Grid container item xs={1} md={2.5}>
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
                  <ExitToAppIcon
                    className="nav_btn"
                    sx={{
                      [theme.breakpoints.between("sm", "md")]: {
                        width: "2em",
                        height: "2em",
                      },
                      [theme.breakpoints.up("lg")]: {
                        width: "3em",
                        height: "3em",
                      },
                    }}
                  ></ExitToAppIcon>
                </IconButton>
              </Grid>
            </Grid>
          </AppBar>
        </Toolbar>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
