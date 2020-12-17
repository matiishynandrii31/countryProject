import React from 'react';
import  { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from "react-router-dom";
import './countryItem.css'

class CountryItem extends React.Component{
    constructor(props){
        super(props);
        this.CountryInfo = this.CountryInfo.bind(this);
        this.populationInfo = this.populationInfo.bind(this);
        this.capitalInfo = this.capitalInfo.bind(this);
    }
    componentDidMount(){
        const link = 'https://restcountries.eu/rest/v2/name/';
        let newUrl = this.props.match.params.item;

        newUrl= newUrl[0].toUpperCase() + newUrl.slice(1).toLowerCase();
        newUrl = link + newUrl;
        this.props.getSearchingCountryName(newUrl)
    }
    populationInfo(item){
        const MILIONNUM = 1000000;
        const THOUSANDNUM = 1000;
        let number = item.population;
        let thousands, milions;
        let milStr='', thouStr='';

        milions= number/MILIONNUM;
        milions= +milions.toFixed();
        if(milions> 0){
            milStr = ` ${milions},`
        }

        number = number % MILIONNUM;
        thousands = number/THOUSANDNUM;
        thousands= +thousands.toFixed();
        if(thousands> 0){
            thouStr = `${thousands},`;
        }

        number = number % THOUSANDNUM;

        let finalStr = milStr+thouStr+number
        return ( <span>{finalStr}</span> )
    }

    capitalInfo(item){
        if(Array.isArray(item.capital)){
            return 'More than 1 capital'
        }else{
            if(item.capital){
                return item.capital
            }else{
                return 'Country havent capitel'
            }
        }
    }
    CountryInfo(){
        if(this.props.country.country.data){
            return(
                this.props.country.country.data.map( item => {
                    return(
                        <li key = {uuidv4()} className='countries-list-main-ul-li country-list-ul' >
                            <div className='countries-list-main-ul-li-info'>
                                <h2>{item.name}</h2>
                                <h3>Capital: {this.capitalInfo(item)}</h3>
                                <h3>Population: {this.populationInfo(item)}</h3>
                                {item.regionalBlocs.length > 0 &&
                                <p>RegionalBlocs: {item.regionalBlocs[0].name}</p>}
                                <p>Currencies: {item.currencies[0].name}</p>
                                <p>Native Name: {item.nativeName}</p>
                                <p>Languages: {item.languages[0].name}  <br /> Native language name: {item.languages[0].nativeName}</p>
                                <ul>
                                    {item.regionalBlocs.map((item2) => {
                                        for(let key in item2){
                                            <li>{item2[key]}</li>
                                        }
                                    })}
                                </ul>
                            </div>
                            <a href="#" className='countries-list-main-ul-li-img'><img src={item.flag} alt=""/></a>
                        </li>
                    )
                })
            )
        }
    }
    render(){
        return(
            <div className='Countries-item'>
                <Link to={"/list"} className='coumties-back btn' >Back</Link>
                <ul className='countries-list-main-ul'>
                    {this.CountryInfo()}
                </ul>
            </div>
        )
    }
}

export default CountryItem;