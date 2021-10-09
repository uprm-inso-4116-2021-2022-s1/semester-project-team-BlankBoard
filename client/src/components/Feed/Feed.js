import React from 'react'
import "./Feed.css";
import DrawBox from './DrawBox';
import Post from './Post';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';
import Post5 from './Post5';
import Post6 from './Post6';

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2> Home </h2>
            </div>

            {/* drawBox */}

            <DrawBox />

            {/* Posts */}

            <Post />
            <Post2/>
            <Post3/>
            <Post4/>
            <Post5/>
            <Post6/>
        </div>
    )
}

export default Feed
