import Ember from 'ember';

export default Ember.ObjectController.extend({
  targetTemp: {
    min: 50,
    max: 80,
    steps: 2,
    current: 60
  },
});
