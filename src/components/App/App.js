import React from 'react';
import './App.css';
import CountryContainer from '../../containers/CountryContainer'
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <div className="menu">
                    <Navbar/>
                </div>
                <Route exact path="/list">
                    <CountryContainer/>
                </Route>
            </BrowserRouter>

        </div>
    );
}

export default App;
