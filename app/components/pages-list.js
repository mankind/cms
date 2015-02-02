import Ember from 'ember';

export default Ember.Component.extend({
  parent: function(){
    return (this.get('model').filterBy("parent", null) );
  }.property('model.@each.parent'),

});
