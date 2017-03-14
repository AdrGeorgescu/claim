import React from 'react';
import styles from "../css/App.css";

export class PlayerComponent extends React.Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
    }

    save = () => {
        this.props.handlePlayer(this.refs.playerName.value);
    };

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control input-lg" placeholder="Name" ref="playerName"/>
                <span className="input-group-btn">
                    <button className={styles.leftButton + " btn btn-default btn-lg"} type="button" onClick={this.save}>Save</button>
                  </span>
            </div>
        );
    }
}
