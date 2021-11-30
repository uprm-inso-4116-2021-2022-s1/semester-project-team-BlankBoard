import React from "react";
//import "./Navbar.css";
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
  Box,
  Container,
} from "@mui/material";
import { createTheme } from "@mui/material";
import ColorLensTwoToneIcon from "@mui/icons-material/ColorLensTwoTone";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 500,
      md: 700,
      lg: 1000,
      xl: 1400,
    },
  },
});

function Navbar(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "0 3px 6px lightgray",
          background:
            "linear-gradient(to right,rgb(201, 253, 255, 1),rgb(223, 254, 255, 1))",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ColorLensTwoToneIcon
              sx={{
                color: "var(--sharedes-blueDark)",
                pr: "3px",
                fontSize: {
                  md: "3em",
                },
              }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontFamily: "Caveat Brush",
                  color: "var(--sharedes-blueDark)",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  pr: "20px",
                  fontSize: {
                    md: "30px",
                  },
                  pr: {
                    md: "70px",
                    lg: "7em",
                    xl: "15em",
                  },
                }}
              >
                BlankBoard
              </Typography>
              <IconButton
                onClick={() => {
                  props.setTab("feed");
                }}
              >
                <HomeRoundedIcon
                  sx={{
                    color: "var(--sharedes-blueDark)",
                    fontSize: {
                      md: "1.5em",
                    },
                  }}
                ></HomeRoundedIcon>
              </IconButton>
              <IconButton
                onClick={() => {
                  props.setTab("profile");
                }}
              >
                <AccountCircleIcon
                  sx={{
                    color: "var(--sharedes-blueDark)",
                    pr: "20px",
                    fontSize: {
                      md: "1.5em",
                    },
                    pr: {
                      md: "50px",
                      lg: "5em",
                      xl: "10em",
                    },
                  }}
                ></AccountCircleIcon>
              </IconButton>
              <Avatar
                src={props.user.profile ? props.user.profile : ""}
                sx={{
                  borderRadius: "20px",
                  height: {
                    xs: "30px",
                    md: "40px",
                  },
                  width: {
                    xs: "30px",
                    md: "40px",
                  },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "normal",
                  fontSize: "1px",
                  fontFamily: "Caveat Brush",
                  color: "var(--sharedes-blueDark)",
                  visibility: {
                    xs: "visible",
                    sm: "visible",
                    md: "visible",
                    lg: "visible",
                    xl: "visible",
                  },
                  fontSize: {
                    md: "30px",
                  },
                  pr: {
                    md: "30px",
                  },
                }}
              >
                {props.user.screen_name
                  ? props.user.screen_name
                  : props.user.username
                  ? props.user.username
                  : ""}
              </Typography>
              <IconButton onClick={props.signOut}>
                <ExitToAppIcon
                  sx={{
                    color: "var(--sharedes-blueDark)",
                    fontSize: {
                      md: "2rem",
                    },
                  }}
                ></ExitToAppIcon>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>

    /* <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar
            sx={{
              flexGrow: 1,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Grid container>
              <Grid container item xs={1} sx={{ flexGrow: 1 }}>
                {/* <img
                  alt="logo"
                  src="https://res.cloudinary.com/dsunqodr1/image/upload/v1636853232/blankboard/assets/uhi3r9t3jzqls4xhcsyx.png"
                ></img> 
              </Grid>
              <Grid container item xs={3} sm={3} lg={3} xl={3}></Grid>
              <Grid container item xs={1} sm={1} lg={1} xl={1}></Grid>
              <Grid container item xs={1.5} sm={2} lg={2} xl={1}></Grid>
              <Grid container item xs={0.7} md={0.7} xl={1}></Grid>
              <Grid container item xs={0.5} md={2} xl={1}></Grid>
              <Grid container item xs={1} xl={1}></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box> */
  );
}

export default Navbar;
