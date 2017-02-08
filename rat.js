var Rat = function(name){
  this.name = name; 
  this.touchFood = function(food){
    food.nutValue -= food.nutValue * 2
  };

};
 
module.exports = Rat; 



