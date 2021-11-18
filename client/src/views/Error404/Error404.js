import React from 'react'
import "./Error404.css";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function Error404() {

    let history = useHistory();

    return (
    <div className="error404">
        <h1>Page not found</h1>
        <Button 
        variant="text" 
        className="error404__returnHome" 
        onClick={() => {history.push("/");}}
        fullWidth>
            Return Home          
        </Button>
    </div>
    )
}

export default Error404;