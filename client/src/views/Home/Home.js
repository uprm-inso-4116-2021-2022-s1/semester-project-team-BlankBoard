import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, useHistory } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import { Grid } from '@mui/material';

import isAuthenticated from '../../common/authentication'
import userGetById from '../../requests/userGetById';
import Navbar from '../../components/Navbar/Navbar';
import Feed from '../../components/Feed/Feed';
import Widgets from '../../components/Widgets/Widgets';
import "./Home.css";

function Home() {
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    const [cookies, setCookie] = useCookies(['token']);
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const signOut = () => {
        setCookie("token", "");
        history.push("/login");
    }

    const check = async () => {

        setAuthenticated(await isAuthenticated(cookies.token));

        authenticated && setUser(await userGetById(jwt_decode(cookies.token).user.user_id));

        setLoading(false);
    }

    if (loading) {
        check();
        return <h1>Loading...</h1>
    } else if (!authenticated) {
        return <Redirect to={'/login'} />
    } else {
        return (
            <>
                <Grid container className="home">
                    <Grid item xs={2}>
                        <Navbar />
                    </Grid>
                    <Grid item xs={7}>
                        <Feed user={user} />
                    </Grid>
                    <Grid item xs={3}>
                        <Widgets user={user} signOut={signOut} />
                    </Grid>
                </Grid>
            </>
        );

    }

}

export default Home;