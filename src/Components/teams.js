import React from 'react';

const Teams = ({ teams }) => {
    let itemsToRender;
    if (teams) {
        itemsToRender = teams.map((team) => {
            return (
                <div class="media" style={{ marginBottom: 20, padding: 10, backgroundColor: '#ffd4a6' }}>
                    <img class="align-self-center mr-3" src={team.strTeamBadge} alt="Logo" width="100" height="100" />
                    <div class="media-body">
                        <h5 class="mt-0">{team.strTeam}</h5>
                        <p>{team.strAlternate}</p>
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


export default Teams