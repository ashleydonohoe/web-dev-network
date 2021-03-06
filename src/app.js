import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import {startGetForums} from './actions/forums';
import { startGetPosts } from './actions/posts';
import { startGetMessages} from './actions/chat';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      const uid = user.uid;
      const name = user.displayName;
      const photoUrl = user.photoURL;
      const email = user.email;
      const isAnon = user.isAnonymous;

      const currentUser = {
          uid,
          name,
          photoUrl,
          email,
          isAnon
      };

      store.dispatch(login(currentUser));
        store.dispatch(startGetForums()).then(() => {
            store.dispatch(startGetPosts());
            store.dispatch(startGetMessages());
                renderApp();
                if (history.location.pathname === '/') {
                    history.push('/forums');
                }
            });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});