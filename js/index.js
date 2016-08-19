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
    $(".footer-button-NavMenu").click(function(){
        var $self = $(this);

        // Swap the menu button text
        if($self.hasClass('js-nav-open')){
          $self.removeClass('js-nav-open');
          $(".navtext").text("NAV");
          $.scrollLock( false );
        }else{
          $self.addClass('js-nav-open');
          $(".navtext").text("CLOSE");
          $.scrollLock( true );
        }

        // Show/Hide the Navigation Modal
        $("#NavMenu").toggleClass("overlay-MenuShow");
        $(".footer-SearchContainer").toggleClass("opacity-Zero-NotClickable");
        $(".footer-button-FilterMenu").toggleClass("opacity-Zero-NotClickable");
        $(".button-navback").toggleClass("opacity-Zero-NotClickable");
        // $("body").toggleClass("overflow-Hidden");

    });

    /**
     * Event listener for menu "filter" button
     */

    $(".footer-button-FilterMenu").click(function(){
        var $self = $(this);

        // Swap the filter button text
        if($self.hasClass('js-nav-open')){
          $self.removeClass('js-nav-open');
          $(".filtertext").text("FILTERS");
          $.scrollLock( false );
        }else{
          $self.addClass('js-nav-open');
          $(".filtertext").text("CLOSE");
          $.scrollLock( true );
        }

        // Show/Hide the Filter Modal
        $("#FilterMenu").toggleClass("overlay-MenuShow");
        $(".footer-SearchContainer").toggleClass("opacity-Zero-NotClickable");
        $(".footer-button-NavMenu").toggleClass("opacity-Zero-NotClickable");
        $(".button-navback").toggleClass("opacity-Zero-NotClickable");
        // $("body").toggleClass("overflow-Hidden");

      });

  }(jQuery))
});
