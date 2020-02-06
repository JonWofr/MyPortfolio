import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { unprotectedRoutes } from './unprotectedRoutes.js';

//Links and Routes have to be children of the same router component. Once a link is pressed the whole router component gets rerendered and the sides might be replaced. The header will not be rerendered.
const App = () => {
  return (
      <Router>
        <Switch>
          {unprotectedRoutes.map((route, index) => {
            const { path, exact, Layout, layoutProps, Component } = route;
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                component={Component} />
            )
          })}
        </Switch>
      </Router>
  );
}

export default App;