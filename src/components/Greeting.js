import React, { Component } from 'react';
import { connect } from 'react-redux';

class Greeting extends Component {
    render() {
        let greeting = this.props.eventList.greeting;
		return (
            <div className="greeting">
                <p className="small_text">{greeting.text_1}</p>
                <p className="small_text">{greeting.text_2}</p>
                <p className="big_text">{greeting.text_3}</p>
            </div>
        )
    }
}

export default connect(
    state => ({
		eventList: state
	}),
    dispatch => ({})
)(Greeting);