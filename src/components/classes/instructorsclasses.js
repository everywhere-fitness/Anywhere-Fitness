//6. Authenticated `instructor` can create virtual punch pass
//categories for each type of group fitness class 
//they offer (yoga, insanity, RIPPED, pilates, etc.)

import react, { useState } from "react";
import "../../App.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const fakeInitialInstructorsClasses = [
    {
        name: "Jump Rope Zumba",
        id: "1",
        instructor: "Bob Jumper",
        details: "Jump til your calve muscles explode",
        img: "https://picsum.photos/200",
        type: "aerobic",
        time: "6:30 PST",
        date: "Saturday Morning",
        duration: "30 minutes",
        intensity: "medium-high",
        location: "Mobile",
        currentNumberOfParticipants: "17",
        maxClassSize: "50",
    }
];

export default function InstructorsClasses() {
    const [instructorsClasses, setInstructorsClasses] = useState(fakeInitialInstructorsClasses);
    const [isFetchingInstructorsClasses, setIsFetchingInstructorsClasses] = useState(false);

    const history = useHistory();

    return (
        <div>
            <div className="CardSection">
                {isFetchingInstructorsClasses ? "Loading Classes..." :
                    instructorsClasses.map((eachClass) => (

                        <div className="classCard">
                            <h2>{eachClass.name}</h2>
                            <img src={eachClass.img} alt="coolImage" />
                            <p>{eachClass.date} {eachClass.time}</p>
                            <button onClick={() => { history.push('/editclass') }} className='classButton'>Edit</button>
                            <Link to={`/details/${eachClass.id}`}> <button className='detailsButton'>See Details</button> </Link>
                        </div>

                    ))}
            </div>
        </div>
    )
}

// show the instructors classes with an edit button next to each
// The edit button will take instructor to editClass page where they can fill in the form
//Instructor could also click on each class to be taken to each class page to just view the details.  