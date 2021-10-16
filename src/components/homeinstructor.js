import react from "react";
import "../App.css"

import InstructorsClasses from "../components/classes/instructorsclasses"

export default function HomeInstructor() {

    return (
        <div>
            <h1>Classes You're Teaching</h1>
            <InstructorsClasses />
        </div>
    )
}