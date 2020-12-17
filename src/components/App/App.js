import React from 'react';
import './App.css';
import CountryContainer from '../../containers/CountryContainer'
import CountryItem from "../CountryItem/CountryItem";
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ItemContainer from "../../containers/ItemContainer";

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
                <Route path="/list/:item" component={ItemContainer} />
            </BrowserRouter>

        </div>
    );
}

export default App;
