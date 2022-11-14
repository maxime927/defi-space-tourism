
const $ = require('jquery');

// Main JS
$(document).ready(function () {

  // Menu
  let btnMenu = $('.btn-menu');
  btnMenu.click(function() {
    $('.header-wrap').toggleClass('opened');
    //$('html, body').toggleClass('overflow');
    $('.header-nav').toggleClass('opened');

    $('.has-children').removeClass('active');
  });


});

// Passive event listeners
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
