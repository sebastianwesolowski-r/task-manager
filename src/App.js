import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyle from './styles/global-style';

import LandingPage from './pages/landing-page/landing-page.component';
import HomePage from './pages/home-page/home-page.component';

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  </>
);

export default App;
