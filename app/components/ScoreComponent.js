import React from 'react';
import {PlayerComponent} from "./PlayerComponent";
import {PlayerScoreComponent} from "./PlayerScoreComponent";

export default class ScoreComponent extends React.Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }

    handlePlayer = (name) => {
        let players = this.state.players;
        if (name.length) {
            players.push({name: name, score: 0});
            this.setState({players: players});
        }
    };

    render() {
        return (
            <div>
                <PlayerComponent ref="playerName" key={Math.random()} handlePlayer={name => this.handlePlayer(name)} />
                {this.state.players.map(player => <PlayerScoreComponent player={player} key={Math.random()} />)}
            </div>
        );
    }
}
