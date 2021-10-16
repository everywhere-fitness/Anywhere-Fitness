// 7. Authenticated user can reserve a spot in a 
//class with available seats open.

import react from "react";
import "../../App.css"
import { Link } from "react-router-dom";


export default function Class(props) {

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