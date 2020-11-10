import React from 'react';

const Leagues = ({ leagues }) => {
    let itemsToRender;
    if (leagues) {
        itemsToRender = leagues.map((league) => {
            return (
                <div>
                    <div class="card">
                        <img class="card-img-top" src={league.strLogo} alt="Logo"/>
                        <div class="card-body">
                            <h4 class="card-title">{league.strLeague}</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div>
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