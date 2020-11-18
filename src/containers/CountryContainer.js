import React from 'react'
import { connect } from 'react-redux'
import { getCountryFunc } from '../actions/country'
import Country from '../components/Country/Country'


const CountryContainer = ({ country, getCountryInfo }) => (
    <Country
        country={country}
        getCountryInfo={getCountryInfo}
    />
)

const mapStateToProps = (state) => ({
    country: state.country
})

const mapDispatchToProps = dispatch => {
    return {
        getCountryInfo: getCountryFunc(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryContainer)