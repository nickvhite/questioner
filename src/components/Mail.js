import React, { Component } from 'react';
import { connect } from 'react-redux';

class Mail extends Component {
	render() {
		let mailData = this.props.eventList.mail;
		return (
			<div className='mail'>
				<p className="mail_title">{mailData.title}</p>
				<p className="mail_ahtung">{mailData.ahtung}</p>
				<p className="mail_text_1">{mailData.text_1}</p>
				<p className="mail_text_2">{mailData.text_2}</p>
				<p className="mail_text_3">{mailData.text_3}</p>
				<label htmlFor="mail_input">{mailData.text}</label>
				<input type="email" id="mail_input"/>
			</div>
		)
	}
}

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({})
)(Mail);