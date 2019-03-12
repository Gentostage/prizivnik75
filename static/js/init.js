(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space






$(document).ready(function(){
  //плавная анимация 
  $("a[href*=#]").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top-150
      }, 777);
      e.preventDefault();
      return false;
  });
});


$(document).ready(function(){
  //Верстка при подборе экрана 
if($(window).width() <= 768){
  $('#lb_timer').removeClass('left-align');
};
if($(window).width() >= 768){
  $('#lb_timer').addClass('left-align');
};
});

$(window).resize(function () {
  // Удалить класс при изменение разрешения 
  if($(window).width() <= 768){
    $('#lb_timer').removeClass('left-align');
  };
  if($(window).width() >= 768){
    $('#lb_timer').addClass('left-align');
  };
})