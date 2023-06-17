import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const TIME_VIDEO_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = function (data) {
  localStorage.setItem(TIME_VIDEO_KEY, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_VIDEO_KEY)));
