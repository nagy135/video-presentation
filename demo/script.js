const stopSeconds = [
  3,
  7,
  13,
  18,
  23
];

let stopHandler = null;
let index = -1;

const video = document.getElementById('video');
const handler = (e) => {
  switch (e.key){
    case 'r':
      if (stopHandler) clearTimeout(stopHandler);
      console.log('reset')
      video.currentTime = 0;
      break;
    case 'n':
      if (stopHandler) clearTimeout(stopHandler);
      video.play();
      break;
    case 'p':
      if (stopHandler) clearTimeout(stopHandler);
      const newIndex = index - 2;
      video.currentTime = stopSeconds[newIndex] ?? 0;
      video.play();
      break;
  }
}

video.addEventListener('keypress', handler);
document.addEventListener('keypress', handler);

setInterval(() => {
  const currentTime = Math.floor(video.currentTime);
  if (!video.paused && currentTime > 0){
    const foundIndex = stopSeconds.indexOf(currentTime + 1);
    if (foundIndex !== -1){
      index = foundIndex;
      stopHandler = setTimeout(() => {
        video.pause();
      }, 1000)
    }
  }
}, 200);
