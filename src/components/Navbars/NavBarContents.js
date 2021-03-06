import { useContext } from "react"
import "../../App.css"
import { Link } from "react-router-dom";
import { GlobalPropsContext } from "../GlobalPropsContext";
import { useHistory } from "react-router";

export default function NavBarContents() {
    const { isLoggedIn, setHamburgerState, setIsLoggedIn } = useContext(GlobalPropsContext);
    const { user } = useContext(GlobalPropsContext);


    let history = useHistory();



    function onLogoutClick() {
        setIsLoggedIn(false);
        history.push('/login');
    };

    return (
        <div>
            <nav>
                <ul>
                    {/* Home shown for client*/}
                    {(user.client === true && isLoggedIn === true) && <li><Link to="/">Home</Link></li>}

                    {/* Home shown for Instructor */}
                    {(user.instructor === true && isLoggedIn === true) && <li> <Link to="/homeinstructor">Home</Link> </li>}


                    {/* Only clint sees link for view and selecting all classes */}
                    {/* instructor sees it when not logged in */}
                    {(user.instructor === true && isLoggedIn === false) && <li><Link to="/classes">Classes</Link></li>}
                    {(user.client === true) && <li><Link to="/classes">Classes</Link></li>}


                    {/* Only instructor has createClass */}
                    {(user.instructor === true && isLoggedIn === true) && <li><Link to="/createclass">Create a Class</Link></li>}


                    {/* Have login for Instructor linked via client login form...or all in one page? */}
                    {(isLoggedIn === false) && <li><Link to="/login">Login</Link></li>}

                    {/* logout not shown when loggedin */}
                    {(isLoggedIn === true) && <li><Link onClick={onLogoutClick} to="/login">Logout </Link> </li>}

                    {/* logout not shown when loggedin */}
                    {(isLoggedIn === false) && <li><Link to="/signup">Signup</Link> </li>}
                </ul>
            </nav>
        </div>
    )
}