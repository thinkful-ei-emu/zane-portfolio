$(document).ready(function() {
  $('a').click(function(e) {

    let targetHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 1000);

    e.preventDefault();
    
  });
});