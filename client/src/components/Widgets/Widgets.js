import React from 'react'
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
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
    )
}

export default Widgets
