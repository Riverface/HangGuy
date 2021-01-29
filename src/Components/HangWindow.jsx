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
import {v4} from 'uuid';

class HangWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startGameButton: false,
            gameWord: "ass",
            guessBox: []
        };
    }
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
        const { dispatch } = this.props;
        console.log(event.target.guess.value);
        const guess = event.target.guess.value;
        let actionType = "";
        if (this.state.guessBox.includes(guess)) {
            actionType = "null";
        }
        else if (this.state.gameWord.includes(guess)) {
            actionType = "GUESS_CORRECT";
        }
        else {
            actionType = "GUESS_INCORRECT";
        }
        const action = {
            id:v4(),
            type: actionType,
            guess: guess,
            correct: "yes"
        }
        dispatch(action);
        console.log(this.props);
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
    guessBox: PropTypes.arrayOf(PropTypes.object)
};
HangWindow = connect(mapStateToProps)(HangWindow);
export default HangWindow;