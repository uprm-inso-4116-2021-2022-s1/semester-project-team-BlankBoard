import React from "react";
import NavbarOption from "./NavbarOption";
import "./Navbar.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Button } from "@mui/material";

function Navbar() {
    return (
        <div className="navbar">
            {/* Sharedes (temporary) icon */}

            <h1> Sharedes </h1>

            {/* Home */}

            <NavbarOption active Icon={HomeRoundedIcon} text="Home"/>

            {/* Profile */}

            <NavbarOption Icon={AccountCircleOutlinedIcon} text="Profile"/>

            {/* Notifications */}

            <NavbarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications"/>

            {/* Draw Button */}

            <Button variant="outlined" className="navbar__draw" fullWidth>
                Draw            
            </Button>
        </div>
    );
}

export default Navbar;