import '../scss/reset.scss'
import '../scss/style.scss'
import '../scss/style_sp.scss'

import $ from "jquery";

$(function() {
  console.log('jquery');
  $('#menu_btn').on('click', function(e) {
    e.preventDefault();
    let bodyH = $('body').height();
    let scH = $(window).scrollTop();

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active').find('img').css({
        'opacity': 1
      });
      $('.header nav').fadeOut();
    } else {
      $(this).addClass('is-active').find('img').css({
        'opacity': 0
      });
      $('.header nav').fadeIn();
    }
  });

  $('.nav_listItem a').on('click', function(e){
    $('#menu_btn').removeClass('is-active').find('img').css({
      'opacity': 1
    });
    e.preventDefault();
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    $('.header nav').fadeOut();
  });
});