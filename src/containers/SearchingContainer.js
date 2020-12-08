import React from 'react'
import { connect } from 'react-redux'
import { searchQueryFunc, getSearchingCountryNameFunc } from '../actions/country'
import SearchForm from "../components/SearchForm/SearchForm";



const SearchingContainer = ({ country, searchQuery, getSearchingCountryName }) => (
    <SearchForm
        country={country}
        searchQuery={searchQueryFunc}
        getSearchingCountryName={getSearchingCountryNameFunc}
    />
)

const mapStateToProps = (state) => ({
    country: state.country
})

const mapDispatchToProps = dispatch => {
    return {
        searchQuery: searchQueryFunc(dispatch),
        getSearchingCountryName: getSearchingCountryNameFunc(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchingContainer)