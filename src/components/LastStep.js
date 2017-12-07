import React, { Component } from 'react';
import { connect } from 'react-redux';

class Phone extends Component {
	render() {
		let lastStepData = this.props.eventList.lastStep;
		return (
			<div className='last_step' key='last_step'>
				<p className="last_step_title">{lastStepData.title}</p>
				<p className="text_1">{lastStepData.text_1}</p>
				<p className="text_2">{lastStepData.text_2}</p>
				<ol className="last_step_list">
					<li className="last_step_list_1">
						{lastStepData.li_1}
					</li>
					{lastStepData.links.map((link) =>
						<a href={link.src} key={link.src} type="png" className={`link ${link.image}`} />
					)}
					<p className="last_step_list_1_text">
						{lastStepData.text_3}
					</p>
					<li className="last_step_list_2">
						{lastStepData.li_2}
					</li>
					<li className="last_step_list_3">
						{lastStepData.li_3}
					</li>
					<li className="last_step_list_4">
						{lastStepData.li_4}
					</li>
				</ol>
				<p className="last_step_ahtung">
					{lastStepData.text_4}
				</p>
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