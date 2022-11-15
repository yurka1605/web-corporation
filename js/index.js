$(document).ready(function() {
  $('select').niceSelect();

  $('.show-menu > .overlay_popup, .menu-close').on('tap click', function() {
    $('body').removeClass('show-menu');    
  });

  $('.menu-burger').on('tap click', function() {
    $('body').addClass('show-menu');  
  });
});