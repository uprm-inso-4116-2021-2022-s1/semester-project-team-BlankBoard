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

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

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
      <>
        <Grid
          container
          className="cred_container cred_page"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Card className="cred_card">
              <Grid
                container
                className="cred_container"
                justifyContent="center"
              >
                <Grid item xs={12} sm={6}>
                  <Typography className="bb_f1 cred_title" textAlign="center">
                    Sign in to BlankBoard
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                className="cred_container"
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
                className="cred_container"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Typography className="cred_register">
                    New to Blank Board?{" "}
                    <a href="/register">Create a new account!</a>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </>
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
