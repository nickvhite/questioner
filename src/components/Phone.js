import React, { Component } from 'react';
import { connect } from 'react-redux';

class Phone extends Component {
	render() {
		let phoneData = this.props.eventList.phone;
		return (
			<div className='phone' key='phone'>
				<p className="phone_title" key="phone_title">{phoneData.title}</p>
				<div className="phone_loader"  key="phone_loader" />
				<label htmlFor="phone_input" key="label" className="phone_label">{phoneData.text}</label>
				<input type="tel" id="phone_input" key="input" placeholder="+7(___)___-__-__"/>
			</div>
		)
	}
}

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({})
)(Phone);