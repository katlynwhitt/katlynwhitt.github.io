var r = $.Deferred();

  $('.circle1').mouseenter(function(){
    $('.button-img').css('visibility','visible');
    $('.button').css('font-size','70px');
    $('.button').css('margin-top','145px');
    $('.button').css('margin-left','46px');
  });

  $('.circle1').mouseleave(function(){
    $('.button-img').css('visibility','visible');
    $('.button').css('visibility', 'hidden');
  });

  // $('.screenshot-hover').mouseenter(function(){
  //   $('.screenshot-hover').css('visibility','visible');
  // });
  //
  // $('.screenshot-hover').mouseleave(function(){
  //   $('.screenshot-hover').css('visibility', 'hidden');
  // });
  //
  // $('.screenshot-hover2').mouseenter(function(){
  //   $('.screenshot-hover2').css('visibility','visible');
  // });
  //
  // $('.screenshot-hover2').mouseleave(function(){
  //   $('.screenshot-hover2').css('visibility', 'hidden');
  // });


  // $('.button').mouseleave(function(){
  //   $('.button-img').css('visibility','hidden');
  // });

// var button = $('.button');

// $('.button').mouseenter(function(){
//   $( ".button" ).html( "<a class='button2><img class='button' src='../images/Bang2.png'></a>" );
// });
//
// $('.button2').mouseleave(function(){
//   $( ".button2" ).html( "<a class='button'><img class='button' src='../images/Bang.png'></a>" );
// });

var FunctionOne = function () {
  // create a deferred object
  // var r = $.Deferred();

  console.log('in Function 1');

  var animation = function() {
    $('.k1').css({
      'transform' : 'translate3d(-197px, -450px, 0) rotate(360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.k2').css({
      'transform' : 'translate3d(397px, -440px, 0) rotate(-360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
    });

    $('.lineA').css({
      'transform' : 'translate3d(375px, -280px, 0) rotate(360deg)',
      'transition' : '1.4s',
      'padding-top' : '0'
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
      'transform' : 'translate3d(-524px, -350px, 0) rotate(-360deg)',
      'transition' : '1.4s'
    }).promise().then(function(){
      console.log('sup');
    });

    $('.y2').css({
      'transform' : 'translate3d(-490px, -220px, 0) rotate(-360deg)',
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
      'box-shadow': '5px 5px 5px #b28181',
      'position' : 'relative',
      'top' : position.top +'px',
      'left' : position.left + 'px',
      '-webkit-animation' : 'spin 15s infinite'
    });
    $('.hiddenBlog').removeClass('hiddenBlog').addClass('blog');

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
    $('.hiddenAbout').removeClass('hiddenAbout').addClass('about');

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
      '-webkit-animation' : 'spin 9s infinite'
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

  };

$('.button').click(function(){
  $('.list').css('display','none');
  $('.button').css('display','none');
  $('.button-img').css('visibility','hidden');
  FunctionOne().done(FunctionTwo);

});

$('.circle1').mouseover(function(){
  console.log('in circle function');
  $('.button').css('visibility','visible');
});
