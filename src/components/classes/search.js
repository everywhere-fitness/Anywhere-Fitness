import react from "react";
import "../../App.css"

// 5. Authenticated client can search for available classes. At a minimum, 
// they must be able to search by the following criteria:
// - `class time`
// - `class date`
// - `class duration`
// - `class type`
// - `intensity level`
// - `class location`

export default function Search() {

    return (
        <div className="searchClasses">
            <input className="searchInput" type='text' name="search" placeholder="Search Through Classes"></input>
        </div>
    )
}