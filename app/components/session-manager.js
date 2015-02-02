import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
     logoutUser: function(){
       console.log('calllled');
       //this.get('session').logout();
       // $.removeCookie('currentUser');
       this.sendAction('action');
     }
   }
});
