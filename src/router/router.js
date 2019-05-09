import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';

import { HomePage } from '../modules';
import history from './history';
import AppRoute from './app-route';
import HomeLayout from '../modules/home/home.layout';
import StoryComponent from '../components/story/story.component';

const loading = <span>Carregando...</span>;

export default class MainRouter extends React.Component {
  render() {
    return (
      <React.Suspense fallback={loading}>
        <Router history={history}>
          <Switch>
            <AppRoute exact  route="/story/:friendlyUrl" component={StoryComponent} layout={HomeLayout}/>
            <AppRoute exact  route="/" component={HomePage} layout={HomeLayout}/>
            <Redirect to="/" />
          </Switch>
        </Router>
      </React.Suspense>
    );
  }
}
