import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export default function HangStart(props) {
  return (
    <div className="HangStart">
      <button className="startGameButton" onClick={props.handleClick}>Start Game</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    startGameButton: state.startGameButton
  }
}
HangStart.propTypes = {
  handleClick: PropTypes.func,
  startGameButton: PropTypes.bool
};

HangStart = connect(mapStateToProps)(HangStart);
