import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cancel extends Component {
	render() {
		let cancelData = this.props.eventList.cancel;
		return (
			<div className="modal cancel">
				<div className="cancel_container">
					<p className="cancel_text">
						{cancelData.text.map((text, index) =>
							<span key={index}>{text}</span>
						)}
					</p>
					<button
						className={cancelData.buttons.continueBtn.className}
						onClick={cancelData.buttons.onclickFunction}
					>
						<p>{cancelData.buttons.continueBtn.text}</p>
					</button>
					<button
						className={cancelData.buttons.crossBtn.className}
						onClick={cancelData.buttons.onclickFunction}
					>
						<p>{cancelData.buttons.crossBtn.text}</p>
					</button>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({})
)(Cancel);