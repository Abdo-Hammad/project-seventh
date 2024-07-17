// Start input2

 $(document).ready(function(){
  $(".header").height($(window).height());
   $(window).on("resize",function(){
     $(".header").height($(window).height());
       $(".slider").each(function(){
       $(this).css("paddingTop", ($(window).height() - $('.slider li').height()) /2);
     });
  });
  $(".linke li a").click(function(){
  $(this).parent().addClass('active').siblings().removeClass('active');
  }); 
      
     $(".slider").each(function(){
         $(this).css("paddingTop", ($(window).height() - $('.slider li').height()) /2);
    });

        $('.slider').bxSlider();


      // start Services

    $('.linke li a').click(function() {
       $('html, body').animate({
           scrollTop: $('#' + $(this).data('value')).offset().top
       },1000);
    });
  // Start testimonials
  (function autoSlider(){
    $('.slider1 .active').each(function(){
      if (!$(this).is(":last-child")) {
     
         $(this).delay(3000).fadeOut(1000, function(){
         $(this).removeClass('active').next().addClass('active').fadeIn();
            autoSlider();
         });


      } else {
        $(this).delay(3000).fadeOut(1000, function(){
         $(this).removeClass('active');
         $('.slider1 div').eq(0).addClass('active').fadeIn();
            autoSlider();
         });
      }  
    });

   
  }());

  // Start mixitup shuffle

  $('.shuffle li').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
  });

});

 // Start mixitup
var mixer = mixitup('.containerq');
 
 // End input2


 // Start nicescroll 
 $("body").niceScroll({
  cursorcolor:"#1abc9c",
  cursorwidth:"16px",
  cursorborder: '1px solid #1abc9c'
}); 