import React from 'react';
import "./country.css"


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
                        <ul>
                            <li key={item.name} className="list-item">
                                <div>
                                    <h3>{item.name}</h3>
                                </div>
                                <div>
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
            <div className="header">
                {/*<button onClick={this.props.getCountryInfo}>CountryList</button>*/}
                {/*{this.props.getCountryInfo()}*/}
                {console.log(this.props.country.country.data)}
                {this.showCountryList()}
            </div>
        )
    }
}

export default Counrty;