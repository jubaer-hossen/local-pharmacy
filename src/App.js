import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import LogIn from './components/login/LogIn';
import Pharmacies from './components/Pharmacies/Pharmacies';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/pharmacies">
                        <Pharmacies></Pharmacies>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/login">
                        <LogIn></LogIn>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
