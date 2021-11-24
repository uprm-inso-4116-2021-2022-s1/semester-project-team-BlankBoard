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
              <Grid container item xs={1.2} sm={1.5} md={1} xl={1}>
                <img
                  alt="logo"
                  className="nav_logo"
                  src="https://res.cloudinary.com/dsunqodr1/image/upload/v1636853232/blankboard/assets/uhi3r9t3jzqls4xhcsyx.png"
                ></img>
              </Grid>
              <Grid container item xs={2.5} sm={3} md={3} xl={3}>
                <Typography className="nav_text nav_title">
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
                      [theme.breakpoints.up("sm")]: {
                        width: "1em",
                        height: "1em",
                      },
                      [theme.breakpoints.up("md")]: {
                        width: "2em",
                        height: "2em",
                      },
                      [theme.breakpoints.up("lg")]: {
                        width: "3em",
                        height: "3em",
                      },
                      [theme.breakpoints.up("xl")]: {
                        width: "2em",
                        height: "2em",
                      },
                    }}
                  ></HomeRoundedIcon>
                </IconButton>
              </Grid>
              <Grid container item xs={1.5} sm={1.5} md={1.5}>
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
                      [theme.breakpoints.up("sm")]: {
                        width: "1em",
                        height: "1em",
                      },
                      [theme.breakpoints.up("md")]: {
                        width: "2em",
                        height: "2em",
                      },
                      [theme.breakpoints.up("lg")]: {
                        width: "3em",
                        height: "3em",
                      },
                      [theme.breakpoints.up("xl")]: {
                        width: "2em",
                        height: "2em",
                      },
                    }}
                  ></AccountCircleIcon>
                </IconButton>
              </Grid>
              <Grid container item xs={0.1} sm={0.5} md={1} xl={0.7}>
                <Avatar
                  src={props.user.profile ? props.user.profile : ""}
                  className="nav_prof_pic"
                  sx={{
                    mt: "13px",
                    [theme.breakpoints.up("xs")]: {
                      width: "1.5em",
                      height: "1.5em",
                    },
                    [theme.breakpoints.up("sm")]: {
                      width: "2em",
                      height: "2em",
                    },
                    [theme.breakpoints.up("md")]: {
                      width: "3em",
                      height: "3em",
                    },
                    [theme.breakpoints.up("lg")]: {
                      width: "4em",
                      height: "4em",
                    },
                    [theme.breakpoints.up("xl")]: {
                      width: "3em",
                      height: "3em",
                    },
                  }}
                />
              </Grid>
              <Grid container item xs={0.7} xl={3}>
                <Typography
                  className="nav_text nav_name"
                  sx={{
                    fontWeight: "normal",
                    fontSize: "25px",
                    fontFamily: "Caveat Brush",
                    color: "var(--sharedes-blueDark)",
                    visibility: "hidden",
                    [theme.breakpoints.up("xl")]: {
                      visibility: "visible",
                      fontSize: "25px",
                    },
                  }}
                >
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
                      color: "var(--sharedes-blueDark)",
                      [theme.breakpoints.up("sm")]: {
                        width: "1em",
                        height: "1em",
                      },
                      [theme.breakpoints.up("md")]: {
                        width: "2em",
                        height: "2em",
                      },
                      [theme.breakpoints.up("lg")]: {
                        width: "3em",
                        height: "3em",
                      },
                      [theme.breakpoints.up("xl")]: {
                        width: "2em",
                        height: "2em",
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
