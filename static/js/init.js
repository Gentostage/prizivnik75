(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery);
 // end of jQuery name space

 jQuery(document).ready(function () {
  $(".carousel.carousel-slider").carousel({
    fullwidth: true,
    indicators: true,
    shift: 1,
  })

})


// Модальное окно через 10 секунд 
var Modalelem = document.querySelector('.modal');
var instance = M.Modal.init(Modalelem)

if($(window).width() >= 992){
    setTimeout(function f() {
        console.log("modal")
        instance.open()
    },60000)
};


//плавная анимация 
$(document).ready(function(){
  $("a[href*=#]").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top-150
      }, 777);
      e.preventDefault();
      return false;
  });
});

  //Верстка при подборе экрана 

$(document).ready(function(){
  if($(window).width() <= 992){
    $('#lb_timer').removeClass('left-align');
  };
  if($(window).width() >= 992){
    $('#lb_timer').addClass('left-align');
  };
});


// Удалить класс при изменение разрешения 
$(window).resize(function () {
  if($(window).width() <= 768){
    $('#lb_timer').removeClass('left-align');
  };
  if($(window).width() >= 768){
    $('#lb_timer').addClass('left-align');
  };
})