import React from 'react';
import styles from "../css/App.css";

export class PlayerScoreComponent extends React.Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            history: []
        }
    }

    updateScore = () => {
        let score = parseInt(this.refs.score.value);
        if (Number.isInteger(score)) {
            this.setState({score: this.state.score + score});
            let history = this.state.history;
            history.push(score);
            this.setState({history: history});
        }
    };

    undo = () => {
        let lastValue = this.state.history.slice(-1)[0];
        if (Number.isInteger(parseInt(lastValue))) {
            this.state.history.pop();
            this.setState({score: this.state.score - lastValue});
        }
    }

    render() {
        return (
            <div key={Math.random()}>
                <div className={styles["user-score"] + " input-group"}>
                    <span className="input-group-btn">
                        <button className="btn btn-warning" type="button"
                                onClick={score => this.undo()}>Undo</button>
                    </span> 
                    <input type="number" className="form-control" ref="score" />
                    <span className="input-group-btn">
                        <button className="btn btn-success" type="button"
                                onClick={score => this.updateScore()}>{this.props.player.name} - {this.state.score}</button>
                    </span>
                </div>
            </div>

        );
    }
}
