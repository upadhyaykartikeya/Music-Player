let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.textContent.trim() === "play_arrow") {
        song.play();
        ctrlIcon.textContent = "pause";
    } else {
        song.pause();
        ctrlIcon.textContent = "play_arrow";
    }
}


if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("play_arrow");
    ctrlIcon.classList.add("pause");
}