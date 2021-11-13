import React from "react";
import NavbarOption from "./NavbarOption";
import "./Navbar.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Grid, Button } from "@mui/material";

function Navbar() {
    return (
        <>
            <Grid container className="navbar">
                <Grid item xs={12} justifyContent="center" textAlign="center">
                    <h1> BlankBoard </h1>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" className="navbar_button" fullWidth>
                        <HomeRoundedIcon /> Home
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" className="navbar_button" fullWidth >
                        <AccountCircleOutlinedIcon /> Profile
                    </Button>
                </Grid>
                <Grid container item xs={12}>
                    <Button variant="outlined" className="navbar_button navbar_draw" fullWidth>
                        Draw
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Navbar;