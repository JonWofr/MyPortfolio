import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { protectedRoutes } from './protectedRoutes';
import { unprotectedRoutes } from './unprotectedRoutes';

// Components
import ProtectedRoute from './components/ProtectedRoute';

//Links and Routes have to be children of the same router component. Once a link is pressed the whole router component gets rerendered and the sides might be replaced. The header will not be rerendered.
const App = () => {
  return (
    <Router>
      <Switch>
        {protectedRoutes.map((protectedRoute, protectedRouteIndex) => {
          const { path, exact, Component } = protectedRoute;
          return (
            <ProtectedRoute
              key={protectedRouteIndex}
              path={path}
              exact={exact}
              component={Component}
            />
          )
        })}
        {unprotectedRoutes.map((unprotectedRoute, unprotectedRouteIndex) => {
          const { path, exact, Component } = unprotectedRoute;
          return (
            <Route
              key={unprotectedRouteIndex}
              path={path}
              exact={exact}
              component={Component}
            />
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;