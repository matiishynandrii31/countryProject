import React from 'react';
import './App.css';
import CountryContainer from '../../containers/CountryContainer'
import CountryItem from "../CountryItem/CountryItem";
import HomePage from "../HomePage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ItemContainer from "../../containers/ItemContainer";
import SearchingContainer from "../../containers/SearchingContainer";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Navbar/>
                <Route exact path="/list">
                    <CountryContainer/>
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/list/:item" component={ItemContainer}/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
