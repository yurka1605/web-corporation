$('.show_popup').click(function() {
  var popup_id = $('#' + $(this).attr("rel"));
  $(popup_id).show();
  $('.overlay_popup').show();
});

$('.overlay_popup, .popup-close').click(function() {
  $('.overlay_popup, .popup').hide();
});