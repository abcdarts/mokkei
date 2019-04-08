import '../scss/reset.scss'
import '../scss/style.scss'
import '../scss/style_sp.scss'

import $ from "jquery";

$(function() {
  $('#menu_btn').on('click', function() {
    let bodyH = $('body').height();
    let scH = $(window).scrollTop();

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.overlay').fadeOut();
    } else {
      $('.overlayMenu').css({
        'top': scH + 100
      });
      $('.overlay').css( {
        'height': bodyH
      });
      $(this).addClass('is-active');
      $('.overlay').fadeIn();
    }
  });
})