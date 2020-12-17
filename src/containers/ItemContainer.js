import React from 'react'
import { connect } from 'react-redux'
import { getSearchingCountryNameFunc } from '../actions/country';
import CounrtyItem from "../components/CountryItem/CountryItem";


const ItemContainer = ({ country,getSearchingCountryName, match}) => (
    <CounrtyItem
        country={country}
        getSearchingCountryName={getSearchingCountryName}
        match={match}
    />
)

const mapStateToProps = (state) => ({
    country: state.country
})

const mapDispatchToProps = dispatch => {
    return {
        getSearchingCountryName: (data) => dispatch(getSearchingCountryNameFunc(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)