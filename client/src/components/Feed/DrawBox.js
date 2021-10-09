import React from 'react'
import "./DrawBox.css";
import {Avatar, Button} from "@mui/material";

function DrawBox() {
    return( 
    <div className="drawBox">
        <form>
            <div className="drawBox__input"> 
                <Avatar src="https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/4:3/w_2664,h_1998,c_limit/dog-unsolicited.jpg"></Avatar>
                <input placeholder="Are you ready to draw? :D"/>
            </div>
                <input 
                className="drawBox__imageInput"
                placeholder="Enter image URL"
                type="text"
                />
            <Button className="drawBox__drawButton">Draw</Button>
        </form>
    </div>
    );
}

export default DrawBox;
