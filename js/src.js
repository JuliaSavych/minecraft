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