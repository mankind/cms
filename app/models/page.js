import DS from 'ember-data';

export default DS.Model.extend({
  navbar: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),

  parent: DS.belongsTo('page', {inverse: 'children', embedded: true}),
  children: DS.hasMany('page', {inverse: 'parent', async: true}),

  
});
