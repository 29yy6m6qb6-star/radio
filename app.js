const playlist = [

  "news1.mp4",
  "news2.mp4"

];

const video =
  document.getElementById("video");

let current = 0;

function playVideo(index){

  video.src = playlist[index];

  video.play();
}

video.addEventListener(
  "ended",
  () => {

    current++;

    if(current >= playlist.length){

      current = 0;
    }

    playVideo(current);
  }
);

playVideo(current);
