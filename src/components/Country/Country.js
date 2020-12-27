import React from 'react';
import "./country.css"
import HomePage from "../HomePage/HomePage";
import SearchingContainer from "../../containers/SearchingContainer";
import { Link } from "react-router-dom";


class Counrty extends React.Component {
    constructor(props) {
        super(props);
        this.showCountryList = this.showCountryList.bind(this);
    };


    showCountryList() {
        if ( this.props.country.country.data ) {
            return (
                this.props.country.country.data.map(item => {
                    return (
                        <div className="list-item">
                                <Link to={{pathname: `/list/${item.name}`}} params={{item: item}}
                                      className='linkToCountry'>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <a href=""><img src={item.flag} alt=""/></a>
                                        <p className="region-info">{item.region}</p>
                                    </div>

                                </Link>
                        </div>
                    )
                })
            )
        }
        else if (this.props.country.country.error) {
            return (
                <div>
                    <p>No result</p>
                </div>
            )
        }
    }

    componentDidMount() {
        this.props.getCountryInfo()
    }

    render() {
        return (
            <div className="country-list-block">
                <SearchingContainer/>
                <div className='list'>
                    {this.showCountryList()}
                </div>

            </div>
        )
    }
}

export default Counrty;