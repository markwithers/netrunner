var playerList = require('./models/playerList')

var app = Sammy('#main', function() {
  
  this.get('#path', function() {
    this.$element().html('A new route!');

    playerList.add('Mark');
    playerList.add('Joey');
  });

  this.get('#test', function() { 
    this.load('./app/views/addPlayers.mustache').render();
  });

});

$(function() {
  app.run();
});

