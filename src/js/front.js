
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
    $('.picture img').removeClass('show');

    // Set new destination informations
    setTimeout(function(){
      // Set new destination informations
      $('.picture source.png').attr('srcset',data.destinations[target].images.png);
      $('.picture source.webp').attr('srcset',data.destinations[target].images.webp);
      $('.picture img').attr('src',data.destinations[target].images.webp);
      $('.tab h2').text(data.destinations[target].name);
      $('.tab p').text(data.destinations[target].description);
      $('.tab .distance .subheading-1').text(data.destinations[target].distance);
      $('.tab .travel-time .subheading-1').text(data.destinations[target].travel);
      $('.tab').addClass('show');
      $('.picture img').addClass('show');
    }, 200)

  });

  // Crew nav
  let btnSliderNav = $('.slider-nav li');
  btnSliderNav.click(function() {
    btnSliderNav.removeClass('active');
    $(this).addClass('active');

    let target = $(this).attr('data-target');
    $('.slider-tab').removeClass('show');
    $('.picture img').removeClass('show');

    setTimeout(function(){
      // Set new crew informations
      $('.picture source.png').attr('srcset',data.crew[target].images.png);
      $('.picture source.webp').attr('srcset',data.crew[target].images.webp);
      $('.picture img').attr('src',data.crew[target].images.webp);
      $('.slider-tab h2').text(data.crew[target].name);
      $('.slider-tab .h4').text(data.crew[target].role);
      $('.slider-tab p').text(data.crew[target].bio);
      $('.slider-tab').addClass('show');
      $('.picture img').addClass('show');
    }, 200)

  });

  // Technology nav
  let btnSliderNumberNav = $('.slider-number-nav li');
  btnSliderNumberNav.click(function() {
    btnSliderNumberNav.removeClass('active');
    $(this).addClass('active');

    let target = $(this).attr('data-target');
    $('.slider-number-tab').removeClass('show');
    $('.picture img').removeClass('show');

    setTimeout(function(){
      // Set new technology informations
      $('.picture source.jpg').attr('srcset',data.technology[target].images.portrait);
      $('.picture img').attr('src',data.technology[target].images.landscape);
      $('.slider-number-tab h2').text(data.technology[target].name);
      $('.slider-number-tab p').text(data.technology[target].description);
      $('.slider-number-tab').addClass('show');
      $('.picture img').addClass('show');
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
