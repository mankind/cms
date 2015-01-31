import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.modelFor('page');
  },

  actions: {   
     save: function(page){
       var self = this;
      
       page.save().then(
         function() {
             self.transitionTo('page', page);
         },
         function(error) {
          // work with person that failed to save
           self.get('currentModel').rollback();
           //console.log("pages/new route error occured", error);
          }
       );   
     },
   
    cancel: function(page) {
      page.rollback();
      this.transitionTo('page', page);   
    } 
   
  } 
});
