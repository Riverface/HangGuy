import gameWordReducer from '../../reducers/game-word-reducer.js';

describe('',()=>{

  let action;
  const correctGuess = {
    guess:"a",
    gameWord:"ass",
    exposedWord:""
  }
  test('Should return that guess is correct and give it a spot on the board.',()=>{
    expect(ticketListReducer({}, { type: null })).toEqual({});
  })
  test('Should return that guess is false and give it a spot in the GuessBox',()=>{

  })

  
})