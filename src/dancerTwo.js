var DancerTwo = function (top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps); 
  this.$node.append('<span class="dancerTwo"></span>'); 
};

DancerTwo.prototype.constructor = DancerTwo;
DancerTwo.prototype = Object.create(MakeBlinkyDancer.prototype);

DancerTwo.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};