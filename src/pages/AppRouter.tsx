import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import loadable from '@loadable/component';
import ErrorBoundary from '../components/error';
import LoginPage from './login/LoginPage';
import MainPage from './main/DrivingLogAnalysisPage';
const LP = loadable(() => import('./login/LoginPage'));
const MP = loadable(() => import('./main/DrivingLogAnalysisPage'));

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
