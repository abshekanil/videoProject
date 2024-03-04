let playBtn = document.querySelector(".playBtn");
let video = document.querySelector(".videoContainer");

playBtn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
});
