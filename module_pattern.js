var pet_store = (function(){
  var dogs = 21;
  var that = {};

  that.adopt_dog = function(){
    dogs--;
    return dogs;
  }

  return that;
})();

console.log(pet_store.adopt_dog());
