import { useState, useEffect } from "react";
import "../../App.css"
import Hamburger from "./Hamburger";
import NavBarContents from "./NavBarContents";

function useWindowSize() {
    const [width, setWidth] = useState([window.innerWidth]);

    useEffect(() => {
        const handleResize = () => {
            setWidth([window.innerWidth])
        }
        window.addEventListener("resize", handleResize);
    }, [])

    return width;

}

export default function NavBar() {
    const [hamburgerState, setHamburgerState] = useState(false);
    const [navState, setNavState] = useState(false)
    const [width] = useWindowSize();

    useEffect(() => {
        if (width > 525) {
            setNavState(true);
        }
        if (width < 525) {
            setNavState(false);
            setHamburgerState(false);
        }
    }, [width])

    return (
        <div className="navBar">
            <Hamburger hamburgerState={hamburgerState} setHamburgerState={setHamburgerState} />
            <h1 className="titleOfApp">Anywhere Fitness</h1>
            {(navState || hamburgerState) && < NavBarContents />}
        </div>
    )
}