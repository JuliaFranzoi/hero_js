var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');


describe('Hero', function(){
  var hero = new Hero("graeme", 100, "haggis");
  var food = new Food("haggis", 10);
  var food2 = new Food("sausage", 10);
  var rat = new Rat("john");
   

  it('should have a name', function(){
    assert.equal("graeme", hero.name);
  });
  
  it('should have health', function(){
    assert.equal(100, hero.health);
    });
  
  it('should have favFood', function(){
    assert.equal("haggis", hero.favFood);
    });

  it('should say name', function(){
    assert.equal("My name is graeme", hero.sayName());
});

  it('should get nutrition when eating', function(){
    hero.eat(food2);
    assert.equal(110, hero.health);
  });

  it('should get nutValue when favFood eating', function(){
    hero.eat(food);
    assert.equal(125, hero.health);
  });

  it('should loose nutValue when eating contaminated food', function(){
    rat.touchFood(food2);
    hero.eat(food2);
    assert.equal(115, hero.health);
  });
  
  });

