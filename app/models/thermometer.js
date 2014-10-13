import Ember from "ember";
import Env from "../config/environment";

var Thermometer = Ember.Object.extend({
  currentTemp: null,
  readTime: null,
});

Thermometer.reopenClass({
  fetch: function() {
    var p, thermometer;
    thermometer = Thermometer.create({});
    p = Ember.$.ajax({
      url: Env.host + "/v1/thermometer",
      headers: { "API-KEY": Env.apiKey },
    });
    p.then(function(data) {
      thermometer.setProperties(data.thermometer);
    });

    return thermometer;
  }
});

export default Thermometer;
