// 7. Authenticated user can reserve a spot in a 
//class with available seats open.

import { useState, useContext } from "react";
import "../../App.css"
import { Link } from "react-router-dom";
import { GlobalPropsContext } from "../GlobalPropsContext";


export default function Class(props) {
    const { allClasses, user, isLoggedIn, isJoined, setIsJoined } = useContext(GlobalPropsContext);


    const classId = props.class.id;

    // CLIENT CAN JOIN BY CLICKING THIS
    const handleJoin = () => {
        setIsJoined(true);
    }

    // IF CLIENT HAS JOINED, CLICK THIS TO UNJOIN
    const handleLeavingClass = () => {
        setIsJoined(false);
    }


    return (
        <div className="classCard">
            <h2>{props.class.name}</h2>
            <img src={props.class.img} alt="coolImage" />
            <p>{props.class.date} {props.class.time}</p>
            {(isLoggedIn && isJoined === false) && <button onClick={handleJoin} className='classButton'>Join Class</button>}
            {(isLoggedIn && user.client && isJoined === true) && <button style={{ backgroundColor: "#4a403a" }} onClick={handleLeavingClass} className='classButton'>Leave Class</button>}
            <Link to={`/details/${classId}`}> <button className='detailsButton'>See Details</button> </Link>
        </div>
    )
}

// join button or cancel reservation button

// if user is already joined then show cancel button