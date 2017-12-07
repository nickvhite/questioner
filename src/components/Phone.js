import React, { Component } from 'react';
import { connect } from 'react-redux';

class Phone extends Component {
	render() {
		let phoneData = this.props.eventList.phone;
		return (
			<div className='phone' key='phone'>
				<p className="phone_title" key="phone_title">{phoneData.title}</p>
				<div className="phone_loader"  key="phone_loader">
					<div id="circularG">
						<div id="circularG_1" className="circularG"></div>
						<div id="circularG_2" className="circularG"></div>
						<div id="circularG_3" className="circularG"></div>
						<div id="circularG_4" className="circularG"></div>
						<div id="circularG_5" className="circularG"></div>
						<div id="circularG_6" className="circularG"></div>
						<div id="circularG_7" className="circularG"></div>
						<div id="circularG_8" className="circularG"></div>
					</div>
				</div>
				<label htmlFor="phone_input" key="label" className="zipCode">{phoneData.text}</label>
				<input type="text" id="zipCode" onInput={phoneData.inputFunction} defaultValue="+7(___)___-____" />
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