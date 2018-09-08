import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('home', {
    path: '/'
  });
  this.route('page', {
    path: '/page/:page'
  });
});

export default Router;
