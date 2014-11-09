import Ember from "ember";
import Thermostat from "../models/thermostat";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      thermostat: Thermostat.fetch()
    });
  }
});
