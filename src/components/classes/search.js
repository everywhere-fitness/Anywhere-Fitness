import { useContext, useEffect, useState } from "react";
import "../../App.css"
import { GlobalPropsContext } from "../GlobalPropsContext";

// 5. Authenticated client can search for available classes. At a minimum, 
// they must be able to search by the following criteria:
// - `class time`
// - `class date`
// - `class duration`
// - `class type`
// - `intensity level`
// - `class location`
// - name
// - instructor name

export default function Search() {
    const { setFilteredClasses, allClasses } = useContext(GlobalPropsContext);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [filterDropDownValue, setFilterDropDownValue] = useState("name");


    const handleDropdownChange = (e) => {
        setFilterDropDownValue(e.target.value);
    }


    // when user types in the search this filter 
    // should be activated and display results
    // instantly
    useEffect(() => {
        if (searchInputValue === "") {
            setFilteredClasses(allClasses);
        } else {
            const filteredClassesFromAllClasses =
                allClasses.filter((eachClassBy) => {

                    let filterBy;

                    // if by name: 
                    if (filterDropDownValue === "name") {
                        filterBy = eachClassBy.name.toLowerCase().includes(searchInputValue.toLowerCase());
                    } else if (filterDropDownValue === "type") {
                        // if by type:
                        filterBy = eachClassBy.type.toLowerCase().includes(searchInputValue.toLowerCase());
                    } else if (filterDropDownValue === "time") {
                        // if by time:
                        filterBy = eachClassBy.time.toLowerCase().includes(searchInputValue.toLowerCase());
                    } else if (filterDropDownValue === "duration") {
                        // if by duration:
                        filterBy = eachClassBy.duration.toLowerCase().includes(searchInputValue.toLowerCase());
                    } else if (filterDropDownValue === "intensity") {
                        //if by intensity level
                        filterBy = eachClassBy.intensity.toLowerCase().includes(searchInputValue.toLowerCase());
                    } else if (filterDropDownValue === "instructor") {
                        // if by instructor
                        filterBy = eachClassBy.instructor.toLowerCase().includes(searchInputValue.toLowerCase());
                    } else if (filterDropDownValue === "location") {
                        // class location
                        filterBy = eachClassBy.location.toLowerCase().includes(searchInputValue.toLowerCase());
                    } else if (filterDropDownValue === "date") {
                        // class date
                        filterBy = eachClassBy.date.toLowerCase().includes(searchInputValue.toLowerCase());
                    }
                    return filterBy;
                })

            setFilteredClasses(filteredClassesFromAllClasses);
        }
    })

    return (
        <div className="searchClasses">
            <input className="searchInput" type='text' name="search" placeholder="Search Through Classes By" onChange={e => { setSearchInputValue(e.target.value) }}></input>
            <select name="filterByDropdown" id="filterByDropdown" onChange={handleDropdownChange}>
                <option value="name">
                    Class Name
                </option>
                <option value="type">
                    Type of Workout
                </option>
                <option value="time">
                    Time of Day
                </option>
                <option value="duration">
                    Duration of Activity
                </option>
                <option value="location">
                    Location
                </option>
                <option value="intensity">
                    Intensity
                </option>
                <option value="date">
                    Date
                </option>
                <option value="instructor">
                    Instructor
                </option>
            </select>
        </div>
    )
}
