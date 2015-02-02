import Ember from 'ember';

export default Ember.Route.extend({
  
  actions: {
    loginUser: function() {
      var loginController = this.controllerFor('login');
      var username = loginController.get('username');  
      var password = loginController.get('password');
          
      console.log('user', username);

      // this would normally be done asynchronously
      if (username === 'tomster' && password === 'matchy') {
        loginController.setProperties({ username: null, password: null });
       
       //we assuming you made an ajax call to the server without using ember-data
       //so we the json data returns, we store.push to add it to ember-data store
       this.store.push('user', {id:1, username: username, pasword: password});

        var transition = this.get('session').get('savedTransition');

       //set isLoggedIn so the UI shows the logout button
        this.get('session').login();
       
        this.get('session').set('currentUser', username);
        
        Ember.$.cookie('currentUser', username);
          
        console.log('cookie-object-key', Ember.$.cookie('currentUser') );
        
        console.log('isLoggedIn', this.get('session').loggedIn);

       //if the user was going somewhere, send them along, otherwise default to `/posts`
        if (transition) {
          transition.retry();
        } else {
          this.transitionTo('pages');
        }
      }
    }
  }

});
