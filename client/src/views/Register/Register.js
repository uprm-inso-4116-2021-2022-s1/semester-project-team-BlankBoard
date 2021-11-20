import { React, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Modal,
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
  IconButton,
  makeStyles,
} from "@material-ui/core";
import Canvas from "../../components/Canvas/Canvas";
import isAuthenticated from "../../common/authentication";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: ["Caveat Brush", "cursive"].join(","),
    fontWeight: "lighter",
    alignItems: "center",
    alignContent: "center",
    background: "linear-gradient(to top, #ffcbcb, #fff4f4)",
    backgroundAttachment: "fixed",
  },
  cred_card: {
    padding: "30px",
    margin: "50px",
    width: "fit-content",
    borderRadius: "20px",
  },
  bb_f1: {
    color: "#283861",
    fontSize: "40px",
    textAlign: "center",
  },
  reg_card: {
    width: "32rem",
  },
  cred_container: {
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  cred_pic: {
    [theme.breakpoints.up("sm")]: {
      height: "10rem",
      width: "10rem",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      height: "5rem",
      width: "5rem",
    },
  },
  cred_pic_text: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "700",
    width: "100%",
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
  },
  cred_register: {
    color: "gray",
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
}));

const Register = () => {
  const classes = useStyles();
  let history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState("");
  const [username, setUsername] = useState("");
  const [screen_name, setScreenName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [loading, setLoading] = useState(true);
  const [authentication, setAuthentication] = useState({
    loading: true,
    authenticated: false,
  });
  // const [authenticated, setAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const canvasCall = (newPic) => {
    setProfile(newPic);
    closeModal();
  };
  const [warning, setWarning] = useState([
    "Invalid Credentials",
    "You have entered invalid information.",
  ]);

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
        <Grid
          container
          className={classes.cred_container}
          justifyContent="center"
        >
          <Grid item>
            <Card className={classes.cred_card}>
              <Grid
                container
                className={classes.cred_container}
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.bb_f1,
                      classes.cred_container
                    )}
                    textAlign="center"
                  >
                    Welcome to BlankBoard!
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                className={classes.cred_container}
                justifyContent="center"
              >
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography className={classes.cred_pic_text}>
                    Click on the circle to put a profile picture!
                  </Typography>
                  <IconButton onClick={openModal}>
                    <Avatar className={classes.cred_pic} src={profile} />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <TextField
                      className={classes.reg_input}
                      label="Username"
                      variant="standard"
                      type="name"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                    <TextField
                      className={classes.reg_input}
                      label="Screen Name"
                      variant="standard"
                      type="name"
                      id="screen_name"
                      name="screen_name"
                      placeholder="Screen Name"
                      value={screen_name}
                      onChange={(e) => setScreenName(e.target.value)}
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                    <TextField
                      className={classes.reg_input}
                      label="Email"
                      variant="standard"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                    <TextField
                      className={classes.reg_input}
                      label="Password"
                      variant="standard"
                      type="password"
                      id="pwd"
                      name="pwd"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                    <TextField
                      className={classes.reg_input}
                      label="Confirm Password"
                      variant="standard"
                      type="cPassword"
                      id="cpwd"
                      name="cpwd"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                    <Button
                      className={
                        (classes.log_input,
                        classes.cred_button,
                        classes.cred_button_text)
                      }
                      type="button"
                      variant="contained"
                      onClick={handleRegister}
                    >
                      Sign Up
                    </Button>
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                container
                className={classes.cred_container}
                justifyContent="center"
              >
                <Grid item>
                  <Typography className={classes.cred_register}>
                    Already have an account? <a href="/login">Log in</a>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Modal className="modalWindow" open={showModal} onClose={closeModal}>
          <Canvas
            canvasCall={canvasCall}
            user={1}
            thread={0}
            options={"pfp"}
            visible={showModal}
          />
        </Modal>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{warning[0]}</DialogTitle>
          <DialogContent>
            <DialogContentText>{warning[1]}</DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  function handleClose() {
    setOpen(false);
  }

  function handleRegister() {
    const body = {
      profile,
      username,
      screen_name,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setWarning([
        "Password Mismatch",
        "The passwords you entered are not identical, please try again.",
      ]);
    }
    const bodySend = JSON.stringify(body);
    axios({
      method: "POST",
      url: process.env.REACT_APP_API + "/auth/register",
      data: bodySend,
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    })
      .then((res) => {
        setCookie("token", res.data.jwtToken);
        history.push("/");
      })
      .catch((e) => {
        setOpen(true);
      });
  }
};

export default Register;
