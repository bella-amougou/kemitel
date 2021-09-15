setTimeout(function () {
  $(".loader").fadeToggle();
}, 500);
$(document).ready(function() {
  /* ... */
  var windowHeight = $(window).innerHeight();
  $('body').css({'height':windowHeight});
  /* ... */
});