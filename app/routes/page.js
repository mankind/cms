import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    
     var pagesRouteModel = this.modelFor('pages');
     var passedInValue = pagesRouteModel.findBy('name', params.page_name);
     return passedInValue;

  },
  
  serialize: function(model) {
    return {page_name: model.get('name') };
  } 
});
