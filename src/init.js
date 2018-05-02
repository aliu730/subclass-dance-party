$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('MakeBlinkyDancer');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new MakeBlinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.dancerTwoButton').on('click', function(event) {//magikarp
    var dancerMakerFunctionNameTwo = $(this).data('dancerTwo');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionNameTwo];

    // make a dancer with a random position
    var dancerTwo = new DancerTwo(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      //Math.random() * 1000
      2000
    );
    $('body').append(dancerTwo.$node);
    //console.log($(this).position());
    //window.dancers.push(dancerTwo)
  });

  $('.dancerThreeButton').on('click', function(event) {//purple circle
    //var dancerMakerFunctionNameThree = $(this).data('ThirdDancer');

    // get the maker function for the kind of dancer we're supposed to make

    // make a dancer with a random position

    var dancerThree = new ThirdDancer(
      $('body').height() * Math.random(), //(distance from)top in px
      $('body').width() * Math.random(), //(distance from)left in px
      Math.random() * 1000
    );
    $('body').append(dancerThree.$node);
    window.dancers.push(dancerThree);
    for(var i = 1; i < window.dancers.length; i++){
      var left1 = window.dancers[i].left;
      var left2 = dancerThree.left;
      var top1 = window.dancers[i].top;
      var top2 = dancerThree.top;
      var leftComparison = ((left2 - left1) ** 2);
      var topComparison = ((top2 - top1) ** 2);
      var sum = leftComparison + topComparison;
      
      if ((sum)**(0.5) < 100){
        console.log((sum)**0.5)
        var newFish = new DancerTwo(top1, left1, 11);
        $('body').append(newFish.$node);
      }
      
    }
  });
  
  $('.lineUp').on('click', function(event) {
    var size = $('body').width()-100;
    var stringSize = String(size) + 'px';
    $('.dancer').css({'left': stringSize, 'opacity': '0.5'});
    $('.secondDancer').css('top', '0px');
    $('.thirdDancer').css('top', '0px');
  });

  $('body').on('mouseover', '.secondDancer', function (event) {
    $(this).css('top', '5px');
  });
});

