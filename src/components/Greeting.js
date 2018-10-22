import React, { Component } from 'react';
import { connect } from 'react-redux';

const Greeting =({ eventList }) => (
    <div className="greeting">
        <p className="small_text">{eventList.greeting.text_1}</p>
        <p className="small_text">{eventList.greeting.text_2}</p>
        <p className="big_text">{eventList.greeting.text_3}</p>
    </div>
)

export default connect(
    state => ({
		eventList: state
	}),
    dispatch => ({})
)(Greeting);
