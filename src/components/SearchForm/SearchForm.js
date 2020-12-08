import React from 'react';
import './searchForm.css';


class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.searchCountry = this.searchCountry.bind(this);
    }

    handleChange(e) {
        let a = e.target.value
        this.props.country.searchQuery(a)
    }

    searchCountry(e) {
        e.preventDefault();
        const link = 'https://restcountries.eu/rest/v2/name/';

        if (this.props.country.searchUrl !== '') {
            let newUrl = this.props.country.searchUrl;

            newUrl = newUrl[0].toUpperCase() + newUrl.slice(1).toLowerCase();
            newUrl = link + newUrl;
            this.props.getSearchingCountryName(newUrl)
        } else {
            let a = 'https://restcountries.eu/rest/v2/all';

            this.props.getSearchingCountryName(a)
            alert("You don't entering country name!!! Please, do it!")
        }
    }

    render() {
        return (
            <div className="form">
                <h2>Search for a country</h2>
                <form className="country-search-form" onSubmit={this.searchCountry}>
                    <input className="form-input" onChange={this.handleChange} value={this.props.country.searchUrl}
                           type="text" placeholder='Enter name of country'/>
                    <button className='form-btn'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;