var ThirdDancer = function(top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="thirdDancer"></span>'); 
  this.setPositionThree(this.top, this.left);
};


ThirdDancer.prototype.constructor = ThirdDancer;
ThirdDancer.prototype = Object.create(MakeBlinkyDancer.prototype);

// ThirdDancer.prototype.step = function() {
//   MakeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };

ThirdDancer.prototype.setPositionThree = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};