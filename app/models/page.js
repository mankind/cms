import DS from 'ember-data';

var Page = DS.Model.extend({
  navbar: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  user: DS.belongsTo('user'),

  parent: DS.belongsTo('page', {inverse: 'children', embedded: true}),
  children: DS.hasMany('page', {inverse: 'parent', async: true}),

  
});

Page.reopenClass({
  FIXTURES: [
  
  {
    id:  1,
    title: 'about page',
    body: 'great body',
    navbar: 'about',
    parent: null,
    children: [3, 4 ],
    user: 1
  },
  
  {
    id:  2,
    title: 'contact page',
    body: 'send an email',
    navbar: 'contact',
    parent: null,
    children: [ ],
    user: 1  
  },
  
  {
    id:  3,
    title: 'our management philosophy',
    body: 'we belive in people',
    navbar: 'management',
    parent: 1,
    children: [ ],
    user: 1  
  },
  
  {
    id:  4,
    title: 'Team Page',
    body: 'we work hard & play hard',
    navbar: 'team',
    parent: 1,
    children: [ ],
    user: 1
  },
   {
    id:  5,
    title: 'Test Page',
    body: 'we work',
    navbar: 'test',
    parent: null,
    children: [ ],
    user: 1
  }
  
]
});

export default Page;
