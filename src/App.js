import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import LogIn from './components/login/LogIn';
import Pharmacies from './components/Pharmacies/Pharmacies';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
import Details from './components/details/Details';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
    return (
        <div>
            <AuthProvider>
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
                        <PrivateRoute path="/details/:id">
                            <Details></Details>
                        </PrivateRoute>
                        <Route path="/contact">
                            <Contact></Contact>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/login">
                            <LogIn></LogIn>
                        </Route>
                        <Route path="/signup">
                            <SignUp></SignUp>
                        </Route>
                        <Route exact path="*">
                            <Error></Error>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
