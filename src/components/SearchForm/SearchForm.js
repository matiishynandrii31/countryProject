import React from 'react';
import './searchForm.css';


class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.searchCountry = this.searchCountry.bind(this);
    }


    searchCountry(e) {
        e.preventDefault();
        const link = 'https://restcountries.eu/rest/v2/name/';

        if (this.props.country.searchUrl !== '') {
            let newLink = this.props.country.searchUrl;

            newLink = newLink[0].toUpperCase() + newLink.slice(1).toLowerCase();
            newLink = link + newLink;
            this.props.getSearchingCountryName(newLink)
        } else {
            let a = 'https://restcountries.eu/rest/v2/all';

            this.props.getSearchingCountryName(a)
            alert("You don't entering country name!!! Please, do it!")
        }
    }

    handleChange(e) {
        let searchQueryText = e.target.value
        this.props.searchQuery(searchQueryText)

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