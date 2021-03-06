import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  insert: function() {
    var _this = this;
    $.simpleWeather({
      location: 'Chicago, IL',
      woeid: '',
      unit: 'c',
      success: function(weather) {
        console.log(weather);
        var html = weather.temp+'&deg;'+weather.units.temp;
        _this.$().html(html);
      },
      error: function(error) {
        _this.$().html(error);
      }
    });
  }.on("didInsertElement")
});
