$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
})

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();

  });

$(function(){
    $('.slider').slick({
        autoplay:true,
        dots: true,
        infinite:true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    })
})