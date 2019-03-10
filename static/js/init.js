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
          scrollTop: $(anchor.attr('href')).offset().top-50
      }, 777);
      e.preventDefault();
      return false;
  });
});