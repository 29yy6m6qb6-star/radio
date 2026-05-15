const video = document.getElementById('video');

const videoSrc =
  './stream/playlist.m3u8';

if (Hls.isSupported()) {
  const hls = new Hls();

  hls.loadSource(videoSrc);
  hls.attachMedia(video);

} else if (
  video.canPlayType(
    'application/vnd.apple.mpegurl'
  )
) {
  video.src = videoSrc;
}
