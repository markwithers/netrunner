module.exports = function(name) {
  return {
    name: name,
    rounds: [],
    participating: true,

    recordResult: function(matchPoints, prestigePoints){
      rounds.add({ matchPoints:matchPoints, prestigePoints: prestigePoints });
    },

    drop: function(){
      participating = false;
    }
  }
}
