import react, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalPropsContext } from '../GlobalPropsContext';

const ClassDetails = () => {
    //const [details, setDetails] = useState();
    const { allClasses } = useContext(GlobalPropsContext);

    const { id } = useParams();
    console.log(id);

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
            <h1>Shows Individual class for class with the id {id}</h1>
        </div>
    )
}

export default ClassDetails;

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
