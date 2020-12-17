import React from 'react';
import "./country.css"
import Header from "../Header/Header";
import SearchingContainer from "../../containers/SearchingContainer";
import { Link } from "react-router-dom";


class Counrty extends React.Component {
    constructor(props) {
        super(props);
        this.showCountryList = this.showCountryList.bind(this);
    };


    showCountryList() {
        if (this.props.country.country.data || this.props.searchUrl === '') {
            return (
                this.props.country.country.data.map(item => {
                    return (
                        <ul className="list">
                            <li key={item.name} className="list-item" onClick={<Header keyff={"fffff"}/>}>
                                <Link to={{pathname: `/list/${item.name}`}} params={{item: item}}
                                      className='linkToCountry'>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <a href=""><img src={item.flag} alt=""/></a>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    )
                })
            )
        }
    }

    componentDidMount() {
        this.props.getCountryInfo()
    }

    render() {
        return (
            <div>
                <SearchingContainer/>
                <div>
                    {this.showCountryList()}
                </div>

            </div>
        )
    }
}

export default Counrty;