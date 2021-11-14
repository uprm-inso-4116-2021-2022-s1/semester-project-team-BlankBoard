import React from 'react'
import "./DrawBox.css";
import {Avatar, Button} from "@mui/material";

function DrawBox(props) {
    return( 
    <div className="drawBox">
        <form>
            <div className="drawBox__input"> 
                <Avatar src={props.user.profile ? props.user.profile : ""}></Avatar>
                <input placeholder="Drawing 'box' Location Placeholder"/>
            </div>
            <Button className="drawBox__drawButton">Draw</Button>
        </form>
    </div>
    );
}

export default DrawBox;
