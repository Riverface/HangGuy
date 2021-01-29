// @ts-check

import { connect } from 'react-redux';

/**
 * This is for guesses.
 * First we test the action type with a switch statement.
 *  @param {object} state
 *  @param {object} action
 *  @param {string[]} action.exposedWord
 *  @param {string} action.guess
 *  @param {string} action.type
 *  @param {string[]} action.guessBox
 *  @param {string} action.id
 */
export default function submitGuessReducer(state = [], action) {
    const { guess, id, type } = action;
    if ( action.type == 'GUESS_CORRECT' || action.type ==  'GUESS_INCORRECT')
        return (Object.assign(state, {
            [id]: {
                type: action.type,
                guess: action.guess,
            }
        }));
    else {

        return state;
    }
}

