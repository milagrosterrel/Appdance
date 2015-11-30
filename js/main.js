// Gelatin over button effect with Sass

// Coding by François Lesenne http://lesenne.fr
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
//holder//
$("#holder").hide();
$("#holder").fadeIn(2000);




//scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});

$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  console.log(scroll);

  if (scroll = 0) {
    $('.collapse').addClass("animated fadeInUp");

    
  } else {
    $('.collapse').removeClass("animated fadeInUp");

  }
});

$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  console.log(scroll);

  if (scroll >= 131) {
    $('#quees').addClass("animated fadeInUp");

    
  } else {
    $('#quees').removeClass("animated fadeInUp");

  }
});