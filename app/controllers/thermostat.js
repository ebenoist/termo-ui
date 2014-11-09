import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    turnUp: function() {
      var currentTemp = this.get("thermostat").get("targetTemp");
      this.get("thermostat").set("targetTemp", currentTemp + 1);
    },
    turnDown: function() {
      var currentTemp = this.get("thermostat").get("targetTemp");
      this.get("thermostat").set("targetTemp", currentTemp - 1);
    }
  }
});
