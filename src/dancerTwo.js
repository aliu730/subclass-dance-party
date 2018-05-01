var DancerTwo = function (top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps); 
  this.$node = $('<span class="secondDancer"></span>'); 
  this.setPositionTwo(this.top, this.left);
};

DancerTwo.prototype.constructor = DancerTwo;
DancerTwo.prototype = Object.create(MakeBlinkyDancer.prototype);

// DancerTwo.prototype.step = function() {
//   MakeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };

DancerTwo.prototype.setPositionTwo = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};