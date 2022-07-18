import { combineReducers } from 'redux';
import { theme } from '../reducers/themes';

const rootReducer = combineReducers({
  theme,
});
export default rootReducer;
