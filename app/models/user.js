import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  vutes: DS.hasMany('vute')
  // vutes: DS.hasMany('vute', { async: false })
});