function stop_s() {
    const audio = document.getElementById('mp3');
    const pla = document.getElementsByClassName('play')[0];
    // pla.style.setProperty('animation-play-state','paused');
    if (audio.paused) {
        audio.play();
        pla.style.setProperty('animation-play-state','running');
    } else {
        audio.pause();
        pla.style.setProperty('animation-play-state','paused');
    }
}