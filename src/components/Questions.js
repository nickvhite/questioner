import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../nouislider.css';
import '../nouislider';

class Questions extends Component {
	componentDidUpdate(){
		if (this.props.eventList.questions.type === 'range') {
			let  noUiSlider =  window.noUiSlider;
			let range = document.getElementById('range');
			let max = Number(this.props.eventList.questions.to);
			
			let a = noUiSlider.create(range, {
				start: [0, max],
				connect: true,
				step: 1,
				range: {
					'min': 0,
					'max': max
				}
			});
			a.on('update', function(){
				// console.log(a.get());
			});
		}
	}
	render() {
		let questionData = this.props.eventList.questions;
		if (questionData.type === 'range'){
			return (
				<div className="question">
					<p className="question_form_title">{questionData.formTitle}</p>
					<div className="question_form">
						<div id="range" key="range"> </div>
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