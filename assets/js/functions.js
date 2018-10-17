$(function(){
  showNav();
  // closeNavOnLink();
  //slowJump();
})



function showNav() {
  $('.header__logo').on('click', function(){
    $('.header__nav').toggleClass('nav-visible');
    });
};



// function closeNavOnLink() {
  
//   $('a[href^="#"]').on('click',function(){
//     $('nav').toggleClass('nav-visible', 400);
// });
// };

// function slowJump() {
//   $("a").click(function(e) { 
//     e.preventDefault(); 
//     var dest = $.attr(this, 'href');
//     $('html, body').animate({
//       scrollTop: $(dest).offset().top }, 500);
//     return false;
//   });
// };

function slowJump(){
$('nav ul li').on('click','a',function(event){
  event.preventDefault;

  var body = $("html, body"),
      link = $(this).attr('data-scroll');
  
  body.animate({scrollTop: $('section[data-scrolled="'+link+'"]').offset().top}, '500', 'swing', function() { 
  });
  return false;
});
};