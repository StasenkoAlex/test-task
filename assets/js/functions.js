(function ($) {
  'use strict';

  $(document).ready(function () {
        
    function DropDownMenu() {
      var $trigger = $('.dropdown-trigger'),
          $menu = $('.dropdown-info');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
    }
    DropDownMenu();

    function SlideToggleMenu() {
      $('.mobile-triggers-menu').click(function() {
       $('.nav-panel').slideToggle();
      });

      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $('.nav-panel').removeAttr('style');
        }
      });
    }
    SlideToggleMenu();

    function FadeSubMenu() {
      $('.main-menu>li').click( function() {
         $(this).children('.sub-menu').toggle();
      });

      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $('.nav-panel').removeAttr('style');
        }
      });
    }
    FadeSubMenu();


     function ProductTabs() {
      var $wrapper = $('.tab-wrapper'),
          $menu = $wrapper.find('.tab-menu li'),
          $content = $wrapper.find('.thumbs');
      
      $content.not(':first-of-type').hide();
      $content.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });
      $menu.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });
      
      $menu.click(function() {
        var $getWrapper = $(this).closest($wrapper),
            dataTab = $(this).attr('data-tab');
        
        $getWrapper.find($menu).removeClass('active');
        $(this).addClass('active');
        
        $getWrapper.find($content).hide();
        $getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
      });
    }
    ProductTabs();

     function Slider() {
      var slideOver= $('.slide-overflow').width(),
          width = $('.poduct-item').width(),
          slideInner=$('.slide-inner').width(),
          count = (slideInner-slideOver)/width,
          offset;

      offset=0;

      $('.slide-overflow .next').click(function() {
        if(offset < width*count) {
          offset += width;
           console.log('next',offset )
          $('.slide-overflow').scrollLeft(offset);
        }
      });

      $('.slide-overflow .prev').click(function() {
        if(offset > 0) {
          offset -= width;
          console.log('prev',offset )
          $('.slide-overflow').scrollLeft(offset);
        }
      });
    }
    Slider();


 /*
       function Slider() {
      var slides = $('.thumbs').children('.poduct-item'),
          width = $('.poduct-item').width(),
          i = slides.length,
          offset = i*width;
          i--;

      offset=0;
      console.log(
        'width: ', width, '\n',
        'length: ', slides.length
      )
      $('.slide-overflow .next').click(function() {
        if(offset < width*i) {
          offset += width;
          console.log('next',offset )
          $('.thumbs').css('transform','translate3d(-' + offset + 'px, 0px, 0px)');
        }
      });

      $('.slide-overflow .prev').click(function() {
        if(offset > 0) {
          offset -= width;
          console.log('prev',offset )
          $('.thumbs').css('transform','translate3d(' + offset + 'px, 0px, 0px)');
        }
      });
   }
   Slider();
*/
  }); //end ready

}(jQuery));