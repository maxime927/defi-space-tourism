
const $ = require('jquery');

import data from '../data/data.json';

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

  // Destinations nav
  let btnTabNav = $('.tabs-nav li');
  btnTabNav.click(function() {
    btnTabNav.removeClass('active');
    $(this).addClass('active');

    let target = $(this).attr('data-target');
    $('.tab').removeClass('show');

    // Set new destination informations
    $('.picture source.png').attr('srcset',data.destinations[target].images.png);
    $('.picture source.webp').attr('srcset',data.destinations[target].images.webp);
    $('.picture img').attr('src',data.destinations[target].images.webp);
    setTimeout(function(){
      // Set new destination informations
      $('.tab h2').text(data.destinations[target].name);
      $('.tab p').text(data.destinations[target].description);
      $('.tab .distance .subheading-1').text(data.destinations[target].distance);
      $('.tab .travel-time .subheading-1').text(data.destinations[target].travel);
      $('.tab').addClass('show');
    }, 200)

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
