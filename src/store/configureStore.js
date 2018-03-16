import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import forumsReducer from '../reducers/forums';
import postsReducer from '../reducers/posts';
import chatReducer from '../reducers/chat';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        auth: authReducer,
        forums: forumsReducer,
        posts: postsReducer,
        messages: chatReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
