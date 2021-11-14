import { React, useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router-dom';
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
    IconButton
} from '@mui/material';
import Canvas from "../../components/Canvas/Canvas";
import isAuthenticated from '../../common/authentication';

const Register = () => {
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
    const [authentication, setAuthentication] = useState({ loading: true, authenticated: false })
    // const [authenticated, setAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const canvasCall = (newPic) => { setProfile(newPic) };
    const [warning, setWarning] = useState(["Invalid Credentials", "You have entered invalid information."]);

    useEffect(() => {
        async function authenticate() {
            let flag = await isAuthenticated(cookies.token);
            setAuthentication({ loading: false, authenticated: flag })
        }
        authenticate();
    }, [cookies.token]);

    if (authentication.loading) {
        return <h1>Loading...</h1>
    } else if (authentication.authenticated) {
        return <Redirect to={'/'} />
    } else {

        return (
            <>
                <Grid container className="cred_page cred_container" justifyContent="center">
                    <Grid item>
                        <Card className="cred_card">
                            <Grid container className="cred_container" padding="0px !important" justifyContent="center">
                                <Grid item xs={12}>
                                    <Typography className="bb_f1 cred_title" textAlign="center">
                                        Welcome to BlankBoard!
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className="cred_container" justifyContent="center">
                                <Grid container item xs={12} justifyContent="center">
                                    <IconButton onClick={openModal}>
                                        <Avatar className="cred_pic" src={profile} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormGroup>
                                        <TextField
                                            className="reg_input"
                                            label="Username"
                                            variant="standard"
                                            type="name"
                                            id="username"
                                            name="username"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <TextField
                                            className="reg_input"
                                            label="Screen Name"
                                            variant="standard"
                                            type="name"
                                            id="screen_name"
                                            name="screen_name"
                                            placeholder="Screen Name"
                                            value={screen_name}
                                            onChange={(e) => setScreenName(e.target.value)}
                                        />
                                        <TextField
                                            className="reg_input"
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
                                            className="reg_input"
                                            label="Password"
                                            variant="standard"
                                            type="password"
                                            id="pwd"
                                            name="pwd"
                                            placeholder="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <TextField
                                            className="reg_input"
                                            label="Confirm Password"
                                            variant="standard"
                                            type="cPassword"
                                            id="cpwd"
                                            name="cpwd"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <Button className="reg_input cred_button" type="button" variant="contained" onClick={handleRegister}>Sign Up</Button>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Grid container className="cred_container" justifyContent="center">
                                <Grid item>
                                    <Typography className="cred_register">
                                        Already have an account? <a href="/login">Log in</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Modal className="modalWindow" open={showModal} onClose={closeModal}>
                    <Canvas canvasCall={canvasCall} user={1} thread={0} options={"pfp"} visible={showModal}/>
                </Modal>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        {warning[0]}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {warning[1]}
                        </DialogContentText>
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
            password
        };
        if (password !== confirmPassword) {
            setWarning(["Password Mismatch","The passwords you entered are not identical, please try again."]);
        }
        const bodySend = JSON.stringify(body);
        axios({
            method: 'POST',
            url: process.env.REACT_APP_API + "/auth/register",
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

export default Register;
