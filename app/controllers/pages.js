import Ember from 'ember';

export default Ember.Controller.extend({
/*
  parent: function(){
    return (this.get('model').filterBy("parent", null) );
  }.property('model.@each.parent'),
*/
  parentPages: function() {
      var a = this.get('model');
      var b = a.filter( function(record){
         var  c = record.get('parent');
          console.log('parent', c == null);
          return (c == null); 
      }); // closes b
      console.log('b', b);
      return b;
   }.property('model.@each')

});
