$(window).load(function() {
  doPreload();
  // setTimeout(function() {
  //   doPreload();
  // }, 5000);
});

function doPreload() {
  $('#status').fadeOut(); // will first fade out the loading animation
    $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
}
