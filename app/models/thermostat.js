import Ember from "ember";
import Env from "../config/environment";

var Thermostat = Ember.Object.extend({
  targetTemperature: null,
  on: true
});

Thermostat.reopenClass({
  fetch: function() {
    var p, thermostat;
    thermostat = Thermostat.create({});
    p = Ember.$.ajax({
      url: Env.host + "/v1/thermostat",
      headers: { "API-KEY": Env.apiKey }
    });
    p.then(function(data) {
      thermostat.setProperties(data.thermostat);
    });

    return thermostat;
  }
});

Thermostat.reopen({
  _targetTempChanged: function() {
    if (this.oldTarget != null) {
      if (this.oldTarget !== this.get("targetTemperature")) {
        this.save();
      }
    }
  }.observes("targetTemperature"),

  _valueWillChange: function(){
    this.oldTarget = this.get("targetTemperature");
  }.observesBefore("targetTemperature"),

  save: function() {
    var data;
    data = JSON.stringify({ thermostat: this });
    Ember.$.ajax({
      url: Env.host + "/v1/thermostat",
      headers: { "API-KEY": Env.apiKey },
      method: "POST",
      data: data,
      contentType: "application/json"
    });

    return this;
  }
});


export default Thermostat;
