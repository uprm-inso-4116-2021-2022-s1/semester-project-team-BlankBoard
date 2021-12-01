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
  Stack,
  Container,
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  ListItemText,
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
        <Container maxWidth="false">
          <Toolbar
            disableGutters
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <ListItemIcon>
                <ColorLensTwoToneIcon
                  sx={{
                    color: "var(--sharedes-blueDark)",
                    pr: "0px",
                    fontSize: {
                      sm: "3em",
                      md: "3em",
                    },
                  }}
                />
              </ListItemIcon>{" "}
              <ListItemText>
                <Typography
                  sx={{
                    fontFamily: "Caveat Brush",
                    color: "var(--sharedes-blueDark)",
                    fontWeight: "bolder",
                    fontSize: "20px",
                    fontSize: {
                      sm: "30px",
                      md: "30px",
                    },
                    pr: {
                      md: "3rem",
                    },
                    display: {
                      xs: "none",
                      sm: "inline-flex",
                      md: "inline-flex",
                      lg: "inline-flex",
                      xl: "inline-flex",
                    },
                  }}
                >
                  BlankBoard
                </Typography>
              </ListItemText>
              <ListItemIcon>
                <IconButton
                  onClick={() => {
                    props.setTab("feed");
                  }}
                >
                  <HomeRoundedIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      fontSize: {
                        sm: "1em",
                        md: "1.5em",
                      },
                    }}
                  ></HomeRoundedIcon>
                </IconButton>
              </ListItemIcon>
              <ListItemIcon>
                <IconButton
                  onClick={() => {
                    props.setTab("profile");
                  }}
                >
                  <AccountCircleIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      fontSize: {
                        sm: "1em",
                        md: "1.5em",
                      },
                      pr: { sm: "2rem" },
                    }}
                  ></AccountCircleIcon>
                </IconButton>
              </ListItemIcon>
              <ListItemAvatar>
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
              </ListItemAvatar>
              <ListItemText>
                <Typography
                  sx={{
                    fontWeight: "normal",
                    fontSize: "25px",
                    fontFamily: "Caveat Brush",
                    color: "var(--sharedes-blueDark)",
                    display: {
                      xs: "none",
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                  }}
                >
                  {props.user.screen_name
                    ? props.user.screen_name
                    : props.user.username
                    ? props.user.username
                    : ""}
                </Typography>
              </ListItemText>
              <ListItemIcon>
                <IconButton onClick={props.signOut}>
                  <ExitToAppIcon
                    sx={{
                      color: "var(--sharedes-blueDark)",
                      fontSize: {
                        md: "2rem",
                      },
                      m: {
                        xs: "0px",
                      },
                    }}
                  ></ExitToAppIcon>
                </IconButton>
              </ListItemIcon>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
