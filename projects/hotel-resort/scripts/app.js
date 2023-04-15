// Shrink navbar on scroll
const navBar = document.getElementById('main_navbar');
window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        navBar.classList.add('scrolled');
        
    } else {
        navBar.classList.remove('scrolled');
    }
}

/* Splide Sliders */
// Hero Slide
const heroSlider = new Splide( '#slide_hero', {
    
    autoplay: 'pause',
    perPage : 1,
});
heroSlider.mount();

// Galery Slide
const galerySlider = new Splide(' .splide-galery', {
    perPage: 3,
    breakpoints: {
        768 : {
            perPage: 1
        },
        992 : {
            perPage: 2
        },
    }
});
galerySlider.mount();

// Counter Up
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelectorAll( '.counter' )
el.forEach((el) => {
  IO.observe(el)
})

// JQuery Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
