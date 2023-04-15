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