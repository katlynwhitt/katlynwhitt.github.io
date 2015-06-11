var r = $.Deferred();
var button = $('button');




var FunctionOne = function () {
  // create a deferred object
  // var r = $.Deferred();

  console.log('in Function 1');

  var animation = function() {
    $('.k1').css({
      'transform' : 'translate3d(-197px, -470px, 0) rotate(360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.k2').css({
      'transform' : 'translate3d(397px, -470px, 0) rotate(-360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.lineA').css({
      'transform' : 'translate3d(375px, -280px, 0) rotate(360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.a2').css({
      'transform' : 'translate3d(410px, -10px, 0) rotate(-360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.t1').css({
      'transform' : 'translate3d(-450px, -400px, 0) rotate(-360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.t2').css({
      'transform' : 'translate3d(250px, -100px, 0) rotate(360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.t3').css({
      'transform' : 'translate3d(-300px, -250px, 0) rotate(360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.l1').css({
      'transform' : 'translate3d(502px, -190px, 0) rotate(360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.y1').css({
      'transform' : 'translate3d(184px, -390px, 0) rotate(-360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.y2').css({
      'transform' : 'translate3d(-450px, -200px, 0) rotate(-360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.n1').css({
      'transform' : 'translate3d(-440px, -70px, 0) rotate(-360deg)',
      'transition' : '1.4s',
      'padding-top' : '0'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.n2').css({
      'transform' : 'translate3d(-200px, -17px, 0) rotate(360deg)',
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

var FunctionTwo = function () {
    var position = $('.k1').position();
    $('.k1').css({
      'box-shadow': '5px 5px 5px #b28181',
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 12s infinite'
    });
    $('.hiddenContact').removeClass('hiddenContact').addClass('contact');


    var position = $('.k2').position();
    $('.k2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'revspin 16s infinite'
    });

    var position = $('.lineA').position();
    $('.lineA').css({
      // 'box-shadow': '5px 5px 5px #b28181',
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 15s infinite'
    });
    $('.hiddenAbout').removeClass('hiddenAbout').addClass('about');

    var position = $('.a2').position();
    $('.a2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'revspin 13s infinite'
    });

    var position = $('.t1').position();
    $('.t1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'revspin 14s infinite'
    });

    var position = $('.t2').position();
    $('.t2').css({
      'box-shadow': '5px 5px 5px #b28181',
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 16s infinite'
    });

    var position = $('.t3').position();
    $('.t3').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 18s infinite'
    });

    var position = $('.l1').position();
    $('.l1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 12s infinite'
    });

    var position = $('.y1').position();
    $('.y1').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'revspin 14s infinite'
    });

    var position = $('.y2').position();
    $('.y2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'revspin 17s infinite'
    });


    var position = $('.n1').position();
    $('.n1').css({
      'box-shadow': '5px 5px 5px #b28181',
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'revspin 19s infinite'
    });
    $('.hiddenDesign').removeClass('hiddenDesign').addClass('myDesigns');


    var position = $('.n2').position();
    $('.n2').css({
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 12s infinite'
    });

    // $( ".n2" ).replaceWith( '<a class="n2" href="#contact" src="../images/n2.png" </a>');

  };

// $('.bang').click(function(){
//   FunctionOne().done(FunctionTwo);
//   $('.bang').removeClass('bang').addClass('together');
// });
//
// $('.together').click(function(){
//   console.log('reverse,reverse');
// });

// function reverse() {
//     var button = $('button');
//     if (button.hasClass('bang')) {
//       button.removeClass('bang').addClass('together');
//     }
//     else {
//       button.removeClass('together').addClass('bang');
//     }
// };

var returnHome = function () {

  var position = $('.k1').position()
    console.log(position);

  $('.k1').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(197px, 470px, 0)'
    // 'transition' : 'ease-out'
    // }).promise().then(function(){
    });

  $('.k2').css({
    '-webkit-animation' : 'none',
    // '-webkit-transform': 'translate3d(-397px, 470px, 0) rotate(360deg)',
    'transform' : 'translate3d(-397px, 470px, 0) rotate(360deg)',
    // 'transition' : '1.4s'
  }).promise().then(function(){
    console.log($('.k2').position());
  });

  $('.lineA').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(-375px, 280px, 0) rotate(360deg)',
    // 'transition' : '1.4s'
  }).promise().then(function(){
  });

  $('.a2').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(-410px, 10px, 0) rotate(-360deg)',
    // 'transition' : '1.4s'
  }).promise().then(function(){
  });

  $('.t1').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(450px, 400px, 0) rotate(-360deg)',
    'transition' : '1.4s'
  }).promise().then(function(){
  });

  $('.t2').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(-250px, 100px, 0) rotate(360deg)',
    'transition' : '1.4s'
  }).promise().then(function(){
  });

  $('.t3').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(300px, 250px, 0) rotate(360deg)',
    'transition' : '1.4s'
  }).promise().then(function(){
  });

  $('.l1').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(-502px, 190px, 0) rotate(360deg)',
    'transition' : '1.4s'
  }).promise().then(function(){
  });

  $('.y1').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(-184px, 390px, 0) rotate(-360deg)',
    'transition' : '1.4s'
  }).promise().then(function(){
    console.log('sup');
  });

  $('.y2').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(450px, 200px, 0) rotate(-360deg)',
    'transition' : '1.4s'
  }).promise().then(function(){
    console.log('sup');
  });

  $('.n1').css({

    'transform' : 'translate3d(440px, 70px, 0) rotate(-360deg)',
    'transition' : '1.4s',
    '-webkit-animation' : 'none',
  }).promise().then(function(){

    console.log('sup');
  });

  $('.n2').css({
    '-webkit-animation' : 'none',
    'transform' : 'translate3d(200px, 17px, 0) rotate(360deg)',
    'transition' : '1.4s'
  }).promise().then(function(){
    console.log('sup');
  });




  setTimeout(function () {
    // and call `resolve` on the deferred object, once you're done
    r.resolve();
  }, 1400);

  // return the deferred object
  return r;
};

var returnHome2 = function () {
  // var position = $('.k2').position();
  //   $('.k2').css({
  // 'position' : 'relative',
  // 'top' : position.top +'px',
  // 'left' : position.left + 'px',
  // '-webkit-animation' : 'revspin 16s infinite'
// });
  button.removeClass('together').addClass('bang');
  // $('.k2').css('-webkit-animation', 'none');

}

$('button').click(function(){

  if (button.hasClass('bang')) {
    FunctionOne().done(FunctionTwo);
    console.log('in function');
    button.removeClass('bang').addClass('together');
  }

  else if (button.hasClass('together')){
    returnHome().done(returnHome2);
    console.log('in elseif');
  }

  else {
    console.log('what is happening');
  }
});
