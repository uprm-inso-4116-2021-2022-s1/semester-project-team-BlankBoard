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
      xl: 1200,
    },
  },
});

function Navbar(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            boxShadow: "0 3px 6px lightgray",
            background:
              "linear-gradient(to right,rgb(201, 253, 255, 1),rgb(223, 254, 255, 1))",
          }}
        >
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
                <ColorLensTwoToneIcon
                  sx={{
                    color: "var(--sharedes-blueDark)",
                    height: "fit-content",
                    fontSize: {
                      xs: "2rem",
                      sm: "3rem",
                      md: "3rem",
                      lg: "3.5rem",
                    },
                    padding: {
                      xs: "8px",
                      sm: "8px",
                      md: "8px",
                      lg: "8px",
                    },
                  }}
                />
                {/* <img
                  alt="logo"
                  src="https://res.cloudinary.com/dsunqodr1/image/upload/v1636853232/blankboard/assets/uhi3r9t3jzqls4xhcsyx.png"
                ></img> */}
              </Grid>
              <Grid container item xs={3} sm={3} lg={3} xl={3}>
                <Typography
                  sx={{
                    fontFamily: "Caveat Brush",
                    color: "var(--sharedes-blueDark)",
                    fontWeight: "bolder",
                    height: "fit-content",
                    fontSize: {
                      xs: "20px",
                      sm: "30px",
                      lg: "30px",
                      xl: "40px",
                    },
                    padding: {
                      xs: "8px",
                      sm: "8px",
                      md: "8px",
                      lg: "8px",
                    },
                  }}
                >
                  BlankBoard
                </Typography>
              </Grid>
              <Grid container item xs={1} sm={1} lg={1} xl={1}>
                <IconButton
                  onClick={() => {
                    props.setTab("feed");
                  }}
                >
                  <HomeRoundedIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      fontSize: {
                        xs: "30px",
                        sm: "2em",
                        md: "30px",
                        lg: "40px",
                        xl: "4em",
                      },
                      height: {
                        xs: "30px",
                        sm: "2em",
                        md: "30px",
                        lg: "40px",
                        xl: "4em",
                      },
                      padding: {
                        xs: "8px",
                        sm: "8px",
                        md: "8px",
                        lg: "8px",
                      },
                    }}
                  ></HomeRoundedIcon>
                </IconButton>
              </Grid>
              <Grid container item xs={1.5} sm={2} lg={2} xl={1}>
                <IconButton
                  onClick={() => {
                    props.setTab("profile");
                  }}
                >
                  <AccountCircleIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      fontSize: {
                        xs: "30px",
                        sm: "2em",
                        md: "30px",
                        lg: "40px",
                        xl: "4em",
                      },
                      height: {
                        xs: "30px",
                        sm: "2em",
                        md: "30px",
                        lg: "40px",
                        xl: "4em",
                      },
                      padding: {
                        xs: "8px",
                        sm: "8px",
                        md: "8px",
                        lg: "8px",
                      },
                    }}
                  ></AccountCircleIcon>
                </IconButton>
              </Grid>
              <Grid container item xs={0.7} md={0.7} xl={1}>
                <Avatar
                  src={props.user.profile ? props.user.profile : ""}
                  sx={{
                    borderRadius: "5px",
                    width: {
                      xs: "30px",
                      sm: "2em",
                      md: "30px",
                      lg: "40px",
                      xl: "4em",
                    },
                    height: {
                      xs: "30px",
                      sm: "2em",
                      md: "30px",
                      lg: "40px",
                      xl: "4em",
                    },
                    padding: {
                      xs: "8px",
                      sm: "8px",
                      md: "8px",
                      lg: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid container item xs={0.5} md={2} xl={1}>
                <Typography
                  sx={{
                    fontWeight: "normal",
                    fontSize: "25px",
                    fontFamily: "Caveat Brush",
                    color: "var(--sharedes-blueDark)",
                    visibility: {
                      xs: "hidden",
                      sm: "hidden",
                      md: "visible",
                    },
                    fontSize: {
                      md: "20px",
                    },
                    padding: {
                      xs: "8px",
                      sm: "8px",
                      md: "8px",
                      lg: "8px",
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
              <Grid container item xs={1} xl={1}>
                <IconButton onClick={props.signOut}>
                  <ExitToAppIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      width: {
                        xs: "30px",
                        sm: "2em",
                        md: "30px",
                        lg: "30px",
                        xl: "4em",
                      },
                      height: {
                        xs: "30px",
                        sm: "2em",
                        md: "30px",
                        lg: "30px",
                        xl: "4em",
                      },
                    }}
                  ></ExitToAppIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
