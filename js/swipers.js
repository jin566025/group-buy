var swiper2 = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',

    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:3000,
    autoplayDisableOnInteraction: false,
    speed:1000,
    direction:'horizontal'
});

var swiper = new Swiper('.swiper-container', {

    paginationClickable: true,
    direction: 'vertical',
    onSlideChangeStart: function(swiper){
 
      var swiper_slide1 = parseInt($(".swiper-slide1").length)-1

      if(parseInt(swiper.activeIndex)==swiper_slide1){
      	$(".arrow").addClass("hide")
      }else{
      	$(".arrow").removeClass("hide")
      }
    }
});