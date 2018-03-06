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
      store.dispatch(login(uid, name));
        store.dispatch(startGetForums()).then(() => {
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


// Data restructure idea. Separate posts themselves into new state with forumId saved; get the posts using the getChild