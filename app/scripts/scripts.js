// accordion
$(document).ready(function() {
    function close_accordion_section() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
  
    $('.accordion-section-title').click(function(e) {
      // Grab current anchor value
      var currentAttrValue = $(this).attr('href');
  
      if ($(e.target).is('.active')) {
        close_accordion_section();
      } else {
        close_accordion_section();
  
        // Add active class to section title
        $(this).addClass('active');
        // Open up the hidden content panel
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }
      e.preventDefault();
    });
  });

// sticky header
var stickyHeader = document.querySelector('.header-sticky');

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 150) {
    stickyHeader.classList.add('header-sticky_opened');
  } else {
    stickyHeader.classList.remove('header-sticky_opened');
  }
});

// mobile menu
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

// Toggle button
  document.querySelectorAll('.js-slideout-toggle').forEach(function(item) {
      item.addEventListener('click', function() {
        slideout.toggle();
    });
  });

  var fixed = document.querySelector('.header-sticky');

  slideout.on('translate', function(translated) {
      fixed.style.transform = 'translateX(' + translated + 'px)';
  });

  slideout.on('beforeopen', function () {
      fixed.style.transition = 'transform 300ms ease';
      fixed.style.transform = 'translateX(256px)';
      fixed.classList.add("header-sticky_with-overlay");
  });

  slideout.on('beforeclose', function () {
      fixed.style.transition = 'transform 300ms ease';
      fixed.style.transform = 'translateX(0px)';
      fixed.classList.remove("header-sticky_with-overlay");
  });

  function close(eve) {
    eve.preventDefault();
    slideout.close();
  }
  
  slideout
    .on('beforeopen', function() {
      this.panel.classList.add('panel-open');
    })
    .on('open', function() {
      this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function() {
      this.panel.classList.remove('panel-open');
      this.panel.removeEventListener('click', close);
});