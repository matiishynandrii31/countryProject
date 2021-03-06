import React from 'react'
import { connect } from 'react-redux'
import { searchQueryFunc, getSearchingCountryNameFunc } from '../actions/country'
import SearchForm from "../components/SearchForm/SearchForm";



const SearchingContainer = ({ country, searchQuery, getSearchingCountryName }) => (
    <SearchForm
        country={country}
        searchQuery={searchQuery}
        getSearchingCountryName={getSearchingCountryName}
    />
)

const mapStateToProps = (state) => ({
    country: state.country
})

const mapDispatchToProps = dispatch => {
    return {
        searchQuery: (data) => dispatch(searchQueryFunc(data)),
        getSearchingCountryName: (data) => dispatch(getSearchingCountryNameFunc(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchingContainer)