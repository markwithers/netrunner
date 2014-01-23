var player = require('./models/player')

var app = Sammy('#main', function() {
  
  this.get('#path', function() {
    this.$element().html('A new route!');

    mark = player('marcus');
    alert(JSON.stringify(mark));
  });

  this.get('#test', function() { 
    alert('test');
  });

});

$(function() {
  app.run();
});

