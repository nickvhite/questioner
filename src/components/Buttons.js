import React, { Component } from 'react';
import { connect } from 'react-redux';

class Buttons extends Component {
  render() {
    let buttonsData = this.props.eventList.buttons;
    return (
      <div className="buttons">
        {buttonsData.map((btn) =>
          <button 
            key={btn.className} 
            className={`button ${btn.className}`}
            onClick={btn.clickFunction}
            onMouseOver={btn.hoverFunction}
            onMouseOut={btn.unHoverFunction}
          >
            {btn.text}
          </button>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    eventList: state
  }),
  dispatch => ({})
)(Buttons);