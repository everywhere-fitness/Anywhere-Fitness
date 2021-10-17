//1. User can create/register as a client and 
//login with the registered credentials.

// TOBI // needs validation and axios post request
import "../../App.css"
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { GlobalPropsContext } from '../GlobalPropsContext'


const initialsignUpFormValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    retypePassword: '',
}

const initialSignUpFormErrors = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    retypePassword: '',
}

// submit is disabled until inputs validated
const initialDisabled = true;


export default function Signup() {
    const [signUpFormValues, setSignUpFormValues] = useState(initialsignUpFormValues);
    //const { isLoading, setIsLoading } = useContext(GlobalPropsContext);
    //const [signUpFormValueErrors, setSignUpFormValueErrors] = useState(initialLoginFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled);
    const { user, setUser } = useContext(GlobalPropsContext);
    let history = useHistory();



    // controls the form input changes via state
    const onChange = (e) => {
        setSignUpFormValues({
            ...signUpFormValues, [e.target.name]: e.target.value
        })
    }

    // adusts `disabled` when `formValues` change
    //   useEffect(() => {
    //     schema.isValid(loginFormValues)
    //         .then(isSchemaValid => {
    //             setDisabled(!isSchemaValid) //disable the submt button if not valid
    //         })
    // }, [loginFormValues])


    //checks validation with yup, run form errors
    // yup.reach(schema, name)
    //   .validate(value)
    //   .then(() => {
    //     setFormErrors({ ...formErrors, [name]: "" })
    //   })
    //   .catch(err => {
    //     setFormErrors({ ...formErrors, [name]: err.message })
    //   })



    return (
        <div>
            <div>
                <form onSubmit="" className="form">
                    {user.instructor === true && <h1>Become a Coach!</h1>}
                    {user.client === true && <h1>Join Anywere Fitness!</h1>}
                    <input
                        placeholder="First Name"
                        name="firstName"
                        label="firstName"
                        type="text"
                        id="firstName"
                        onChange={onChange}
                        value={signUpFormValues.firstName}
                    />
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        label="lastName"
                        type="text"
                        id="lastName"
                        onChange={onChange}
                        value={signUpFormValues.lastName}
                    />
                    <input
                        placeholder="username"
                        name="username"
                        label="username"
                        type="text"
                        id="username"
                        onChange={onChange}
                        value={signUpFormValues.username}
                    />

                    <input
                        placeholder="youremail@email.com"
                        name="email"
                        label="email"
                        type="email"
                        id="email"
                        onChange={onChange}
                        value={signUpFormValues.email}
                    />
                    <input
                        placeholder="password"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={onChange}
                        value={signUpFormValues.password}
                    />
                    <input
                        placeholder="re-type password"
                        name="retypePassword"
                        label="retypePassword"
                        type="password"
                        id="password"
                        onChange={onChange}
                        value={signUpFormValues.retypePassword}
                    />
                    <button type="submit" disabled={disabled}>
                        Sign Up!
                    </button>
                </form>
                <p onClick={() => { history.push('/login') }} className="signUpFinePrintUnderForm" >
                    <span style={user.instructor === true ? { display: "inline" } : { display: "none" }}>
                        Already Have An Account?...Login as an Instructor Here!
                    </span>
                    <span style={user.instructor === false ? { display: "inline" } : { display: "none" }}>
                        Already Have An Account?...Login as a AF Member Here!
                    </span>

                </p>
                <p onClick={() => { setUser({ client: !user.client, instructor: !user.instructor }) }}
                    className="switchAccountFinePrint" >
                    <span style={user.instructor === false ? { display: "inline" } : { display: "none" }}>Click Here To Sign Up To Be An Instructor</span>
                    <span style={user.instructor === true ? { display: "inline" } : { display: "none" }}>Click Here To Sign Up As a Member!</span>
                </p>
            </div>
        </div>
    )
}


