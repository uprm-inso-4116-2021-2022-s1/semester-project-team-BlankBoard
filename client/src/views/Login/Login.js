import { useState } from "react";
import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  TextField,
  Button,
  FormGroup,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import isAuthenticated from "../../common/authentication";
import "./Login.css";

const Login = () => {
  let history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const check = async () => {
    setAuthenticated(await isAuthenticated(cookies.token));
    setLoading(false);
  };

  if (loading) {
    check();
    return <h1>Loading...</h1>;
  } else if (authenticated) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <Grid
        container
        className="login_cred_container, login_cred_card"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12}>
          <Card className="login_cred_card">
            <Grid
              container
              className="login_cred_container"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Typography
                  className="login_bb_f1, login_cred_title"
                  textAlign="center"
                  sx={{
                    color: "#283861",
                    fontSize: "40px",
                    textAlign: "center",
                    fontFamily: "Caveat Brush",
                  }}
                >
                  Sign in to BlankBoard
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              className="login_cred_container"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <FormGroup>
                  <TextField
                    className="log_input"
                    label="Email"
                    variant="standard"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      label: {
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                      },
                      input: {
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                      },
                    }}
                  />
                  <TextField
                    className="log_input"
                    label="Password"
                    variant="standard"
                    type="password"
                    id="pwd"
                    name="pwd"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                      label: {
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                      },
                      input: {
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                      },
                    }}
                  />
                  <Button
                    className="log_input login_cred_button login_bb_f1"
                    type="button"
                    variant="contained"
                    onClick={handleLogin}
                    sx={{
                      borderRadius: "200px",
                      fontSize: "20px",
                      fontFamily: "Caveat Brush",
                      color: "#283861",
                      background:
                        "linear-gradient(to right,rgb(201, 253, 255, 1),rgb(223, 254, 255, 1))",
                    }}
                  >
                    Sign In
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{"Invalid Credentials"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        It appears you have entered an incorrect email or
                        password, please try again.
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </FormGroup>
              </Grid>
            </Grid>
            <Grid
              container
              className="login_cred_container"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Typography
                  className="login_cred_register"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  New to Blank Board?{" "}
                  <a href="/register">Create a new account!</a>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    );
  }

  function handleClose() {
    setOpen(false);
  }

  function handleLogin() {
    const body = {
      email,
      password,
    };
    const bodySend = JSON.stringify(body);
    axios({
      method: "POST",
      url: process.env.REACT_APP_API + "/auth/login",
      data: bodySend,
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    })
      .then((res) => {
        setCookie("token", res.data.jwtToken);
        console.log("Cookie right after setting", cookies.token);
        history.push("/");
      })
      .catch((e) => {
        setOpen(true);
      });
  }
};

export default Login;
