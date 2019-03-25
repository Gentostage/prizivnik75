wow = new WOW(
                  {
                  boxClass:     'wow',      // default
                  animateClass: 'animated', // default
                  offset:       0,          // default
                  mobile:       false,       // default
                  live:         true        // default
                }
                )
                wow.init();

$(document).ready(function(){
$('.collapsible').collapsible();
});

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
}


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


// // Модальное окно через 10 секунд
// // var Modalelem = document.querySelector('.modal');
// // var instance = M.Modal.init(Modalelem)
//
// if($(window).width() >= 992){
//     setTimeout(function f() {
//         console.log("modal")
//         instance.open()
//     },60000)
// };


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
  if($(window).width() <= 1200){
    $('#lb_lt').removeClass('right-align');
    $('#lb_timer').removeClass('left-align');
  };
  if($(window).width() >= 1200){
    $('#lb_lt').addClass('right-align');
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

 jQuery(document).ready(function () {
      jQuery(".eTimer").eTimer({
        etType: 0,
        etDate: "01.04.2019.0.0",
        etTitleSize: 17,
        etShowSign: 1,
        etSep: ":",
        etFontFamily: "Trebuchet MS",
        etTextColor: "white",
        etPaddingTB: 15,
        etPaddingLR: 15,
        etBackground: "transparent",
        etBorderSize: 0,
        etBorderRadius: 0,
        etBorderColor: "white",
        etShadow: " 0px 0px 0px 0px #333333",
        etLastUnit: 4,
        etNumberFontFamily: "Impact",
        etNumberSize: 32,
        etNumberColor: "red",
        etNumberPaddingTB: 0,
        etNumberPaddingLR: 6,
        etNumberBackground: "transparent",
        etNumberBorderSize: 0,
        etNumberBorderRadius: 5,
        etNumberBorderColor: "white",
        etNumberShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.5)"

      });
    });