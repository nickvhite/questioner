import React, { Component } from 'react';
import { connect } from 'react-redux';

class Congratulations extends Component {
    render() {
        let congratData = this.props.eventList.congratulations;
		return (
            <div className="congratulations">
                <h1>{congratData.title_1}</h1>
                <p className="text_1">{congratData.text_1}</p>
				<p className="text_2">{congratData.text_2}</p>
                <h3>{congratData.title_2}</h3>
				<p className="text_3">{congratData.text_6}</p>
                <p className="text_4">{congratData.text_3}</p>
				<p className="text_3">{congratData.text_6}</p>
                <p className="text_5">{congratData.text_4}</p>
                <p className="text_6">{congratData.text_5}</p>
            </div>
        )
    }
}

export default connect(
    state => ({
		eventList: state
	}),
    dispatch => ({})
)(Congratulations);