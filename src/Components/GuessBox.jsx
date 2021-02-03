import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import WordSquare from './WordSquare'
import { connect } from 'react-redux';

export default function GuessBox(props) {

    return (
        <div className="GuessBox">
            {props.guessBox.map(function (guess) {
                return <React.Fragment key={guess}>
                {guess}
                </React.Fragment>
            })}

        </div>
    );
}
const mapStateToProps = state => {
    return {
        guessBox: state.guessBox,
        gameWord: state.gameWord
    }
}
GuessBox.propTypes = {
    guessBox: PropTypes.arrayOf(PropTypes.string),
    gameWord: PropTypes.string
};
GuessBox = connect(mapStateToProps)(GuessBox);
