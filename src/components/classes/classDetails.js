import react, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalPropsContext } from '../GlobalPropsContext';
import { useHistory } from 'react-router';

const ClassDetails = () => {
    //const [details, setDetails] = useState();
    const { allClasses, user } = useContext(GlobalPropsContext);
    const [isJoined, setIsJoined] = useState(false);
    const [isTeaching, setIsTeaching] = useState(true);

    const { id } = useParams();
    const history = useHistory();
    console.log(id);


    // CLIENT CAN JOIN BY CLICKING THIS
    const handleJoin = () => {
        setIsJoined(true);
    }

    // IF CLIENT HAS JOINED, CLICK THIS TO UNJOIN
    const handleLeavingClass = () => {
        setIsJoined(false);
    }

    const handleDelete = () => {

    }


    //let id = allClasses.find(id => id === Number(classId));

    // useEffect(() => {
    //     async function getIndividualClassDetails() {
    //         axios
    //             .get(`https://api/id`)
    //             .then((res) => {
    //                 setDetails(res.data);
    //                 console.log(res.data, "res.data for individual class Details");
    //             })
    //             .catch((err) => {
    //                 console.error("Server Error", err);
    //             })
    //     };
    //     getIndividualClassDetails();
    // })

    return (
        <div>
            <h1>Shows Individual class details for class with the id of {id}</h1>
            {(user.client && isJoined === false) && <button onClick={handleJoin} className='classButton'>Join Class</button>}
            {(user.client && isJoined === true) && <button style={{ backgroundColor: "#4a403a" }} onClick={handleLeavingClass} className='classButton'>Leave Class</button>}
            {(user.instructor && isTeaching === true) && <button onClick={() => { history.push('/editclass') }} className='classButton'>Edit Class</button>}
            {(user.instructor && isTeaching === true) && <button style={{ backgroundColor: "#4a403a" }} onClick={handleDelete} className='classButton'>Delete Class</button>}
        </div>
    )
}

export default ClassDetails;

// IF CLIENT
// also show join button if the user a client and they are not already joined 
// show cancel button if they are joined to this class already

// IF INSTRUCTOR
// add edit and delete button if instructor is signed in


{/* <div className="classDetails">
    <img src={img}></img>
    <h1>{name}</h1>
    <p>Instructor: {instructor}</p>
    <p>Type: {type} </p>
    <p> Date: {date}</p>
    <p> Time: {time}</p>
    <p> Duration: {date}</p>
    <p>Intensity Level: {intensity}</p>
    <p>Location: {location}</p>
    <p>Details: {details}</p>
    <p>Total Coming: {currentNumberOfParticipants} / {maxClassSize}</p>
</div> */}
