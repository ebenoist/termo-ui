import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "input",
  _initializeKnob: function() {
    var _this = this;

    this.$().knob({
      angleOffset: -125,
      angleArc: 250,
      step: 1,
      width: this.get("size"),
      height: this.get("size"),
      min: 10,
      readOnly: this.get("readOnly"),
      max: 26,
      format: function (d) { var f = (d * 1.8) + 32; return parseInt(f) + "°F"; },
      fgColor: this.get("color"),
      displayInput: true,
      change: function (newValue) { _this.set("value", newValue); },
    }).val(this.get("value"));
  }.on("didInsertElement"),

  _valueChanged: function () {
    this.$().val(this.get("value")).trigger("change");
  }.observes("value")
});
