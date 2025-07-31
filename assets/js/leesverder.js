$(document).ready(function() {
  $('#leesverderknop').on('click', function(e) {
    e.preventDefault();
    $('#extra-text').slideToggle();
    $(this).text(function(i, text){
      return text === "Lees verder" ? "Verberg tekst" : "Lees verder";
    });
  });
});