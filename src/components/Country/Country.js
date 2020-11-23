import React from 'react';
import "./country.css"
import Header from "../Header/Header";


class Counrty extends React.Component {
    constructor(props) {
        super(props);
        this.showCountryList = this.showCountryList.bind(this);
    };


    showCountryList() {
        if (this.props.country.country.data) {
            return (
                this.props.country.country.data.map(item => {
                    return (
                        <ul className="list">
                            <li key={item.name} className="list-item" onClick={<Header keyff={"fffff"}/>}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <a href=""><img src={item.flag} alt=""/></a>
                                </div>
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
                <div className="form">
                    <h2>Search for a country</h2>
                    <form className="country-search-form">
                        <input type="text" className="form-control" id="search-box"
                               placeholder="Enter country name" ng-model="searchTerm"/>
                    </form>
                </div>
                <div>
                    {this.showCountryList()}
                </div>
                {/*<button onClick={this.props.getCountryInfo}>CountryList</button>*/}
                {/*{this.props.getCountryInfo()}*/}
                {/*{console.log(this.props.country.country.data)}*/}
            </div>
    )
    }
}

export default Counrty;