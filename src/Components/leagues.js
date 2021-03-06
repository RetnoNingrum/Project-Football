import React from 'react';

const Leagues = ({ leagues }) => {
    let itemsToRender;
    if (leagues) {
        itemsToRender = leagues.map((league) => {
            return (
                <div class="media" style={{ marginBottom: 20, padding: 10, backgroundColor: '#ffd4a6' }}>
                    <img class="align-self-center mr-3" src={league.strBadge} alt="Logo" width="100" height="100" />
                    <div class="media-body">
                        <h5 class="mt-0">{league.strLeague}</h5>
                        <p>{league.strLeagueAlternate}</p>
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            )
        }
        )
    } else {
        itemsToRender = "Loading...";
    }
    return <div>{itemsToRender}</div>;
}


export default Leagues