import Ember from 'ember';

export default Ember.Route.extend({
   model: function(){
     return this.store.find('page');
   },

   actions: {
    destroyPage: function(page) {
       var self = this;
       page.destroyRecord().then(
         function(){
           self.transitionTo('pages.index');
         },

         function(error){
           console.log('destroyPost in Postsroute', error);
         }
       );
    } 
  } 

});
