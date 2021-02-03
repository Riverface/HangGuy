import { connect } from 'react-redux';
import submitGuessReducer from '../../reducers/submit-guess-reducer'

describe('game word reducer', () => {

  let action;
  const correctGuess = {
    guess: "a",
    gameWord: "ass",
    exposedWord: ""
  }
  test('Should return that guess is correct and give it a spot on the board.', () => {

    expect(expect(submitGuessReducer({}, { type: "GUESS_CORRECT" })).toEqual({})).toBe("GUESS_CORRECT");

  })
  test('Should return that guess is false and give it a spot in the GuessBox', () => {

    expect(expect(submitGuessReducer({}, { type: "GUESS_CORRECT" })).toEqual({})).toBe("GUESS_CORRECT");

  })


})