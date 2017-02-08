var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;

  this.sayName = function(){
    return "My name is " + this.name;
  };
  this.eat = function(food){
    var nutrition;
    if(this.favFood ===food.name) {
      nutrition = food.nutValue * 1.5
    }
    else
      {
      nutrition = food.nutValue; 
      
    }
    return this.health+=nutrition;
  };
  

  
};


module.exports = Hero;