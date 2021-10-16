//5. Authenticated client can search for available 
//classes. At a minimum, they must be 
//able to search by the following criteria:
// - `class time`
// - `class date`
// - `class duration`
// - `class type`
// - `intensity level`
// - `class location`

import { useContext } from "react";
import "../../App.css"
import Search from "./search"
import Class from "./class";
import { GlobalPropsContext } from "../GlobalPropsContext";


export default function Classes() {
    const { allClasses, isFetchingClasses } = useContext(GlobalPropsContext);


    return (
        <div>
            <Search />
            <div className="CardSection">
                {isFetchingClasses ? "Loading Classes..." :
                    allClasses.map((eachClass) => (
                        <Class class={eachClass} key={eachClass.id} />
                    ))}
            </div>
        </div>
    )
}

/// shows all classes and a search input for filtering classes
// click on each class to view indiviual class

