//import Ember from 'ember';

import Authenticated from '../authenticated';

export default Authenticated.extend({
  
    model: function(){
    
    var  newPage = this.store.createRecord('page');
    
    
    //console.log('page-new-route', newPage);
    return newPage;    
  },
  
 setupController: function( controller, model) {
    
    controller.set('model', model);
    this._super();
  },

  actions: {   
     save: function(page){
       //console.log('page object', page);

       var self = this;
       page.save().then(
         function() {
           self.transitionTo('pages');
         },
         function(error) {
          // work with person that failed to save
           self.get('currentModel').rollback();
           console.log("An error occured", error);
          }
       );   
     },
   
    cancel: function(page) {
      page.rollback();
      this.transitionTo('pages.index');   
    } 
   
  } 
});
