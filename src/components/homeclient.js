import react from "react";
import "../App.css"
import UsersClasses from "./classes/usersclasses";

export default function HomeClient() {

    return (
        <div>
            <h1>Your Classes</h1>
            <UsersClasses />
        </div>
    )
}