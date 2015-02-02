import Authenticated from '../authenticated';

export default Authenticated.extend({

  model: function(){
    var pageParent = this.modelFor('page');
   
    var  newPage = this.store.createRecord('page' , {
      parent: pageParent //, children: []
    });
    
    //pageParent.get('children').pushObject(newPage);
    
    console.log('page-new-route', newPage);
    return newPage;    
  },
  
 setupController: function( controller, model) {
     this._super();
     controller.set('model', model);
  },

  actions: { 
     
     save: function(page){
       //console.log('called save', page);
       
       var self = this;
       //var pageParent = this.modelFor('page');
       page.save().then(
         function(data) {
           
           self.send('saveParent', data);
           
           self.transitionTo('page');
         },
         function(error) {
          // work with person that failed to save
           page.rollback();
           console.log("An error occured - Please try again", error);
          }
       ); 

 
     },

     saveParent: function(data){
      var pageParent = this.modelFor('page');           
      pageParent.get('children').pushObject(data);
   
      pageParent.save();
           
      //console.log('pageParent in new-child-route', pageParent);
     },
   
     cancel: function(page) {
       page.rollback();
       this.transitionTo('page.index');   
     } 
   
  } 
  

});
