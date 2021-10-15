//1. User can create/register as a client and 
//login with the registered credentials.

// TOBI // needs more inputs and functionality
import "../../App.css"
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { GlobalPropsContext } from '../GlobalPropsContext'

export default function Signup() {
    //const [signUpFormValues, setSignUpFormValues] = useState();
    //const { isLoading, setIsLoading } = useContext(GlobalPropsContext);
    const { user, setUser } = useContext(GlobalPropsContext);
    let history = useHistory();

    return (
        <div>
            <div>
                <form onSubmit="" className="form">
                    {user.instructor === true && <h1>Become a Coach!</h1>}
                    {user.client === true && <h1>Join Anywere Fitness!</h1>}
                    <input
                        placeholder="username"
                        name="username"
                        label="username"
                        type="text"
                        id="username"
                        onChange=""
                        value=""
                    />
                    <input
                        placeholder="password"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange=""
                        value=""
                    />
                    <button type="submit">
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


