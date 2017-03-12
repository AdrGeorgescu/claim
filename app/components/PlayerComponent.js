import React from 'react';

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
                <input type="text" className="form-control" placeholder="Name" ref="playerName"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.save}>Save</button>
                  </span>
            </div>
        );
    }
}
