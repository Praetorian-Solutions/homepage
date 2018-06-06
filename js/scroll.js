$(document).on('scroll touchmove mousewheel', function(event){
    var previous = event.originalEvent.wheelDelta;
    event.preventDefault();
    event.stopPropagation();
    var viewportHeight = $(window).height();
    var container = $('.container');
    var section1 = $('.section1');
    var section1menu = $('#m-s1');
    var section2 = $('.section2');
    var section2menu = $('#m-s2');
    var section3 = $('.section3');
    var section3menu = $('#m-s3');
    var section4 = $('.section4');
    var section4menu = $('#m-s4');
    var section5 = $('.section5');
    var section5menu = $('#m-s5');
    var section6 = $('.section6');
    var section6menu = $('#m-s6');
    var title = $('.logo');
    var multiplier = null;
    if (previous < 0) {
      if (section1.hasClass('active')) {
        multiplier = 1;
        section1.removeClass('active');
        section2.addClass('active');
        section1menu.removeClass('active');
        section2menu.addClass('active');
        title.addClass('active');
      }
      else if (section2.hasClass('active')) {
        multiplier = 2;
        section2.removeClass('active');
        section3.addClass('active');
        section2menu.removeClass('active');
        section3menu.addClass('active');
      }
      else if (section3.hasClass('active')) {
        multiplier = 3;
        section3.removeClass('active');
        section4.addClass('active');
        section3menu.removeClass('active');
        section4menu.addClass('active');
      }
      else if (section4.hasClass('active')) {
        multiplier = 4;
        section4.removeClass('active');
        section5.addClass('active');
        section4menu.removeClass('active');
        section5menu.addClass('active');
      }
      else if (section5.hasClass('active')) {
        multiplier = 5;
        section5.removeClass('active');
        section6.addClass('active');
        section5menu.removeClass('active');
        section6menu.addClass('active');
      }
    }
    else {
      if (section2.hasClass('active')) {
        multiplier = 0;
        section2.removeClass('active');
        section1.addClass('active');
        section2menu.removeClass('active');
        section1menu.addClass('active');
        title.removeClass('active');
      }
      else if (section3.hasClass('active')) {
        multiplier = 1;
        section3.removeClass('active');
        section2.addClass('active');
        section3menu.removeClass('active');
        section2menu.addClass('active');
      }
      else if (section4.hasClass('active')) {
        multiplier = 2;
        section4.removeClass('active');
        section3.addClass('active');
        section4menu.removeClass('active');
        section3menu.addClass('active');
      }
      else if (section5.hasClass('active')) {
        multiplier = 3;
        section5.removeClass('active');
        section4.addClass('active');
        section5menu.removeClass('active');
        section4menu.addClass('active');
      }
      else if (section6.hasClass('active')) {
        multiplier = 4;
        section6.removeClass('active');
        section5.addClass('active');
        section6menu.removeClass('active');
        section5menu.addClass('active');
      }
    }
    if (multiplier != null) {
      container.css('transform', 'translate3d(0, -' + (viewportHeight * multiplier) + 'px ,0)');
    }
});
