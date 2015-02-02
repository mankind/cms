import Ember from 'ember';

export default Ember.Route.extend({
  
   model : function(){
    return this.store.find('user');
  },
  
  afterModel: function(){
    //we use this to load the user from jquery cookie incase after a browser refresh
    // loadUser is defined lower down in this file
    this.loadUser();
  },
  
  actions: {
    logoutUser: function() {
      //clear the user from the store or log the user out of your backend
      this.clearUser();

      this.get('session').logout();
      this.transitionTo('application');
      Ember.$.removeCookie('currentUser');

    } //closes login user
    

  },// closes action

  //to clear user after logout
  clearUser: function(){
     this.store.find('user', 1).then(function(g){
        g.destroyRecord();
        g.save();
      }); 
   }, 
  
   // we use this to load the user from jquery cookie incase a user refreshes the browser
   //otherwise the user will be logged out
   loadUser: function(){

     if(Ember.$.cookie('currentUser') && !this.get('session').currentUser ){

       var fetchUserFromCookie = Ember.$.cookie('currentUser');
      
      //Since refreshing the browser cleared the currentUser property, we fetch the current user from jquery cookie

      this.get('session').set('currentUser',  fetchUserFromCookie);

      //Here we also push the user back into ember-data store because we didn't set them in our fixtures
      //In a real project you wll instead fetch the user from the store using this.store.getById('user', fetchUserFromCookie)
      // or fetch the user from the server with this.store.find('user', fetchUserFromCookie)
      //we only passed 'Id' because we didn't add the user id to  jquery cookie 

      this.store.push('user', {id: 1, username: fetchUserFromCookie});
      
     }

   }
});
