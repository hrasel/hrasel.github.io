document.addEventListener("DOMContentLoaded", function(){
    /* 1. Custom Video Player */
    const btnPlayPause = document.querySelector('.btn-playpause');
    const video = document.querySelector('.video');
    const videoTime = document.querySelector('.video-time');
    const videoDuration = Math.round(video.duration);
    videoTime.innerText = videoDuration;
    btnPlayPause.addEventListener('click', (e) => {
        if(video.paused) {
            video.play();
            btnPlayPause.setAttribute('data-state', 'pause');
        } else if(video.ended) {
            btnPlayPause.setAttribute('data-state', 'play');
        }
        else {
            video.pause();
            btnPlayPause.setAttribute('data-state', 'play');
        }
    })

    // Decreasing the duration of video
    video.addEventListener('timeupdate', function() {
        videoTime.innerText = Math.floor(video.duration - video.currentTime);
        if(videoTime.textContent == 0) {
            videoTime.textContent = videoDuration;
            btnPlayPause.setAttribute('data-state', 'play');
        }
    })

    /* 2. Isotope Portfolio */
    // init Isotope
    var $isotopePortfolio = $('.portfolio-items').isotope({
        // main isotope options
        itemSelector: '.portfolio-item',
        // set layoutMode
        layoutMode: 'fitRows',
    });

    // filters items on button click
    $('.isotope-nav-list').on('click', '.isotope-nav-list-item', function() {
        const filterValue = $(this).attr('data-filter');
        $isotopePortfolio.isotope({ filter: filterValue });
    })

    let isotopeItems = document.querySelectorAll('.isotope-item');
    // isotope counter and active class function
    function isotopeCounterClass(items) {
        items.forEach(item => {
            let filterValue = item.getAttribute('data-filter');
            const navBadge = item.querySelector('.isotope-nav-list-item .nav-badge');
            // init item count
            let filterCount = 0;
            // specific condition check for all items
            if (filterValue == '*') {
                filterCount = isotopeItems.length;
            } else {
                filterCount = document.querySelectorAll(`.isotope-items ${filterValue}`).length;
            }
            // shows items count on DOM
            navBadge.innerText = filterCount;  

            // add or remove active class
            item.addEventListener('click', function() {
                items.forEach(e => {
                    e.classList.remove('active');
                })
                this.classList.add('active');
            });
        });
    };

    const portfolioNavItems = document.querySelectorAll('.isotope-nav-list li');

    isotopeCounterClass(portfolioNavItems);

    // init Isotope
    var $grid = $('.portfolio-items').isotope({
    // options
    });

    // filter items on button click
    $('.portfolio-nav-list').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
})