import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasName: Ember.computed.notEmpty('model.name'),
  hasPassword: Ember.computed.notEmpty('model.password'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasName',
    'hasPassword'
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(user) {
          _this.transitionToRoute('users.show', user);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },
    cancel: function() {
      return true;
    }
  }
});
