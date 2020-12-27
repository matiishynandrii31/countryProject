import React from 'react';
import {Link} from "react-router-dom";
import './countryItem.css'

class CountryItem extends React.Component {
    constructor(props) {
        super(props);
        this.CountryInfo = this.CountryInfo.bind(this);
        this.populationInfo = this.populationInfo.bind(this);
        this.capitalInfo = this.capitalInfo.bind(this);
    }

    componentDidMount() {
        const link = 'https://restcountries.eu/rest/v2/name/';
        let newUrl = this.props.match.params.item;

        newUrl = newUrl[0].toUpperCase() + newUrl.slice(1).toLowerCase();
        newUrl = link + newUrl;
        this.props.getSearchingCountryName(newUrl)
    }

    populationInfo(item) {
        const MILLION = 1000000;
        const THOUSAND = 1000;
        let num = item.population;
        let thousands, millions;
        let milStr = '', thouStr = '';

        millions = num / MILLION;
        millions = +millions.toFixed();
        if (millions > 0) {
            milStr = ` ${millions},`
        }

        num = num % MILLION;
        thousands = num / THOUSAND;
        thousands = +thousands.toFixed();
        if (thousands > 0) {
            thouStr = `${thousands},`;
        }

        num = num % THOUSAND;

        let finalStr = milStr + thouStr + num
        return (<span>{finalStr}</span>)
    }

    capitalInfo(item) {
        if (Array.isArray(item.capital)) {
            return (
                item.capital.map(cap => {
                    return {cap}
                })
            );
        } else {
            if (item.capital) {
                return item.capital
            } else {
                return "Country haven't capital."
            }
        }
    }

    CountryInfo() {
        if (this.props.country.country.data) {
            return (
                this.props.country.country.data.map(item => {
                    return (
                        <div className='country-list-ul'>
                            <div className='country-info-block'>
                                <h2><b>Information about {item.name}</b></h2>
                                <h4>Name: {item.name}</h4>
                                <h4>Capital: {this.capitalInfo(item)}</h4>
                                <h4>Population: {this.populationInfo(item)}</h4>
                                {item.regionalBlocs.length > 0 &&
                                <p>RegionalBlocs: {item.regionalBlocs[0].name}</p>}
                                <p>Region: {item.region} </p>
                                <p>Languages: {item.languages[0].name}</p>
                            </div>
                            <div className='country-info-block-img'>
                                <img src={item.flag} alt="flag"/>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div className='country-item'>
                <Link to={"/list"} className='back-btn'>Back</Link>
                <div className='countries-list-main-ul'>
                    {this.CountryInfo()}
                </div>
            </div>
        )
    }
}

export default CountryItem;