import { combineReducers } from 'redux';
import newProductReducer from './reducers/reducer';

const rootReducer = combineReducers({
  newProductReducer,
});

export default rootReducer;
