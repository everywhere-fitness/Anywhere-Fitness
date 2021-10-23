// 7. Authenticated user can reschedule or cancel their current reservation from the mobile app.

import react, { useState, useContext, useEffect } from "react";
import "../../App.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { GlobalPropsContext } from "../GlobalPropsContext";


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
    const { setIsJoined, isJoined, isLoggedIn, user } = useContext(GlobalPropsContext);


    const handleLeavingClass = () => {
        console.log("User has left the class");
        setIsJoined(false);
    }

    const handleJoin = () => {
        console.log("User has joined class");
        setIsJoined(true);
    }

    // practicing getting the user if I had an endpoint with a user id
    let userId = "2";
    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${userId}`)
            .then((res) => {
                //setUser(res.data)
                console.log('user', res.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [userId])

    return (
        <div>
            <div className="CardSection">
                {isFetchingUsersClasses ? "Loading Classes..." :
                    usersClasses.map((eachClass) => (

                        <div className="classCard">
                            <h2>{eachClass.name}</h2>
                            <img src={eachClass.img} alt="coolImage" />
                            <p>{eachClass.date} {eachClass.time}</p>
                            {(isLoggedIn && isJoined === false) && <button onClick={handleJoin} className='classButton'>Join Class</button>}
                            {(isLoggedIn && user.client && isJoined === true) && <button style={{ backgroundColor: "#4a403a" }} onClick={handleLeavingClass} className='classButton'>Leave Class</button>}                            <Link to={`/details/${eachClass.id}`}> <button className='detailsButton'>See Details</button> </Link>
                        </div>

                    ))}
            </div>
        </div>
    )
}

// show the classes signed up for and allow for canceling/ rescheduling their participation with the class.  