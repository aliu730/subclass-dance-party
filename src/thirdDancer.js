// var Knuckles = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);
//   this.append('<span class="knuckles"></span>');
// };

// Knuckles.prototype = Object.create(MakeDancer.prototype);
// Knuckles.prototype.constructor = Knuckles;

// Knuckles.prototype.step = function() {  
//   MakeDancer.prototype.step.call(this);

//   this.$node.toggle();
// };

var ThirdDancer = function(top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="thirdDancer"></span>'); 
};


ThirdDancer.prototype.constructor = ThirdDancer;
ThirdDancer.prototype = Object.create(MakeBlinkyDancer.prototype);

ThirdDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};