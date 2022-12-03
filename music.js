function playPause() {
    var mediaPlayer = document.getElementById('media-video');

    if (mediaPlayer.paused) {
        mediaPlayer.play(); 
        $('.pause-btn').show();
        $('.play-btn').hide();

    } else {
        
        mediaPlayer.pause(); 
        $('.play-btn').show();
        $('.pause-btn').hide();
    }
}