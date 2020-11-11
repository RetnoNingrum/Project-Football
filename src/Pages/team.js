import React, { Component } from 'react';

import Header from '../Components/header'
import Footer from '../Components/footer'
import Teams from '../Components/teams'


class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
        };
    }

    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then((data) => {
                this.setState({ teams: data })
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
                        <h2>Teams</h2>
                        <Teams teams={this.state.teams.teams} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Team;