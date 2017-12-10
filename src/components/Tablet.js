import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tablet extends Component {
    render() {
    	let tabletData = this.props.eventList.tablet;
    	if(tabletData.className === 'congratulations') {
    		return (
				<div className='tablet congratulations_tablet'>
					<img
						src={`../images/${tabletData.src}`}
						className="congratulations_image"
					/>
					<img src="../images/golden_color.jpg" className="golden"/>
					<img src="../images/ipad.png" className="ipad"/>
				</div>
			)
		} else if (tabletData.className === 'questions'){
			let lastChange = this.props.eventList.lastChange[tabletData.questionNum];
			return (
				<div className={`tablet questions_tablet`}>
					{tabletData.images.map((img, index) =>
						<img
							src={`../images/${img.src}`}
							className={`question_image question_${index+1} question_${index+1}_image`}
							key={`question_${index+1}_image`}
						/>
					)}
					<img src="../images/golden_color.jpg" className="golden"/>
					<img src="../images/ipad.png" className="ipad"/>
				</div>
			)
		} else if (tabletData.className === 'questions_range') {
			let questions = this.props.eventList.questions;
			let questionEnd = this.props.eventList.questionEnd;
			function getFilter() {
				if(questionEnd.questionNum) {
					return 'filter_3'
				} else {
					if(questions.questionNum === 'range_1') {
						return 'filter_1'
					} else {
						return 'filter_2'
					}
				}
			}
			let filterClass = getFilter();
			return (
				<div className={`tablet questions_range_tablet ${filterClass}`}>
					<img src={`../images/${tabletData.image_map}`} className="questions_range_map"/>
					{tabletData.points_array.map((num, index) =>
						<img
							src={`../images/${tabletData.image_point}`}
							key={index}
							className={`p_${index} point_${num} point`}
						/>
					)}
					<img src="../images/golden_color.jpg" className="golden"/>
					<img src="../images/ipad.png" className="ipad"/>
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
)(Tablet);