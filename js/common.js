$(function() {
  // ドロワーメニュー
  $('.js-button-hamburger').click(function() {
    $('body').toggleClass('is-active-drawer');
    $('body').toggleClass('is-active-fixed');

    if($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });

  // スクロール後ヘッダー固定
  var headerHeight = $('.l-header').outerHeight();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll > headerHeight) {
      $('.l-header').addClass('is-header-fixed');
      $('.hamburger').addClass('is-active-hamburger');
    } else {
      $('.l-header').removeClass('is-header-fixed');
      $('.hamburger').removeClass('is-active-hamburger');
    }
    
  });

  // モーダル
  var scrollTop;

  // スクロール固定
  function bodyFixedOn() {
    scrollTop = $(window).scrollTop();

    // $('body').css({
    //   position: 'fixed',
    //   top: -scrollTop
    // });
    $('body').css('top', -scrollTop);
  }

  // スクロール解除
  function bodyFixedOff() {
    $('body').css('top', '');
    $(window).scrollTop(scrollTop);
  }

  // モーダル出現
  $('.js-button-modal').on('click', function() {
    // モーダルを出現させた時の位置を維持
    bodyFixedOn();
    $('body').append('<div id="modal-bg"></div>');
    $(this).attr('aria-expended', true);
     
     modalResize();

     $('.l-modal-wrapper, #modal-bg').fadeIn("slow");

     // モーダルを画面中央に出現させる
     $(window).resize(modalResize);
     function modalResize() {
       var width = $(window).width();
       var height = $(window).height();
       
       var cw = $('.l-modal-wrapper').outerWidth();
       var ch = $('.l-modal-wrapper').outerHeight();
       
       $('.l-modal-wrapper').css({
         "left": ((width - cw) / 2) + "px",
         "top": ((height - ch) / 2) + "px"
       }); 
     } 

  });

  $('.js-modal-close').click(function() {
    // モーダルを閉じた時に元の位置を保持
    bodyFixedOff();
    $(this).attr('aria-expended', false);

    $('.l-modal-wrapper, #modal-bg').fadeOut("slow",function() {
      $('#modal-bg').remove();
    });
  });

  // オーバーレイをクリックしたらモーダル消える
  $('body').on('click', '#modal-bg', function() {
    $('.l-modal-wrapper, #modal-bg').fadeOut('slow', function() {
      // モーダルを閉じた時に元の位置を保持
      bodyFixedOff();
      
      $('body').removeClass('is-active-fixed');
      $('#modal-bg').remove();
    $(this).attr('aria-expended', false);
    });
  })


  // ニュースタブの切り替え
  $('.js-tabBody > div:not(:eq(0))').hide();
  let tabs = $('.js-tab');

  $('.js-tab').click(function() {
    $('.js-tabBody > div').hide();
  
    $('.js-tab').removeClass('is-active-tab');
    $(this).addClass('is-active-tab');
    const index = tabs.index(this);
    $('.tab-content').eq(index).fadeIn(1000);
  });

  const config = {
    minDate: "today",
    dateFormat: "Y-m-d",
    mode: "range"
  }
  flatpickr('#calender', config);

  AOS.init()
  
});


