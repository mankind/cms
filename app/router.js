import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
   this.resource('pages', function(){
    this.resource('page', {path: '/:page_name'}, function() {
     //this.resource('page', {path: '/:page_id'}, function() {
       this.route('edit');
       this.route('newChildPage');
     });  //closes 'page'
 
     this.route('new');
   });  //closes 'pages

});

export default Router;
