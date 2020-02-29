import { applyMiddleware, createStore } from 'redux';
import { middlewares } from '../createStore';
import rootReducer from '../reducers';

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
