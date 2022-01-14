import rootReducer from '../Store/reducer';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const middlewares = [ReduxThunk];

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}
