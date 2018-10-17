$(function(){
  showNav();
  closeNavOnLink();
})



function showNav() {
  $('.header__logo').on('click', function(){
    $('.header__nav').toggleClass('nav-visible');
    });
};



function closeNavOnLink() {
  
  $('a[href^="#"]').on('click',function(e){
    setTimeout(function(){
      $('.header__nav').toggleClass('nav-visible');
    }, 700);
    
    var el = $( e.target.getAttribute('href') );
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;
  
    if (elHeight < windowHeight) {
      offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
    }
    else {
      offset = elOffset;
    }
    var speed = 700;
    $('html, body').animate({scrollTop:offset}, speed);
});
};