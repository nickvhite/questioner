import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../nouislider.css';
import '../nouislider';

class Questions extends Component {
	render() {
		let questionData = this.props.eventList.questions;
		if (questionData.type === 'range'){
			return (
				<div className="question">
					<p className="question_form_title">{questionData.formTitle}</p>
					<div className="question_form">
						<div id="range_1" key="range_1"> </div>
						<div id="range_2" key="range_2"> </div>
						<span className="question_min">min</span>
						<span className="question_max">max</span>
						<p className="range_data_container">
							от
							<span className="range_data_from">
								{this.props.eventList.range.currentData[0]}
							</span>
							до
							<span className="range_data_to">
								{this.props.eventList.range.currentData[1]}
							</span>
							<span className="range_data_mu">
								{questionData.measUnit}
							</span>
						</p>
					</div>
				</div>
			)
		} else {
			let answers = this.props.eventList.answers[questionData.questionNum].checks;
			return (
				<div className="question">
					<p className="question_title">{questionData.title}</p>
					<p className="question_form_title">{questionData.formTitle}</p>
					<form onChange={questionData.changeFunction}>
						{questionData.variants.map((question, index) =>
							<div
								key={question.text}
								onMouseOver={questionData.hoverFunction}
								onMouseOut={questionData.unHoverFunction}
								className={`question_${index+1} question_${index+1}_input`}
							>
								<input
									id={`question_${index+1}`}
									className="question_input"
									type={questionData.type}
									name={question.text}
									value={question.text}
									defaultChecked={answers[index]}
								/>
								<label htmlFor={`question_${index+1}`} >
									{question.text}
								</label>
							</div>
						)}
					</form>
				</div>
			)
		}
	}
}

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({})
)(Questions);