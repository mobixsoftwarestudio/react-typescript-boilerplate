/**
 *
 * Routes.tsx
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import RoutesList from './Routes';

function Routes() {
  return (
    <Switch>
      {RoutesList.map(({ exact, path, component }) => (
        <Route exact={exact} path={path} component={component} />
      ))}
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  );
}

export default Routes;
