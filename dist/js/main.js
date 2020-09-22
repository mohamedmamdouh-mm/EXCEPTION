
$(function(){
  'use strict';
  var winH = $(window).height(),
     uperH = $('.upper-bar').innerHeight(),
     navH = $('.navbar').innerHeight();
     $('.slider , .carousel-item').height(winH - ( uperH + navH + 50));
});