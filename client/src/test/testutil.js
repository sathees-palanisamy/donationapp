import rootReducer from '../Store/reducers';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const middlewares = [ReduxThunk];

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}
