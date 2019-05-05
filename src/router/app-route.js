import React from 'react';
import { Route } from 'react-router';

const AppRoute = ({ component: Component, layout: Layout, ...args }) => (
  <Route
    {...args}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default AppRoute;