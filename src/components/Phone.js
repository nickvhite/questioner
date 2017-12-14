import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask';

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
				<p className="zipCode">{phoneData.text}</p>
				<MaskedInput
				  mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
				  id="zipCode"
				  placeholder="+7 (XXX) XXX XX XX"
				  guide={false}
				  onChange={phoneData.changeFunction}
				/>
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