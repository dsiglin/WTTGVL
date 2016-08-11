/**
 * Main Where The Truck JS
 *
 * @author dave siglin
 * @author dan dietz
 */

jQuery(function(){
  (function($){


    $.scrollLock = ( function scrollLockSimple(){
      var locked   = false;
      var $body;
      var previous;

      function lock(){
        if( !$body ){
          $body = $( 'body' );
        }
        
        previous = $body.css( 'overflow' );
        
        $body.css( 'overflow', 'hidden' );

        locked = true;
      }

      function unlock(){
        $body.css( 'overflow', previous );

        locked = false;
      }

      return function scrollLock( on ) {
        // If an argument is passed, lock or unlock depending on truthiness
        if( arguments.length ) {
          if( on ) {
            lock();
          }
          else {
            unlock();
          }
        }
        // Otherwise, toggle
        else {
          if( locked ){
            unlock();
          }
          else {
            lock();
          }
        }
      };
    }() );

    /**
     * Event listener for the menu "nav" button
     */
    $(".truck-ListOpen-FooterNavMenuContainer").click(function(){
        var $self = $(this);

        // Swap the menu button text
        if($self.hasClass('js-nav-open')){
          $self.removeClass('js-nav-open');
          $(".truck-ListOpen-FooterNavMenuText").text("NAV");
          $.scrollLock( false );
        }else{
          $self.addClass('js-nav-open');
          $(".truck-ListOpen-FooterNavMenuText").text("CLOSE");
          $.scrollLock( true );
        }

        // Show/Hide the Navigation Modal
        $(".truck-ListOpen-FooterNavPopUpContainer").toggleClass("truck-ListOpen-FooterNavMenuPopUpContainer-Show");
        $(".truck-ListOpen-FooterSearchContainer").toggleClass("opacity-Zero-NotClickable");
        $(".truck-ListOpen-FooterFilterContainer").toggleClass("opacity-Zero-NotClickable");
        // $("body").toggleClass("overflow-Hidden");

    });

    /**
     * Event listener for menu "filter" button
     */

    $(".truck-ListOpen-FooterFilterContainer").click(function(){
        var $self = $(this);

        // Swap the filter button text
        if($self.hasClass('js-nav-open')){
          $self.removeClass('js-nav-open');
          $(".truck-ListOpen-FooterFilterText").text("FILTERS");
          $.scrollLock( false );
        }else{
          $self.addClass('js-nav-open');
          $(".truck-ListOpen-FooterFilterText").text("CLOSE");
          $.scrollLock( true );
        }

        // Show/Hide the Filter Modal
        $(".truck-ListOpen-FooterFilterPopUpContainer").toggleClass("truck-ListOpen-FooterFilterPopUpContainer-Show");
        $(".truck-ListOpen-FooterSearchContainer").toggleClass("opacity-Zero-NotClickable");
        $(".truck-ListOpen-FooterNavMenuContainer").toggleClass("opacity-Zero-NotClickable");
        // $("body").toggleClass("overflow-Hidden");

      });

  }(jQuery))
});
