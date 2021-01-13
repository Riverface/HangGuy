import { combineReducers } from 'redux';
import startButtonReducer from './start-button-reducer';

const rootReducer = combineReducers({
  startGameButton: startButtonReducer
});

export default rootReducer;