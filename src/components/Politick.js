import React, { Component } from 'react';
import { connect } from 'react-redux';

class Politick extends Component {
	render() {
		let politickData = this.props.eventList.politick;
		// debugger;
		return (
			<div className="modal politick">
				<div className="politick_container">
					<div className="politick_text">
						{politickData.text.map((text, index) =>
							<p key={index}>{text}</p>
						)}
					</div>
					<button
						className={politickData.buttons.continueBtn.className}
						onClick={politickData.buttons.continueBtn.onclickFunction}
					>
						<p>{politickData.buttons.continueBtn.text}</p>
					</button>
					<button
						className={politickData.buttons.crossBtn.className}
						onClick={politickData.buttons.crossBtn.onclickFunction}
					>
						<p>{politickData.buttons.crossBtn.text}</p>
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
)(Politick);