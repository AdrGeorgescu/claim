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
            history: [],
            disabled: false
        }
    }

    updateScore = () => {
        let score = parseInt(this.refs.score.value);
        if (Number.isInteger(score)) {
            let totalScore = this.state.score + score;
            this.setState({score: totalScore});
            this.checkScore(totalScore);
            let history = this.state.history;
            history.push(score);
            this.setState({history: history});
        }
    };

    checkScore(score) {
        if (score > 200) {
            this.setState({disabled: true});
        }
        if (score === 200) {
            this.setState({score: 0});
        }
    }

    undo = () => {
        let lastScore = this.state.history.slice(-1)[0];
        let currentScore = this.state.score;

        if (Number.isInteger(parseInt(lastScore))) {
            this.state.history.pop();
            let newScore = currentScore - lastScore; 
            if (newScore < 0) {
                newScore += 200;
            }
            if (newScore < 200 && this.state.disabled === true) {
                this.setState({disabled: false});
            }
            this.setState({score: newScore});
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
                    <input type="number" className="form-control" ref="score" disabled={this.state.disabled} />
                    <span className="input-group-btn">
                        <button className={styles.leftButton + " btn btn-success"} type="button"
                                onClick={score => this.updateScore()}>{this.props.player.name} - {this.state.score}</button>
                    </span>
                </div>
            </div>

        );
    }
}
