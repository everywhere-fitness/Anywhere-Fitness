// 7. Authenticated user can reschedule or cancel their current reservation from the mobile app.

import react, { useState } from "react";
import "../../App.css"
import { Link } from "react-router-dom";
import axios from "axios"


const fakeInitialUsersClasses = [

    {
        name: "Run Together",
        id: "2",
        instructor: "Jen Joe",
        details: "Get together and run",
        img: "https://picsum.photos/200",
        type: "endurance",
        time: "7:30 PST",
        date: "Wednesday",
        duration: "60 minutes",
        intensity: "medium",
        location: "Lambda School Track",
        currentNumberOfParticipants: "10",
        maxClassSize: "50",
    },
    {
        name: "Yoga Bear",
        id: "3",
        instructor: "Jim and Jane",
        details: "Come stretch, flex, and breathe with us",
        img: "https://picsum.photos/200",
        type: "Flexibility and Strength Building",
        time: "8:30 PST",
        date: "Friday",
        duration: "45 minutes",
        intensity: "medium",
        location: "Lambda School Water Front",
        currentNumberOfParticipants: "23",
        maxClassSize: "50",
    },
]


export default function UsersClasses() {
    const [usersClasses, setUsersClasses] = useState(fakeInitialUsersClasses);
    const [isFetchingUsersClasses, setIsFetchingUsersClasses] = useState(false);


    const cancelHavingJoinedClass = () => {

    }


    return (
        <div>
            <div className="CardSection">
                {isFetchingUsersClasses ? "Loading Classes..." :
                    usersClasses.map((eachClass) => (

                        <div className="classCard">
                            <h2>{eachClass.name}</h2>
                            <img src={eachClass.img} alt="coolImage" />
                            <p>{eachClass.date} {eachClass.time}</p>
                            <button onClick={cancelHavingJoinedClass} className='classButton'>Cancel Reservation</button>
                            <Link to={`/details/${eachClass.id}`}> <button className='detailsButton'>See Details</button> </Link>
                        </div>

                    ))}
            </div>
        </div>
    )
}

// show the classes signed up for and allow for canceling/ rescheduling their participation with the class.  