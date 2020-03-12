import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ErrorBoundary from '../components/error';
import LoginPage from './login/LoginPage';
import MainPage from './main/HomePage';

function AppRouter() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => <Redirect to="/login" />}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={MainPage} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default AppRouter;
