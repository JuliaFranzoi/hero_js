var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

describe('Rat', function(){
  var rat = new Rat('john');
  var food = new Food('orange', 15);

  it('should be able to touch food', function(){
    rat.touchFood(food);
    assert.equal(-15, food.nutValue);
  });
});