var DancerTwo = function (top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps); 
  this.$node = $('<span class="secondDancer"><img src="magikarp.gif"></span>'); 
  this.setPositionTwo(this.top, this.left);
  this.step3();
};

DancerTwo.prototype.constructor = DancerTwo;
DancerTwo.prototype = Object.create(MakeBlinkyDancer.prototype);

DancerTwo.prototype.setPositionTwo = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

DancerTwo.prototype.step3 = function() {  

  //MakeDancer.prototype.step.call(this);
  var coordinateY = this.top;
  //coordinateY -= 50;
  var coordinateX = this.left;
  (this.$node).animate({left: Math.random() * 1400}, {duration: Math.min(2000, Math.random() * 5000)});
  // (this.$node).css(rotate(180deg));
  (this.$node).animate({left: Math.random() * 1400}, {duration: Math.min(2000, Math.random() * 5000)});
  setTimeout(this.step3.bind(this), Math.random() * 8000);
};
