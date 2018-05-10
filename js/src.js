console.log('it`s alive');
var menuOpener = document.getElementsByClassName('menu__opener');
console.log(menuOpener[0])
console.log($('.menu__opener'))
$('.menu__opener').click(function(){
  $(this).find('.burger-icon').toggleClass('burger-icon__opener');
  $('.left-menu').toggleClass('active');
})
var hammertime = new Hammer(document);
hammertime.on('panleft panright', function(ev) {
  if($(ev.target).parents('.main-slider').length || $(window).outerWigth > 767){
    return false;
  }
  console.log(ev.type);
  if(ev.type == 'panright'){
    $('.menu__opener .burger-icon').addClass('burger-icon__opener');
    $('.left-menu').addClass('active');
  }
  if(ev.type == 'panleft'){
    $('.menu__opener .burger-icon').removeClass('burger-icon__opener');
    $('.left-menu').removeClass('active');
  }
});

var arrowRight = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>')
var arrowLeft = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"/></svg>')
$('.main-slider').slick({
  appendArrows : '.main-slider__arrows-holder',
  prevArrow : arrowLeft,
  nextArrow : arrowRight
});

// var clik_menu = $('.left-menu_active');
// var open_menu = $('.left-menu li ul');
//     $(clik_menu).on('click', function(e) {
//         e.preventDefault();
//         open_menu.slideToggle();
// $( open_menu).click(function( event ) {
//      event.stopPropagation();
// });    
//     });