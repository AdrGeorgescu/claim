import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import styles from './css/App.css';
import ApiKeys from '../ApiKeys.json';
export default class App extends React.Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {};
    }

    createGame = () => {
        let gameId = this.refs.gameId.value;
        if (gameId) {
            localStorage.setItem("gameId", gameId);
            console.log("game id: ", gameId);
            // window.location.href = "/score";
        }
    };

    render() {
        return (
            <div>
                <input type="text" className="form-control" placeholder="Game ID" ref="gameId" />
                <Link to="/score" className="btn btn-primary" onClick={this.createGame}>Enter the game</Link>
            </div>
        );
    }
}
