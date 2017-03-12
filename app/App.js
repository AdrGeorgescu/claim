import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import styles from './css/App.css';
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
            // TODO: init a new game
        }
    };

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Name" ref="playerName"/>
                <span className="input-group-btn">
                <Link to="/score" className="btn btn-primary" onClick={this.createGame}>Enter the game</Link>
              </span>
            </div>
        );
    }
}
