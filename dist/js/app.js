$(function() {
  $('#menu_btn').on('click touch', function(e) {
    e.preventDefault();
    let winH = $(window).height();

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active').find('img').css({
        'opacity': 1
      });
      $('.header nav').css({
        'height': 'auto',
        'overflow-y': 'visible',
        'opacity': 0
      });
      $('.header nav').fadeOut();
    } else {
      $(this).addClass('is-active').find('img').css({
        'opacity': 0
      });
      $('.header nav').css({
        'height': winH - 60,
        'overflow-y': 'scroll',
        'opacity': 1
      });
      $('.header nav').fadeIn();
    }
  });

  $('.nav_listItem a').on('click touch', function(e){
    let winW = $(window).width();
    e.preventDefault();
    if(winW <= 768) {
      $('#menu_btn').click();
    }
    const speed = 400;
    const href= $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top;
    $('body,html').animate({scrollTop:position - 60}, speed, 'swing');
  });

  $(window).on('resize', function(){
    let winW = $(window).width();
    if(winW > 768) {
      $('.header nav').css({
        'overflow-y': 'visible',
        'height': 'auto',
        'display': 'block',
        'opacity': 1
      });
    } else {
      $('#menu_btn').removeClass('is-active').find('img').css({
        'opacity': 1
      });
      $('.header nav').css({
        'overflow-y': 'visible',
        'height': 'auto',
        'display': 'none',
        'opacity': 0
      });
    }
  });

  // menu accrodion
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
});