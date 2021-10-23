// MARK
import React, { useContext, useEffect } from "react";
import { GlobalPropsContext } from "../GlobalPropsContext";
import { Redirect, useHistory, useParams } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Logout = () => {
    const { setIsLoggedIn } = useContext(GlobalPropsContext);
    console.log('log out');
    let history = useHistory();
    let { params } = useParams();
    console.log(params, "params from logout");


    useEffect(() => {
        setIsLoggedIn(false);
        history.push('/login');
    });




    // axiosWithAuth().post('/logout')
    //     .then(res => {
    //         localStorage.removeItem('token')
    //         window.location.pathname = '/login'
    //         setIsLoggedIn(false);
    //         <Redirect to="/login" />

    //     })
    //     .catch(err => console.log(err))

    return (<div></div>);
}

export default Logout;