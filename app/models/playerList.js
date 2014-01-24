var player = require('./player')

module.exports = function() {
  return {
    players: {},
    getAll: function() {
      return this.players;
    },
    get: function(id) {
      return this.players[id];
    },
    add: function(name) {
      newDude = new player(name);
      this.players[newDude.id] = newDude;
    }
  }
}()
