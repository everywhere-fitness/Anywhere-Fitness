import { useContext } from "react";
import "../../App.css"
import { Link } from "react-router-dom";
import { GlobalPropsContext } from "../GlobalPropsContext";

export default function NavBar() {
    const { isLoggedIn } = useContext(GlobalPropsContext);
    const { user } = useContext(GlobalPropsContext);


    return (
        <div className="navBar">
            <h1 className="titleOfApp">Anywhere Fitness</h1>
            <nav>
                <ul>

                    {/* Home shown for client*/}
                    {(user.client === true && isLoggedIn === true) && <li><Link to="/">Home</Link></li>}

                    {/* Home shown for Instructor */}
                    {(user.instructor === true && isLoggedIn === true) && <li> <Link to="/homeinstructor">Home</Link> </li>}


                    {/* Only clint sees link for view and selecting all classes */}
                    {(user.client === true) && <li><Link to="/classes">Classes</Link></li>}


                    {/* Only instructor has createClass */}
                    {(user.instructor === true) && <li><Link to="/createclass">Create a Class</Link></li>}


                    {/* Have login for Instructor linked via client login form...or all in one page? */}
                    {(isLoggedIn === false) && <li><Link to="/login">Login</Link></li>}

                    {/* logout not shown when loggedin */}
                    {(isLoggedIn === true) && <li><Link to="/logout">Logout </Link> </li>}

                    {/* logout not shown when loggedin */}
                    {(isLoggedIn === false) && <li><Link to="/signup">Signup</Link> </li>}
                </ul>
            </nav>
        </div>
    )
}