var assert = require('assert');
var Food = require('../food');

describe('Food', function(){

  var food = new Food("haggis", 10);
  it('should have a name', function(){
     assert.equal("haggis", food.name);
  });
  

  it('should have a nutValue', function(){
     assert.equal(10, food.nutValue);
  });

});