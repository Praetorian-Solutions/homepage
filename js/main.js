$(function() {
  //tiggle menu
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.menu').toggleClass('open');
	});
  //select a link and close the menu
  $('.link').click(function(){
    $('#nav-icon').toggleClass('open');
    $('.menu').toggleClass('open');
    $('.menu li.active').removeClass('active');
    $(this).parent().addClass('active');
  });

  $('#slide-left').click(function(){
    if (!$('#slide-left').hasClass('disabled')) {
    	$('.slider').removeClass('slide');
      $('#slide-left').toggleClass('disabled');
      $('#slide-right').toggleClass('disabled');
    }
	});

  $('#slide-right').click(function(){
    if (!$('#slide-right').hasClass('disabled')) {
  		$('.slider').addClass('slide');
      $('#slide-left').toggleClass('disabled');
      $('#slide-right').toggleClass('disabled');
    }
	});

  $('#slide-up').click(function(){
    if (!$('#slide-up').hasClass('disabled')) {
    	$('.news').removeClass('slid');
      $('#slide-up').toggleClass('disabled');
      $('#slide-down').toggleClass('disabled');
    }
	});

  $('#slide-down').click(function(){
    if (!$('#slide-down').hasClass('disabled')) {
  		$('.news').addClass('slid');
      $('#slide-up').toggleClass('disabled');
      $('#slide-down').toggleClass('disabled');
    }
	});

  var offsets = setOffsets();
  styleAreas();

  $(window).resize(function() {
    resetAreas();
    offsets = setOffsets();
    styleAreas();
  });

  $(window).scroll(function() {
    styleAreas();
  });

  function styleArea(topOfElement, selector, height, className) {
    if ($(window).scrollTop() > (topOfElement - height)) {
      $(selector).addClass(className);
    }
    else {
      $(selector).removeClass(className);
    }
  }

  function setOffsets() {
    var offsets = {
      title: document.getElementById('title').offsetTop,
      sticky1: document.getElementById('fsection1').offsetTop,
      sticky2: document.getElementById('fsection2').offsetTop,
      sticky3: document.getElementById('fsection3').offsetTop
    }
    return offsets;
  }

  function styleAreas() {
    styleArea(offsets.title, '.title', 0, 'affix');
    if ($(window).width() > 768) {
      //portfolio
      styleArea(offsets.sticky1, '.fsection1', 175, 'affix');
      styleArea(offsets.sticky1, '.fsection1', -150, 'exit');
      if ($('.slider').hasClass('slide')) {
        styleArea(offsets.sticky1, '.fsection1', -150, 'slid');
      }
      //news
      styleArea(offsets.sticky2, '.fsection2', 75, 'affix');
      styleArea(offsets.sticky2, '.fsection2', -250, 'exit');
      //why
      styleArea(offsets.sticky3, '.fsection3', 350, 'enter');
      styleArea(offsets.sticky3, '.fsection3', 75, 'affix');
      styleArea(offsets.sticky3, '.fsection3', -500, 'exit');
    }
  }

  function resetAreas() {
    $('.title').removeClass('affix');
    $('.fsection1').removeClass('affix');
    $('.fsection2').removeClass('affix');
    $('.fsection3').removeClass('affix');
  }
});
