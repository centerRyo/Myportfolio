$(function() {
  var targetHeight = $('.js-float-header-target').height();
  $(window).on('scroll', function() {
    $('.js-float-header').toggleClass('p-header--float', $(this).scrollTop() > targetHeight);
  });
});