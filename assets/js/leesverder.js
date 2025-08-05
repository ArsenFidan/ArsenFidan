$(document).ready(function() {
  $('.leesverderknop2').on('click', function(e) {
    e.preventDefault();

    var $knop = $(this);
    var target = $knop.data('target');
    var origineleTekst = $knop.data('text'); 

    $(target).slideToggle(function() {
      var isZichtbaar = $(this).is(':visible');
      $knop.text(origineleTekst);
    });
  });
});