import { combineReducers } from 'redux';
import gameWordReducer from './game-word-reducer';
import startButtonReducer from './start-button-reducer';
import submitGuessReducer from './submit-guess-reducer';

const rootReducer = combineReducers({
  startGameButton: startButtonReducer,
  guessBox:submitGuessReducer,
  gameWord:gameWordReducer
});

export default rootReducer;