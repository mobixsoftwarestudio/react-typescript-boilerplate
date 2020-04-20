/**
 *
 * Routes.tsx
 *
 * This component is the container of all Routes. Place new routes on Routes.ts file.
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
        <Route exact={exact} path={path} component={component} key={path} />
      ))}
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  );
}

export default Routes;
