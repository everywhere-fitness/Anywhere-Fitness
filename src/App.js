import './App.css';
import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import Login from './components/signupslogins/login';
import Signup from './components/signupslogins/signup'
import HomeClient from './components/homeclient'
import HomeInstructor from './components/homeinstructor'
import NavBar from './components/Navbars/NavBar';
import CreateClass from './components/classes/createclass'
import EditClass from './components/classes/editclass'
import Classes from './components/classes/classes'
import Class from './components/classes/class';
import PrivateRoute from './components/PrivateRoute'
import { GlobalPropsContext } from './components/GlobalPropsContext';
import { BrowserRouter as Router } from "react-router-dom"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ client: true, instructor: false });


  return (
    <Router>
      <div className="App">
        <GlobalPropsContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>

          <NavBar />

          <Switch>
            <Route exact path="/signup"><Signup /></Route>

            <Route exact path="/login"><Login /></Route>

            <Route path="/classes"> <Classes /></Route>
            <Route path="/class/:id"> <Class /></Route>
            <Route path="/createclass"> <CreateClass /></Route>
            <Route exact path="/editclass"> <EditClass /></Route>

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

//Signup page have both client and instructor sign up?  
//Signup form linked in navbar or on just linked on login page
// #3? not sure what they mean

// where do we want to put the navbar component?  We could 
//have 2 separate ones for client and instructor and just import
// each to their respective home pages.  this means we would probably need 
// third of some sort that shows when no one is logged in
// Or we have one navbar that changes links depending on if person is 
// logged in

//Do we want the createClass and editClass components in separate pages or 
//should they appear in the same page?...meaning we would need to move them
// their paths 

// How do we want to handle css?  all from actual css files or install libraries

// decision on design?  
//Probably wise for one person to manage main bulk of this to reduce in code overlap