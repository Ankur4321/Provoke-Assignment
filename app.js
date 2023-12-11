// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'AIzaSyBOxyq7ISzsRFt4e1Qo2_IFMT4lwlCKuEM';
const videoId = 'lcDVHRHNNzM'; // Replace with the unlisted YouTube video ID

// Load the YouTube IFrame Player API asynchronously
const scriptTag = document.createElement('script');
scriptTag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // You can handle player state changes here
}
