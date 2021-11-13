import React from 'react'
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Typography, Avatar, IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Widgets(props) {
    return (
        <>
            <Grid container>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <Typography>{props.user.username ? props.user.username : "Nanashi"}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Avatar src={props.user.profile ? props.user.profile : ""} />
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton onClick={props.signOut}><ExitToAppIcon></ExitToAppIcon></IconButton>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <div className="widgets">
                        <div className="widgets__input">
                            <SearchIcon className="widgets__searchIcon" />
                            <input placeholder="Search Sharedes" type="text" />
                        </div>

                        <div className="widgets__widgetContainer">
                            <h1>Latest</h1>
                            <h3> Recent drawing #1 </h3>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> Recent drawing #2 </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> Recent drawing #3 </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> Recent drawing #4 </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> . </h2>
                            <h2> Recent drawing #5 </h2>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Widgets
