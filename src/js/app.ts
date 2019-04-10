import '../scss/reset.scss'
import '../scss/style.scss'
import '../scss/style_sp.scss'

import $ from "jquery";

$(function() {
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

  $('.menu_listItemTitle').on('click', function(){
    console.log($(this).next('ul'))
    if($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).next('ul').slideUp();
      $(this).find('.accordion_icon').text('＋')
    } else {
      $(this).addClass('is-active');
      $(this).next('ul').slideDown();
      $(this).find('.accordion_icon').text('ー')
    }
  })
});