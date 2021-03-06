//1. User can create/register as a client and login with the registered credentials.
// MARK

//2. User can create/register as an instructor 
//by entering an additional Auth Code during signup, 
//and can login with the registered credentials.
import { useContext, useState, useEffect } from "react";
import { Redirect, } from "react-router";
import { useHistory } from "react-router";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { GlobalPropsContext } from '../GlobalPropsContext'


// Initial log in form values
const initialLogInFormValues = { username: "", password: "" };


export default function Login() {
    const [loginFormValues, setLogInFormValues] = useState(initialLogInFormValues);
    const { isLoading, setIsLoading } = useContext(GlobalPropsContext);
    const { user, setUser } = useContext(GlobalPropsContext);
    const [loginError, setLoginError] = useState(false);

    let history = useHistory();

    const onChange = (e) => {
        setLogInFormValues({
            ...loginFormValues, [e.target.name]: e.target.value
        })
    }


    const loginSubmitHandler = (e) => {
        e.preventDefault();
        // setIsLoading(true);
        // console.log(isLoading);

        if (loginFormValues.username !== "lambda" && loginFormValues.password !== "school") {
            setLoginError(true);
        } else {
            setLoginError(false);
        }

        //if user === client
        // testing syntax with reqres
        axiosWithAuth().post('https://reqres.in/api/login', {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                console.log("login", res);
                setIsLoading(false);
                history.push('/home');
            })
            .catch(err => {
                console.log(err);
                <Redirect to="/login" />
            })
        //if user === instructor

    }

    return (
        <div>
            <form onSubmit={loginSubmitHandler} className="form">
                {user.instructor === true && <h1>What's Up Coach!</h1>}
                {user.client === true && <h1>Let's Get Fit!</h1>}
                <input
                    placeholder="username"
                    name="username"
                    label="username"
                    type="text"
                    id="username"
                    onChange={onChange}
                    value={loginFormValues.username}
                />
                <input
                    placeholder="password"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={onChange}
                    value={loginFormValues.password}
                />
                <button type="submit">
                    LogIn
                </button>
            </form>
            {loginError && <p style={{ color: "red" }}>Username or Password does not match!</p>}
            <p onClick={() => { history.push('/signup') }}
                className="signUpFinePrintUnderForm" >
                <span style={user.client === true ? { display: 'inline' } : { display: 'none' }}> Brand New!  Sign Up for an account!</span>
                <span style={user.client === true ? { display: 'none' } : { display: 'inline' }}> Want to Coach?...Sign Up to be an Instructor!</span>
            </p>
            <p onClick={() => { setUser({ client: !user.client, instructor: !user.instructor }) }}
                className="switchAccountFinePrint" >
                <span style={user.client === true ? { display: 'none' } : { display: 'inline' }}> Click here to Login as a Member</span>
                <span style={user.instructor === false ? { display: "inline" } : { display: "none" }}> Click Here To Login as an Instructor</span>
            </p>
        </div>
    )
}

// onClick={()=> {props.setLogInFormValues()}}
//add in login for instructor link in small print under form maybe...
// <Link to="/logininstructor">instructor login</Link>

// <Link to="/signup">Sign Up</Link>

 //<Link to="/signupinstructor">SignupInstructor</Link>//