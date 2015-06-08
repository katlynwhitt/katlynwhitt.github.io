var FunctionOne = function () {
  // create a deferred object
  var r = $.Deferred();
  var animation = function() {
    $('.k1').css({
      'transform' : 'translate3d(-197px, -470px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.k2').css({
      'transform' : 'translate3d(397px, -470px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.lineA').css({
      'transform' : 'translate3d(375px, -280px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.a2').css({
      'transform' : 'translate3d(410px, -10px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.t1').css({
      'transform' : 'translate3d(-450px, -400px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.t2').css({
      'transform' : 'translate3d(250px, -100px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.t3').css({
      'transform' : 'translate3d(-300px, -250px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.l1').css({
      'transform' : 'translate3d(502px, -190px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.y1').css({
      'transform' : 'translate3d(184px, -390px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.y2').css({
      'transform' : 'translate3d(-450px, -200px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.n1').css({
      'transform' : 'translate3d(-440px, -70px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.n2').css({
      'transform' : 'translate3d(-200px, -17px, 0)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

  };

  animation();

  // do whatever you want (e.g. ajax/animations other asyc tasks)

  setTimeout(function () {
    // and call `resolve` on the deferred object, once you're done
    r.resolve();
  }, 1400);

  // return the deferred object
  return r;
};

// define FunctionTwo as needed
var FunctionTwo = function () {
    var position = $('.k1').position();
    $('.k1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 12s infinite'
    });
    console.log(position.top);

    var position = $('.k2').position();
    $('.k2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 16s infinite'
    });
    console.log(position.top);

    var position = $('.lineA').position();
    $('.lineA').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 15s infinite'
    });
    console.log(position.top);

    var position = $('.a2').position();
    $('.a2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 13s infinite'
    });
    console.log(position.top);

    var position = $('.t1').position();
    $('.t1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 14s infinite'
    });
    console.log(position.top);

    var position = $('.t2').position();
    $('.t2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 16s infinite'
    });
    console.log(position.top);

    var position = $('.t3').position();
    $('.t3').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 18s infinite'
    });
    console.log(position.top);

    var position = $('.l1').position();
    $('.l1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 12s infinite'
    });
    console.log(position.top);

    var position = $('.y1').position();
    $('.y1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 14s infinite'
    });
    console.log(position.top);

    var position = $('.y2').position();
    $('.y2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 17s infinite'
    });
    console.log(position.top);

    var position = $('.n1').position();
    $('.n1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 19s infinite'
    });
    console.log(position.top);

    var position = $('.n2').position();
    $('.n2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 12s infinite'
    });
    console.log(position.top);

  };

$('button').click(function(){
  FunctionOne().done(FunctionTwo);
});

// translate3d(-197px, -470px, 0)

//
// $( "#clickme" ).click(function() {
// $( "#book" ).animate({
//   opacity: 0.25,
//   left: "+=50",
//   height: "toggle"
// }, 5000, function() {
//   // Animation complete.
// });
// });


//   // $('.k1').css('animation-iteration-count', 'infinite;');
// //   $('.k2').css('transform', 'translate3d(-197px, -470px, 0) rotate(360deg)');
// //   $('.k2').css('transition-duration', '1.3s');
// // });
//   $('.lineA').css('transform', 'translate3d(375px, -280px, 0) rotate(360deg)');
//   $('.lineA').css('transition-duration', '1s');
//   $('.a2').css('transform', 'translate3d(510px, -480px, 0) rotate(360deg)');
//   $('.a2').css('transition-duration', '1.2s');
//   $('.t1').css('transform', 'translate3d(-450px, -400px, 0) rotate(360deg)');
//   $('.t1').css('transition-duration', '1s');
//   $('.t2').css('transform', 'translate3d(-550px, -300px, 0) rotate(360deg)');
//   $('.t2').css('transition-duration', '1s');
//   $('.t3').css('transform', 'translate3d(-300px, -250px, 0) rotate(360deg)');
//   $('.t3').css('transition-duration', '.5s');
//   $('.l1').css('transform', 'translate3d(-502px, -190px, 0) rotate(360deg)');
//   $('.l1').css('transition-duration', '1s');
//   $('.y1').css('transform', 'translate3d(184px, -390px, 0) rotate(360deg)');
//   $('.y1').css('transition-duration', '1.1s');
//   $('.y2').css('transform', 'translate3d(400px, -200px, 0) rotate(360deg)');
//   $('.y2').css('transition-duration', '1s');
//   $('.n1').css('transform', 'translate3d(-440px, -70px, 0) rotate(360deg)');
//   $('.n1').css('transition-duration', '.8s');
//   $('.n2').css('transform', 'translate3d(-200px, -17px, 0) rotate(360deg)');
//   $('.n2').css('transition-duration', '1s');
//
//
// });


// -moz-animation:    spin 10s infinite; /* Fx 5+ */
// -o-animation:      spin 10s infinite; /* Opera 12+ */

//   0%   { opacity: 0; }
//   100% { opacity: 1; }
// }
// @-moz-keyframes NAME-YOUR-ANIMATION {
//   0%   { opacity: 0; }
//   100% { opacity: 1; }
// }
// @-o-keyframes NAME-YOUR-ANIMATION {
//   0%   { opacity: 0; }
//   100% { opacity: 1; }
// }
// @keyframes NAME-YOUR-ANIMATION {
//   0%   { opacity: 0; }
//   100% { opacity: 1; }
// }

// #box {
//   -webkit-animation: NAME-YOUR-ANIMATION 5s infinite; /* Safari 4+ */
//   -moz-animation:    NAME-YOUR-ANIMATION 5s infinite; /* Fx 5+ */
//   -o-animation:      NAME-YOUR-ANIMATION 5s infinite; /* Opera 12+ */
//   animation:         NAME-YOUR-ANIMATION 5s infinite; /* IE 10+, Fx 29+ */
// }
