var uuid = require('../lib/uuid');

module.exports = function(name) {
  return {
    name: name,
    rounds: [],
    participating: true,
    id: uuid.v1(),

    recordResult: function(matchPoints, prestigePoints){
      rounds.add({ matchPoints:matchPoints, prestigePoints: prestigePoints });
    },

    drop: function(){
      participating = false;
    }
  }
}
