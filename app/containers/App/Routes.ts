import HomePage from 'containers/HomePage/Loadable';

export interface IRoute {
  path: string;
  name: string;
  component: (props: unknown) => JSX.Element;
  exact: boolean;
}

const Routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    exact: true,
  },
];

export default Routes;
