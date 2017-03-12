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
            score: 0
        }
    }

    updateScore = () => {
        let score = parseInt(this.refs.score.value);
        if (Number.isInteger(score)) {
            this.setState({score: this.state.score + score});
        }
    };

    render() {
        return (
            <div key={Math.random()}>
                <div className={styles["user-score"] + " input-group"}>
                    <input type="number" className="form-control" ref="score" />
                    <span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                            onClick={score => this.updateScore()}>{this.props.player.name} - {this.state.score}</button>
                  </span>
                </div>
            </div>

        );
    }
}
