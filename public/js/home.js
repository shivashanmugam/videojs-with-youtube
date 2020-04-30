var player = videojs('vid1');

player.playlist([{
  sources: [{
    src: 'https://www.youtube.com/watch?v=gM0qOa_H-rs',
    type: 'video/youtube'
  }],
  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
}]);

// // Play through the playlist automatically.
player.playlist.autoadvance(0);