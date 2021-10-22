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

import React, { useContext, useEffect, useState } from "react";
import { Redirect, } from "react-router";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup'
import { GlobalPropsContext } from '../GlobalPropsContext'
import "../../App.css"
import classFormSchema from "../../validation/classFormSchema.js";


const initialFakeClassData =   {
    name: "Jump Rope Zumba",
    id: "1",
    instructor: "Bob Jumper",
    details: "Jump til your calve muscles explode",
    img: "https://picsum.photos/200",
    type: "aerobic",
    time: "2022-01-01 15:30:00:00",
    duration: 30,
    intensity: 4,
    location: "Mobile",
    currentNumberOfParticipants: "17",
    max: 30,
}

const initialCreateClassFormErrors = {name: "", type: "", time: "", duration: "", intensity: "", location: "", max: ""};

const initialCreateButtonDisabled = true;


export default function EditClass() {
    const { isLoading, setIsLoading } = useContext(GlobalPropsContext);

    const [classInfo, setClassInfo] = useState(initialFakeClassData);
    // const params = useParams();
    // use axios to get class info to display in form
    // useEffect(() => {
    //     axios
    //         .get(`/editClass/${params.id}`)
    //         .then((res) => {
    //             setClassInfo(res.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, [params]);

    const initialEditClassFormValues = { name: classInfo.name, type: classInfo.type, time: classInfo.time, duration: classInfo.duration, intensity: classInfo.intensity, location: classInfo.location, max: classInfo.max };

    const [classFormValues, setClassFormValues] =
        useState(initialEditClassFormValues);
    const [classId, setClassId] = useState(classInfo?.class_id);

	const [createClassErrors, setCreateClassErrors] = useState(
		initialCreateClassFormErrors,
        );
    const [createDisabled, setCreateDisabled] = useState(
		initialCreateButtonDisabled,
        );

    const onChange = (e) => {
        //VALIDATION
        const { name, value } = e.target;
		yup
			.reach(classFormSchema, name)
			.validate(value)
			.then(() => {
				setCreateClassErrors({ ...createClassErrors, [name]: "" });
			})
			.catch((err) => {
				setCreateClassErrors({ ...createClassErrors, [name]: err.message });
			});
		console.log(createClassErrors);

        const newClassFormValues = {
            ...classFormValues,
            [name]: e.target.value,
        };
        setClassFormValues(newClassFormValues);
    };

	//ENABLE BUTTON WHEN NO ERRORS EXIST
	useEffect(() => {
		classFormSchema.isValid(classFormValues).then((isSchemaValid) => {
			setCreateDisabled(!isSchemaValid);
		});
	}, [classFormValues]);

    const editClassSubmitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
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
                <Redirect to="/homeinstructor" />
            });
    };

    if (!classInfo) {
        return <div>Loading Class...</div>;
    }

    return (
        <div>
            <form onSubmit={editClassSubmitHandler} className="form">
                <h1>Edit a Class!</h1>
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
                <button 
                type="submit"
                disabled={createDisabled}
                >
                    Submit Edits
                </button>
            </form>
        </div>
    )
}

// punch pass capability should be enabled here