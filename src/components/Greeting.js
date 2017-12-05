import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Greeting extends Component {
    render() {
		return (
            <div className="greeting">
                <p className="small_text">{this.props.eventList.greeting[0]}</p>
                <p className="small_text">{this.props.eventList.greeting[1]}</p>
                <p className="big_text">{this.props.eventList.greeting[2]}</p>
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