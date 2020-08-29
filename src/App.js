import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyle from './styles/global-style';

import LandingPage from './pages/landing-page/landing-page.component';

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </>
);

export default App;
