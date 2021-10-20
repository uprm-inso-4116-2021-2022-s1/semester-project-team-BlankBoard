import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Feed from '../../components/Feed/Feed';
import Widgets from '../../components/Widgets/Widgets';
import "./Home.css";

function Home() {
    return (
    <div className="home"> 

        {/* Navbar */}
            
        <Navbar />

        {/* Feed */}

        <Feed />

        {/* Widgets */}

        <Widgets />

    </div>
    );
}

export default Home;