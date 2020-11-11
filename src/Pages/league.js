import React, { Component } from 'react';

import Header from '../Components/header'
import Footer from '../Components/footer'
import Leagues from '../Components/leagues'


class League extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leagues: [],
        };
    }

    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
            .then(res => res.json())
            .then((data) => {
                this.setState({ leagues: data })
            })
            .catch(console.log)
    }
    render() {
        return (
            <div>
                <Header />
                <div class="container" style={{marginTop: 80}}>
                    {/* Page Features */}
                    <div class="container" style={{marginBottom:20, borderColor: "#FF8400", borderStyle: 'solid', borderRadius: 10}}>
                        <h2>Leagues</h2>
                        <Leagues leagues={this.state.leagues.countrys} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default League;