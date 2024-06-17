var swiper = new Swiper("header .mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000,
  },
});
var swiper = new Swiper(".sec2 .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay:500,
  },
});

let menuBtn = document.querySelector(".menuBtn");
let menuR = document.querySelector('.menu');
let sloten = document.querySelector('.close');

menuBtn.addEventListener('click',function(){
  menuR.classList.add('active');
});

sloten.addEventListener('click',function(){
  menuR.classList.remove('active');
});


  $(document).ready(function(){
    $(".headMenu").click(function(){
      $(this).siblings(".headMenu").removeClass("active");
      $(this).toggleClass("active");
      $(this).siblings(".subMenu").stop().slideUp();
      $(this).next().stop().slideToggle();
    });

  $('.btnGreen').click(function() {
    let index = $(this).attr('class').match(/green(\d+)/)[1];
    $('.btnGreen').removeClass('clickedThis');
    $(this).addClass('clickedThis');
    
    $('.items').addClass('view');
    $('.green' + index).removeClass('view');
});
})



