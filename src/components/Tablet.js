import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Tablet extends Component {
    render() {
    	let tabletData = this.props.eventList.tablet;
		return (
            <div className='tablet'>
				{tabletData.images.map((img, index) =>
					<img
						src={`../images/${img.src}`}
						className={`tablet_image question_${index+1} question_${index+1}_image`}
						key={`question_${index+1}_image`}
						style={{opacity: '0'}}
					/>
				)}
				<img src="../images/ipad.png" className="ipad"/>
			</div>
        )
    }
}

export default connect(
    state => ({
		eventList: state
	}),
    dispatch => ({})
)(Tablet);