import Ember from "ember";
import Env from "../config/environment";

var Thermostat = Ember.Object.extend({
  targetTemp: null,
  heaterOn: true,
  currentTemp: null
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
      thermostat.setProperties(data);
    });

    return thermostat;
  }
});

Thermostat.reopen({
  _targetTempChanged: function() {
    if (this.oldTarget != null) {
      if (this.oldTarget !== this.get("targetTemp")) {
        this.save();
      }
    }
  }.observes("targetTemp"),

  _valueWillChange: function(){
    this.oldTarget = this.get("targetTemp");
  }.observesBefore("targetTemp"),

  save: function() {
    Ember.$.ajax({
      url: Env.host + "/v1/thermostat",
      headers: { "API-KEY": Env.apiKey },
      method: "POST",
      data: JSON.stringify(this),
      contentType: "application/json"
    });

    return this;
  }
});

export default Thermostat;
