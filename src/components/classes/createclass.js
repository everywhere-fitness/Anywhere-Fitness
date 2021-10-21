//4. Authenticated `Instructor` can create update and delete a
//`class`. At a minimum, each `class` must have the following properties:

// - 'details'
// - 'pic'
//
// figure out what to do w ID!!

//intensity

import { useContext, useState, useEffect } from "react";
import { Redirect, } from "react-router";
import Axios from 'axios'
import * as yup from 'yup'
import { GlobalPropsContext } from '../GlobalPropsContext'
import "../../App.css"
import classFormSchema from "../../validation/classFormSchema.js";


const initialCreateClassFormValues = {name: "", type: "", time: "", duration: "", intensity: "", location: "", max: ""};

const initialCreateClassFormErrors = {name: "", type: "", time: "", duration: "", intensity: "", location: "", max: ""}; 

const initialCreateButtonDisabled = true;


export default function CreateClass() {
        const { isLoading, setIsLoading } = useContext(GlobalPropsContext);

    const [classId, setClassId] = useState(0);
    const [classFormValues, setClassFormValues] = useState(initialCreateClassFormValues);

	const [createClassErrors, setCreateClassErrors] = useState(
		initialCreateClassFormErrors,
        );
    const [createDisabled, setCreateDisabled] = useState(
		initialCreateButtonDisabled,
        );

    const onChange = (e) => {
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

            setClassFormValues({
            ...classFormValues, [e.target.name]: e.target.value
            })  
        
            
    }

    
	//ENABLE BUTTON WHEN NO ERRORS EXIST
	useEffect(() => {
		classFormSchema.isValid(classFormValues).then((isSchemaValid) => {
			setCreateDisabled(!isSchemaValid);
		});
	}, [classFormValues]);

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
                    step="5"
                    name="duration"
                    label="duration"
                    type="string"
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
                <button 
                type="submit"
                disabled={createDisabled}
                >
                    Create a Class
                </button>
            </form>
        </div>
    )
}

// make sure punch pass is an option for createClass