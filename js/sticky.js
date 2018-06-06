$(function() {
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.menu').toggleClass('open');
	});

  var sticky1 = $('.fsection1').offset().top;

  $(window).scroll(function() {
      if ($(window).scrollTop() > (sticky1 - 175)) {
          $('.fsection1').addClass('affix');
      }
      else {
          $('.fsection1').removeClass('affix');
      }
  });
});
