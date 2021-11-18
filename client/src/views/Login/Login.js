import React, {useEffect, useState} from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router-dom';
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
  DialogContentText
} from '@mui/material';
import isAuthenticated from '../../common/authentication'




const Login = () => {
  let history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authentication, setAuthentication] = useState({
    loading: true,
    authenticated: false,
  });

  useEffect(() => {
    async function authenticate() {
      let flag = await isAuthenticated(cookies.token);
      setAuthentication({ loading: false, authenticated: flag });
    }
    authenticate();
  }, [cookies.token]);

  if (authentication.loading) {
    return <h1>Loading...</h1>;
  } else if (authentication.authenticated) {
    return <Redirect to={"/"} />;
  } else {

    return (
      <>
        <Grid container className="cred_container cred_page" justifyContent="center">
          <Grid item>
            <Card className="cred_card">
              <Grid container className="cred_container" justifyContent="center">
                <Grid item xs={12}>
                  <Typography className="bb_f1 cred_title" textAlign="center">
                    Sign in to BlankBoard
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className="cred_container" justifyContent="center">
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
                    <Button className="log_input cred_button bb_f1" type="button" variant="contained" onClick={handleLogin}>Sign In</Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                    >
                      <DialogTitle>
                        {"Invalid Credentials"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          It appears you have entered an incorrect email or password, please try again.
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid container className="cred_container" justifyContent="center">
                <Grid item>
                  <Typography className="cred_register">
                    New to Blank Board? <a href="/register">Create a new account!</a>
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
      password
    };
    const bodySend = JSON.stringify(body);
    axios({
      method: 'POST',
      url: process.env.REACT_APP_API + "/auth/login",
      data: bodySend,
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    }).then(res => {
      setCookie("token", res.data.jwtToken);
      history.push("/");
    }).catch(e => {
      setOpen(true);
    });
  }

};

export default Login;
