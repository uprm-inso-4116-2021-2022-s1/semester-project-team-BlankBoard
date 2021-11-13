import { React, useState } from "react";
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




const Register = () => {
    let history = useHistory();
    const [cookies, setCookie] = useCookies(["user"]);
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    const check = async () => {
        setAuthenticated(await isAuthenticated(cookies.token));
        setLoading(false);
    }

    if (loading) {
        check();
        return <h1>Loading...</h1>
    } else if (authenticated) {
        return <Redirect to={'/'} />
    } else {

        return (
            <>
                <Grid container className="cred_container" justifyContent="center">
                    <Grid item>
                        <Card className="cred_card">
                            <Grid container className="cred_container" justifyContent="center">
                                <Grid item xs={12}>
                                    <Typography className="cred_title" textAlign="center">
                                        Just another day, in BlankBoard City
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className="cred_container" justifyContent="center">
                                <Grid item xs={12}>
                                    <FormGroup>
                                        <TextField
                                            className="cred_input"
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
                                            className="cred_input"
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
                                            className="cred_input"
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
                                            className="cred_input"
                                            label="Confirm Password"
                                            variant="standard"
                                            type="cpassword"
                                            id="cpwd"
                                            name="cpwd"
                                            placeholder="Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <Button className="cred_button" type="button" variant="contained" onClick={handleRegister}>Sign Up</Button>
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
                                        Already have an account? <a href="/login">Log in</a>
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

    function handleRegister() {
        const body = {
            username,
            email,
            password
        };
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
            console.log("Cookie right after setting", cookies.token);
            history.push("/");
        }).catch(e => {
            setOpen(true);
        });
    }

};

export default Register;
