$(function() {
  var targetHeight = $('.js-float-header-target').height();
  $(window).on('scroll', function() {
    $('.js-float-header').toggleClass('p-header--float', $(this).scrollTop() > targetHeight);
  });

  $('.js-toggle-sp-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
});