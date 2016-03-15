import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('infinite-scroll');
  this.route('list');
  this.route('grid');
  this.route('master-detail');
});

export default Router;
