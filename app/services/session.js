import Ember from 'ember';

export default Ember.Object.extend({
  //property to hold currentUser or an authKey
  currentUser: null,

  // property in conjunction with currentUser to determine if to display the logout button
  loggedIn: false,

// when a user enters the app unauthenticated, the transition to where they are going is saved off so it can be retried when they have logged in.
  savedTransition: null,
  
  isCurrentUser: Ember.computed.notEmpty('currentUser'),
  
  isLoggedIn: Ember.computed.equal('loggedIn', true),
  
  //returns true if 'isCurrentUser' and 'isloggedIn' are both true and returns false if any of them is false
  currentlyLoggedIn: Ember.computed.and('isCurrentUser', 'isLoggedIn'),

  login: function() {
    this.setProperties({ savedTransition: null, loggedIn: true });
  },
  
  logout: function() {
    this.set('loggedIn', false);
  }
});
