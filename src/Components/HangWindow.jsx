import '../index.css';

import GameWord from './GameWord'
import GuessBox from './GuessBox';
import HangGuess from './HangGuess'
import HangGuy from './HangGuy';
import HangStart from './HangStart';
import PropTypes from "prop-types";
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

class HangWindow extends React.Component {

    handleClick = (event) => {
        console.log(this.props);
        const { dispatch } = this.props;
        const action = {
            state: this.props.startGameButton,
            type: 'TOGGLE_GAME'
        }
        dispatch(action);
    }

    handleGuess = (event) => {
        event.preventDefault();
        const { dispatch, guessBox, gameWord } = this.props;
        let guess = event.target.guess.value;  
        if (!guessBox.includes(guess)) {
            const action = {
                type: "ADD_GUESS",
                guess: guess
            }
            dispatch(action)
        }
    }

    render(props) {
        let thisFrame = null;
        if (!this.props.startGameButton) {
            thisFrame = <HangStart handleClick={this.handleClick} />
        }
        else {
            thisFrame = <React.Fragment>
                <GuessBox />
                <HangGuy />
                <GameWord />
                <HangGuess handleGuess={this.handleGuess} />
            </React.Fragment>
        }
        return (thisFrame);
    }

}

const mapStateToProps = state => {
    return {
        startGameButton: state.startGameButton,
        gameWord: state.gameWord,
        exposedWord: state.exposedWord,
        guessBox: state.guessBox
    }
}

HangWindow.propTypes = {
    startGameButton: PropTypes.bool,
    gameWord: PropTypes.string,
    exposedWord: PropTypes.string,
    guessBox: PropTypes.arrayOf(PropTypes.string)
};
HangWindow = connect(mapStateToProps)(HangWindow);
export default HangWindow;