// 7. Authenticated user can reserve a spot in a 
//class with available seats open.

//import react, { useState } from "react";
//import { useHistory } from "react-router";
import "../../App.css"
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";


export default function Class(props) {
    //const history = useHistory();
    let match = useRouteMatch();

    const classId = props.class.id;

    const handleJoin = () => {

    }



    return (
        <div className="classCard">
            <h2>{props.class.name}</h2>
            <img src={props.class.img} alt="coolImage" />
            <p>{props.class.date} {props.class.time}</p>
            <button onClick={handleJoin} className='classButton'>Join Class</button>
            <Link to={`/details/${classId}`}> <button className='detailsButton'>See Details</button> </Link>
        </div>
    )
}

// join button or cancel reservation button

// if user is already joined then show cancel button