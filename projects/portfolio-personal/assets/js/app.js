

$(document).ready(function () {
    var video = $('#video-about');
    $('.video-time').innerText = Math.round(video.duration);
    console.log(video.duration);
});

const video = document.querySelector('video');
console.log(Math.round(video.duration))