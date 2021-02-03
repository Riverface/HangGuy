import '../App.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export default function HangGuess(props) {

    return (
        <div className="HangGuess">
            <form onSubmit={props.handleGuess}>
                <input type="text" name="guess" maxLength="1" ></input>
                <input type="submit" value="guess" />
            </form>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        gameWord: state.gameWord,
        exposedWord: state.exposedWord,
        guessBox: state.guessBox
    }
}
HangGuess.propTypes = {
    gameWord: PropTypes.string,
    exposedWord: PropTypes.string,
    guessBox: PropTypes.arrayOf(PropTypes.string),
    handleGuess: PropTypes.func
};

HangGuess = connect(mapStateToProps)(HangGuess);
