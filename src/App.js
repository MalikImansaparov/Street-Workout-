import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navibar from "./Components/Navibar";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {Home} from "./Components/Home";
import {Champions} from "./Components/Champions";
import {About} from "./Components/About";
import Footer from "./Components/Footer/Footer";
import Redirect from './Components/Redirect'


function App() {
  return (
    <>
        <Router>
            <Navibar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/winners' component={Champions}/>
                <Route path='/about' component={About}/>
                <Route path='/champ' component={Redirect}/>
            </Switch>
        </Router>
        <Footer/>
    </>
  );
}

export default App;
