import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../nouislider.css';
import '../nouislider';

class Questions extends Component {
	render() {
		let questionData = this.props.eventList.questions;
		if (questionData.type === 'range'){
			debugger;
			let rangeElement = window.rangeElement ? window.rangeElement.target : <div id="range" key="range"> </div>
			console.log(rangeElement);
			return (
				<div className="question">
					<p className="question_form_title">{questionData.formTitle}</p>
					<div className="question_form">
						<span className="question_min">min</span>
						<span className="question_max">max</span>
						{rangeElement}
						<p className="range_data_container">
							<span className="range_data_from">
								{questionData.from}
							</span>
							до
							<span className="range_data_to">
								{questionData.to}
							</span>
							<span className="range_data_mu">
								{questionData.measUnit}
							</span>
						</p>
					</div>
				</div>
			)
		} else {
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
									type={questionData.type}
									name={question.text}
									value={question.text}
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