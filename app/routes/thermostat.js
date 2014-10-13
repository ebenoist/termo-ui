import Ember from "ember";
import Thermostat from "../models/thermostat";
import Thermometer from "../models/thermometer";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      thermometer: Thermometer.fetch(),
      thermostat: Thermostat.fetch()
    });
  }
});
