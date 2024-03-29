import '../scss/reset.scss'
import '../scss/style.scss'
import '../scss/style_sp.scss'

import $ from 'jquery';

$(function() {
  $('#menu_btn').on('click touch', function(e) {
    e.preventDefault();
    let bodyH = $('body').height();

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active').find('img').css({
        'opacity': 1
      });
      // $('.header nav').css({
      //   'height': bodyH - 60
      // });
      $('.header nav').fadeOut();
    } else {
      $(this).addClass('is-active').find('img').css({
        'opacity': 0
      });
      // $('.header nav').css({
      //   'height': bodyH - 60
      // });
      $('.header nav').fadeIn();
    }
  });

  $('.nav_listItem a').on('click touch', function(e){
    e.preventDefault();
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    $('#menu_btn').removeClass('is-active').find('img').css({
      'opacity': 1
    });
    $('.header nav').css({
      'display': 'none'
    });
  });

  $('.menu_listItemTitle').on('click touch', function(){
    if($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).next('ul').slideUp();
      $(this).find('.accordion_icon').text('＋')
    } else {
      $(this).addClass('is-active');
      $(this).next('ul').slideDown();
      $(this).find('.accordion_icon').text('ー')
    }
  });

  // $(window).on('resize', function(){
  //   let winW = $(window).width();
  //   let winH = $(window).height();
  //   if(winW > 1100) {
  //     $(this).removeClass('is-active').find('img').css({
  //       'opacity': 1
  //     });
  //     $('.header nav').css({
  //       'overflow-y': 'visible',
  //       'height': 'auto',
  //       'display': 'block',
  //       'opacity': 1
  //     });
  //   }
  // });
});