//4. Authenticated `Instructor` can create update and delete a `class`.
//At a minimum, each `class` must have the following properties:

// - `Name`
// - `Type`
// - `Start time`
// - `Duration`
// - `Intensity level`
// - `Location`
// - `Current number of registered attendees`
// - `Max class size`

import React, { useEffect, useState } from "react";
import { Redirect, } from "react-router";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css"


export default function EditClass() {


	const [classInfo, setClassInfo] = useState();
	const params = useParams(); 
	// use axios to get class info to display in form
	useEffect(() => {
		axios
			.get(`/editClass/${params.id}`) 
			.then((res) => {
				setClassInfo(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [params]);

    const initialEditClassFormValues = {name: classInfo.name, type: classInfo.type, time: classInfo.time, duration: classInfo.duration, intensity: classInfo.intensity, location: classInfo.location, max: classInfo.max};

    const [classFormValues, setClassFormValues] =
    useState(initialEditClassFormValues);
	const [classId, setClassId] = useState(classInfo?.class_id);
    



	const onChange = (e) => {
		//pull out the name and value of the event target
		const { name } = e.target;

		const newClassFormValues = {
			...classFormValues,
			[name]: e.target.value,
		};
		setClassFormValues(newClassFormValues);
	};

    const minutesFormat = (num) => {
        return num + 'minutes';
    }

    const editClassSubmitHandler = (e) => {
		e.preventDefault();
		// send to database via axios
		axios.put(
			`/class/${classId} `,
			{
                name: classInfo.name, type: classInfo.type, time: classInfo.time, duration: classInfo.duration, intensity: classInfo.intensity, location: classInfo.location, max: classInfo.max,
			},
		)
			.then((res) => {
				setClassFormValues(res.data);
				setClassId(res.data.class_id);
			})
			.finally(() => {
				console.log(classId);
                console.log(classId);
                <Redirect to="/class" />
			});
	};

	if (!classInfo) {
		return <div>Loading Class...</div>;
	}

    return (
        <div>
            <form onSubmit={editClassSubmitHandler} className="form">
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
                    min={ 1 } 
                    max={ 5 }
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
                    Submit Edits
                </button>
            </form>
        </div>
    )
}

// punch pass capability should be enabled here