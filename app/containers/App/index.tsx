/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Routes from 'containers/Routes';

import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
      <Routes />
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
