//4. Authenticated `Instructor` can create update and delete a
//`class`. At a minimum, each `class` must have the following properties:

// - `Name`
// - `Type`
// - `Start time`
// - `Duration`
// - `Intensity level`
// - `Location`
// - `Current number of registered attendees`
// - `Max class size`

// figure out what to do w ID
//

import { useContext, useState } from "react";
import { Redirect, } from "react-router";
import Axios from 'axios'
import { GlobalPropsContext } from '../GlobalPropsContext'
import "../../App.css"


const initialCreateClassFormValues = { name: "", type: "", time: "", duration: "", intensity: "", location: "", max: "" };

export default function CreateClass() {
    const [classFormValues, setClassFormValues] = useState(initialCreateClassFormValues);
    const [classId, setClassId] = useState(0);
    const { isLoading, setIsLoading } = useContext(GlobalPropsContext);

    const onChange = (e) => {
        setClassFormValues({
            ...classFormValues, [e.target.name]: e.target.value
        })
    }

    const minutesFormat = (num) => {
        return num + 'minutes';
    }

    const createClassSubmitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(isLoading);

        Axios.post('./class', classFormValues)
            .then(res => {
                setClassFormValues(res.data);
                setClassId(res.data.class_id);
                console.log("class", res);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                <Redirect to="/class" />
            })
    }
    return (
        <div>
            <form onSubmit={createClassSubmitHandler} className="form">
                <h1>Create a Class!</h1>
                <input
                    placeholder="Class Name"
                    name="name"
                    label="name"
                    type="text"
                    id="name"
                    onChange={onChange}
                    value={classFormValues.name}
                />
                <input
                    placeholder="Class Type"
                    name="type"
                    label="type"
                    type="text"
                    id="type"
                    onChange={onChange}
                    value={classFormValues.type}
                />
                <label>
                    <input
                        name="time"
                        label="time"
                        type="datetime-local"
                        id="time"
                        onChange={onChange}
                        value={classFormValues.time}
                    />
                </label>

                <input
                    placeholder="Duration (min)"
                    format={minutesFormat}
                    step="5"
                    name="duration"
                    label="duration"
                    type="number"
                    id="duration"
                    onChange={onChange}
                    value={classFormValues.duration}
                />
                <input
                    placeholder="Intensity (1-5)"
                    min={1}
                    max={5}
                    name="intensity"
                    label="intensity"
                    type="number"
                    id="intensity"
                    onChange={onChange}
                    value={classFormValues.intensity}
                />
                <input
                    placeholder="Location"
                    name="location"
                    label="location"
                    type="text"
                    id="location"
                    onChange={onChange}
                    value={classFormValues.location}
                />
                <input
                    Placeholder="Maximum Participants"
                    name="max"
                    label="max"
                    type="number"
                    id="max"
                    onChange={onChange}
                    value={classFormValues.max}
                />
                <button type="submit">
                    Create a Class
                </button>
            </form>
        </div>
    )
}

// make sure punch pass is an option for createClass