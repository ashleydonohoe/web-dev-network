import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ForumPostList from '../components/ForumPostList';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import AddPostPage from '../components/AddPostPage';
import ForumThreadList from '../components/ForumThreadList';
import UserProfilePage from '../components/UserProfilePage';
import CodingResourcesPage from '../components/CodingResourcesPage';
import ChatRoomPage from '../components/ChatRoomPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
          <PublicRoute path="/" component={LoginPage} exact />
          <PrivateRoute exact path="/forums" component={DashboardPage} />
          <PrivateRoute path="/forums/:id" component={ForumPostList} exact/>
          <PrivateRoute path="/forums/:forumId/new" component={AddPostPage} exact />
          <PrivateRoute path="/forums/:forumId/:postId/new" component={AddPostPage} exact />
          <PrivateRoute path="/forums/:forumId/:postId" component={ForumThreadList} exact/>
          <PrivateRoute path="/chat" component={ChatRoomPage} exact />
          <PrivateRoute path="/resources" component={CodingResourcesPage} exact/>
          <PrivateRoute path="/users/:userId" component={UserProfilePage} exact/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
