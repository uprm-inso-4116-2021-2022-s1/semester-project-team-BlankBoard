import { React, useState } from "react";
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
import { makeStyles } from "@mui/styles";
import isAuthenticated from "../../common/authentication";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  cred_card: {
    padding: "30px",
    margin: "auto",
    width: "fit-content",
    borderRadius: "20px",
  },
  bb_f1: {
    color: "#283861",
    fontSize: "40px",
    textAlign: "center",
    fontFamily: "Caveat Brush",
  },
  reg_card: {
    width: "32rem",
  },
  cred_container: {
    padding: "20px",
    paddingTop: "50px",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Caveat Brush",
  },
  log_input: {
    margin: "20px",
  },
  reg_input: {
    margin: "20px",
  },
  input: {
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
  cred_button: {
    borderRadius: "200px",
    fontSize: "20px",
    color: "#283861",
    background:
      "linear-gradient(to right,rgb(201, 253, 255, 1),rgb(223, 254, 255, 1))",
  },
  cred_button_text: {
    color: "#283861",
    fontSize: "20px",
    textAlign: "center",
  },
  cred_title: {
    fontSize: "36px",
    fontFamily: "Caveat Brush",
  },
  cred_register: {
    color: "gray",
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
}));

const Login = () => {
  const classes = useStyles();
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
        className={classNames(classes.cred_container, classes.cred_card)}
        justifyContent="center"
      >
        <Grid item xs={12} sm={12}>
          <Card className={classes.cred_card}>
            <Grid
              container
              className={classes.cred_container}
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Typography
                  className={classNames(classes.bb_f1, classes.cred_title)}
                  textAlign="center"
                >
                  Sign in to BlankBoard
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              className={classes.cred_container}
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
                  />
                  <Button
                    className="log_input cred_button bb_f1"
                    type="button"
                    variant="contained"
                    onClick={handleLogin}
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
              className={classes.cred_container}
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Typography className={classes.cred_register}>
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
