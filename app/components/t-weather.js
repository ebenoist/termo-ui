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
        var html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
        _this.$().html(html);
      },
      error: function(error) {
        _this.$().html('<p>'+error+'</p>');
      }
    });
  }.on("didInsertElement")
});
