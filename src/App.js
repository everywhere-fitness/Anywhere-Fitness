import './App.css';
import { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Login from './components/signupslogins/login';
import Signup from './components/signupslogins/signup'
import HomeClient from './components/homeclient'
import HomeInstructor from './components/homeinstructor'
import NavBar from './components/Navbars/NavBar';
import CreateClass from './components/classes/createclass'
import ClassDetails from './components/classes/classDetails';
import EditClass from './components/classes/editclass'
import Classes from './components/classes/classes'
import PrivateRoute from './components/PrivateRoute'
import { GlobalPropsContext } from './components/GlobalPropsContext';
import { BrowserRouter as Router } from "react-router-dom"

const initialFakeClassData = [
  {
    name: "Jump Rope Zumba",
    id: "1",
    instructor: "Bob Jumper",
    details: "Jump til your calve muscles explode",
    img: "https://picsum.photos/200",
    type: "aerobic",
    time: "6:30 PST",
    date: "Saturday Morning",
    duration: "30 minutes",
    intensity: "medium-high",
    location: "Mobile",
    currentNumberOfParticipants: "17",
    maxClassSize: "50",
  },
  {
    name: "Run Together",
    id: "2",
    instructor: "Jen Joe",
    details: "Get together and run",
    img: "https://picsum.photos/200",
    type: "endurance",
    time: "7:30 PST",
    date: "Wednesday",
    duration: "60 minutes",
    intensity: "medium",
    location: "Lambda School Track",
    currentNumberOfParticipants: "10",
    maxClassSize: "50",
  },
  {
    name: "Yoga Bear",
    id: "3",
    instructor: "Jim and Jane",
    details: "Come stretch, flex, and breathe with us",
    img: "https://picsum.photos/200",
    type: "Flexibility and Strength Building",
    time: "8:30 PST",
    date: "Friday",
    duration: "45 minutes",
    intensity: "medium",
    location: "Lambda School Water Front",
    currentNumberOfParticipants: "23",
    maxClassSize: "50",
  },
  {
    name: "Water Jogging",
    id: "4",
    instructor: "Luke and Han",
    details: "High intensity with low impact.  Great for your joints",
    img: "https://picsum.photos/200",
    type: "Endurance and Intensity",
    time: "9:30 PST",
    date: "Tuesday",
    duration: "45 minutes",
    intensity: "high",
    location: "Lambda School Water Front",
    currentNumberOfParticipants: "23",
    maxClassSize: "50",
  },
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ client: false, instructor: true });
  const [allClasses, setAllClasses] = useState(initialFakeClassData);
  const [isFetchingClasses, setIsFetchingClasses] = useState(false);


  //*******will be used once api is ready for getting classes******
  // const client = axios.create({
  //     baseURL: "https://apiurlhere"
  // });

  // useEffect(() => {
  //     async function getAllClasses() {
  //         setIsFetching(true);

  //         try {
  //             const res = await client.get("/extension/to/apicall");
  //             console.log(res.data, "all Classes request");
  //             setAllClasses(res.data);
  //         }
  //         catch (err) {
  //             console.log("error: ", err);
  //         }

  //         setIsFetching(false);
  //     }
  //     getAllClasses();
  // })



  return (
    <Router>
      <div className="App">
        <GlobalPropsContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, allClasses, setAllClasses, isFetchingClasses, setIsFetchingClasses }}>

          <NavBar />

          <Switch>
            <Route exact path="/signup"><Signup /></Route>

            <Route exact path="/login"><Login /></Route>

            <Route path="/classes"> <Classes /></Route>
            <Route path="/createclass"> <CreateClass /></Route>
            <Route exact path="/editclass"> <EditClass /></Route>
            <Route path="/details/:id"> <ClassDetails /></Route>

            <PrivateRoute path="/homeinstructor" component={HomeInstructor} />
            <PrivateRoute exact path="/" component={HomeClient} />
          </Switch>
        </GlobalPropsContext.Provider>
      </div>
    </Router>
  );
}

export default App;


//what state do we need to validate the user as a client or an instructor
