function TronPlayer (container) {
  let dummyUrl = 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_20mb.mp4';

  let videoElement = document.createElement('video');
  videoElement.src = dummyUrl;
  videoElement.controls = true;
  videoElement.style.width = '100%';

  container.appendChild(videoElement);
}

TronPlayer.VERSION = '0.0.2';

export {
  TronPlayer
};
