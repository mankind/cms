import DS from 'ember-data';

var User = DS.Model.extend({
      username: DS.attr('string'),
      password: DS.attr('string'),
      pages: DS.hasMany('pages')
});

User.reopenClass({
  FIXTURES: [
    { 
      id: 1, 
      username: '',
      password: '' ,
      pages: [1, 2, 3, 4, 5]
    },
  
  ]
});


export default User;
