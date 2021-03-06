import Authenticated from '../authenticated';

export default Authenticated.extend({
  model: function(){
    return this.modelFor('page');
  },

  actions: {   
     save: function(page){
       console.log('page-edit tosave', page);
       var self = this;
      
       page.save().then(
         function() {
             self.transitionTo('page', page);
         },
         function(error) {
          // work with person that failed to save
           self.get('currentModel').rollback();
           console.log("pages/new route error occured", error);
          }
       );   
     },
   
    cancel: function(page) {
      page.rollback();
      this.transitionTo('page', page);   
    } 
   
  } 
});
