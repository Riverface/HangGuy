import { combineReducers } from 'redux';
import startButtonReducer from './start-button-reducer';
import submitGuessReducer from './submit-guess-reducer';

const rootReducer = combineReducers({
  startGameButton: startButtonReducer,
  guessBox:submitGuessReducer
});

export default rootReducer;