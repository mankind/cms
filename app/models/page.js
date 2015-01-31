import DS from 'ember-data';

var Page = DS.Model.extend({
  navbar: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),

  parent: DS.belongsTo('page', {inverse: 'children', embedded: true}),
  children: DS.hasMany('page', {inverse: 'parent', async: true}),

  
});

Page.reopenClass({
  FIXTURES: [
  
  {
    id:  1,
    name: 'about',
    title: 'about page',
    body: 'great body',
    navbar: 'about',
    parent: null,
    children: [3, 4 ]
    
  },
  
  {
    id:  2,
    name: 'contact',
    title: 'contact page',
    body: 'send an email',
    navbar: 'contact',
    parent: null,
    children: [ ]
    
  },
  
  {
    id:  3,
    name: 'management',
    title: 'our management philosophy',
    body: 'we belive in people',
    navbar: 'management',
    parent: 1,
    children: [ ]
    
  },
  
  {
    id:  4,
    name: 'team',
    title: 'Team Page',
    body: 'we work hard & play hard',
    navbar: 'team',
    parent: 1,
    children: [ ]
    
  },
   {
    id:  5,
    name: 'test',
    title: 'Test Page',
    body: 'we work',
    navbar: 'test',
    parent: null,
    children: [ ]
    
  }
  
]
});

export default Page;
