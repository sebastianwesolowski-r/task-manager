import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Route, Switch} from 'react-router-dom';

import GlobalStyle from './styles/global-style';

import LandingPage from './pages/landing-page/landing-page.component';
import HomePage from './pages/home-page/home-page.component';
import CalendarPage from './pages/calendar-page/calendar-page.component';
import SettingsPage from './pages/settings-page/settings-page.component';
import NotFoundPage from './pages/not-found-page/not-found-page.component';

import Menu from './components/menu/menu.component';

import AuthenticatedRoute from './custom-routes/authenticated-route';
import UnauthenticatedRoute from './custom-routes/unauthenticated-route';

import {selectAuthToken} from './redux/user/user-selectors';

const App = ({auth}) => {
  return (
    <>
      <GlobalStyle />
      {
        auth ? (
          <Menu />
        ) : null
      }
      <Switch>
        <UnauthenticatedRoute
          exact path="/"
          component={LandingPage}
          appProps={{auth}}
        />
        <AuthenticatedRoute
          exact path="/home"
          component={HomePage}
          appProps={{auth}}
        />
        <AuthenticatedRoute
          exact path="/calendar"
          component={CalendarPage}
          appProps={{auth}}
        />
        <AuthenticatedRoute
          exact path="/settings"
          component={SettingsPage}
          appProps={{auth}}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  auth: selectAuthToken
});

export default connect(mapStateToProps)(App);
