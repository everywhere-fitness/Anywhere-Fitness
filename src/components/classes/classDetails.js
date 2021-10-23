import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalPropsContext } from '../GlobalPropsContext';
import { useHistory } from 'react-router';

const ClassDetails = () => {
    //const [details, setDetails] = useState();
    const { allClasses, user, isLoggedIn } = useContext(GlobalPropsContext);
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
        axios
            .delete(`https://reqres.in/api/users,2`, { data: { currentClass } })
            .then((res) => {
                //  setDetails(res.data);
                console.log(res.data, "res.data for deleted individual class from details");
            })
            .catch((err) => {
                console.error("Server Error", err);
            })

    }

    // finds class based on id (w/o api)
    const currentClass = allClasses.find(eachClass => {

        return eachClass.id === id
    })
    const { name, img, type, date, time, duration, intensity, location, details, instructor, currentNumberOfParticipants, max } = currentClass;

    // testing this request syntax via resreq.in
    useEffect(() => {
        async function getIndividualClassDetails() {
            axios
                .get(`https://reqres.in/api/unknown/${id}`)
                .then((res) => {
                    //  setDetails(res.data);
                    console.log(res.data, "res.data for individual class Details");
                })
                .catch((err) => {
                    console.error("Server Error", err);
                })
        };
        getIndividualClassDetails();
    })

    return (
        <div className="classDetails">
            <div>
                <img src={img} alt={img}></img>
                <h1>{name}</h1>
                <p>Instructor: {instructor}</p>
                <p>Type: {type} </p>
                <p> Date: {date}</p>
                <p> Time: {time}</p>
                <p> Duration: {duration}</p>
                <p>Intensity Level: {intensity}</p>
                <p>Location: {location}</p>
                <p>Details: {details}</p>
                <p>Total Coming: {currentNumberOfParticipants} / {max}</p>
            </div>
            {(isLoggedIn && user.client && isJoined === false) && <button onClick={handleJoin} className='classButton'>Join Class</button>}
            {(isLoggedIn && user.client && isJoined === true) && <button style={{ backgroundColor: "#4a403a" }} onClick={handleLeavingClass} className='classButton'>Leave Class</button>}
            {(isLoggedIn && user.instructor && isTeaching === true) && <button onClick={() => { history.push('/editclass') }} className='classButton'>Edit Class</button>}
            {(isLoggedIn && user.instructor && isTeaching === true) && <button style={{ backgroundColor: "#4a403a" }} onClick={handleDelete} className='classButton'>Delete Class</button>}
        </div>
    )
}

export default ClassDetails;

