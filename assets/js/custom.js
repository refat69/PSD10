$('.comment_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
autoplaySpeed: 1000,
nextArrow:".cnext",
prevArrow:".cprev",
});
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
new VenoBox({
  selector: ".venobox"
});
$(".bottom_to_top").click(function(){
  $("html,body").animate({
    scrollTop:0,
  })
})

$(window).scroll(function(){
  var scrolling =$(this).scrollTop()
  if (scrolling >20) {
    $(".bottom_to_top").fadeIn()
  }else{$(".bottom_to_top").fadeOut()}

  if (scrolling >20) {
    $(".nav_menu").addClass("bg")
  }else{$(".nav_menu").removeClass("bg")}


})