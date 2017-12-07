import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionEnd extends Component {
	render() {
		let questionEndData = this.props.eventList.questionEnd;
		return (
			<div className="question_end">
				<p className="question_end_title">
					{questionEndData.title}
				</p>
				<p className="question_end_text">
					{questionEndData.text}
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
)(QuestionEnd);