import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    
     var pagesRouteModel = this.modelFor('pages');
     console.log('pages model', pagesRouteModel);
     //var passedInValue = pagesRouteModel.findBy('name', params.page_name);
     var passedInValue = pagesRouteModel.findBy('id', params.page_id);
     return passedInValue;
     
  },
  /*
  serialize: function(model) {
    console.log('serialize model', model);
    console.log('page name', model.get('name'));

    var pagesRouteModel = this.modelFor('pages');
     console.log('pages model', pagesRouteModel);

     var b = pagesRouteModel.findBy('name', model);
     console.log('url name', b);

    return {page_name: model.get('name') };
  }
*/ 

  serialize: function(model) {
    // this will make the URL `/pages/page_name`
    console.log('page model', model.get('name'));
    return { page_name: model.get('name') };
  }

});
