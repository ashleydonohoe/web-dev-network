import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import forumsReducer from '../reducers/forums';
import postsReducer from '../reducers/posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        auth: authReducer,
        forums: forumsReducer,
        posts: postsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
