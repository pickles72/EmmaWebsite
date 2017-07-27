/**
 * Created by Peter on 7/26/17.
 */
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.header').addClass("sticky");
  }
  else{
    $('.header').removeClass("sticky");
  }
});