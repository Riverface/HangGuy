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
    const { guess } = action; 
    switch (action.type) {
        case "ADD_GUESS":
           return [...state, guess]
        default:
            return state;
    }
}
