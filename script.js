console.log("welcome to spotify")
//intializing variable

const audio = document.getElementById('audio');
const masterPlay = document.getElementById('masterPlay');
const progressBar = document.getElementById('myProgressBar');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const timeLeftSpan = document.getElementById('timeLeft');

let isPlaying = false;
let animationFrameId = null;

// Helper to format time in mm:ss
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Play/pause toggle
masterPlay.addEventListener('click', () => {
    if (audio.src) {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            isPlaying = true;
            updateProgressSmoothly();
        } else {
            audio.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            isPlaying = false;
            cancelAnimationFrame(animationFrameId);
        }
    }
});

// Smooth progress bar update
function updateProgressSmoothly() {
    if (audio.duration) {
        const progress = parseInt((audio.currentTime / audio.duration) * 100);
        progressBar.value = progress;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
        durationSpan.textContent = formatTime(audio.duration);
        timeLeftSpan.textContent = '-' + formatTime(audio.duration - audio.currentTime);
    }
    if (!audio.paused) {
        animationFrameId = requestAnimationFrame(updateProgressSmoothly);
    }
}

// Seek song when progress bar changes
progressBar.addEventListener('input', () => {
    if (audio.duration) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
        updateProgressSmoothly();
    }
});

// Functions to play songs
function playSong1(src) {
    audio.src = src;
    audio.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    isPlaying = true;
    updateProgressSmoothly();
}
function playSong2(src) {
    audio.src = src;
    audio.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    isPlaying = true;
    updateProgressSmoothly();
}
function playSong3(src) {
    audio.src = src;
    audio.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    isPlaying = true;
    updateProgressSmoothly();
}
function playSong4(src) {
    audio.src = src;
    audio.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    isPlaying = true;
    updateProgressSmoothly();
}
