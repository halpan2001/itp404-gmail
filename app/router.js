import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sent', {path: '/emails/sent'});
  this.route('trash', {path: '/emails/trash'});
  this.route('email-detail', {path: 'emails/detail/:id'});
  this.route('compose', {path: 'emails/compose'});
});

export default Router;
