import React, { Component } from 'react';

import Header from '../Components/header'
import Footer from '../Components/footer'
import Leagues from '../Components/leagues'


class Home extends Component {

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
                <div class="container">

                    {/* Jumbotron Header */}
                    <header class="jumbotron my-4">
                        <h1 class="display-3">A Warm Welcome!</h1>
                        <h2>It's all about football</h2>
                        <a href="#" class="btn btn-primary btn-lg">Find out more!</a>
                    </header>

                    {/* Page Features */}

                    <div class="row">
                        {<Leagues leagues={this.state.leagues.countrys} />}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Home;