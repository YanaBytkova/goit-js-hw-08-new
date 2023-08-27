
   import throttle from "lodash.throttle";
    
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
   

    player.on('play', function() {
        console.log('played the video!');
    });
   

    const onPlay = function(seconds) {
        const videoSeconds = seconds.seconds;
        console.log(videoSeconds);
        localStorage.setItem("videoplayer-current-time", JSON.stringify(videoSeconds));
        
    };

    player.on('timeupdate', throttle(onPlay, 1000));
 
    const timeOfPause = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(timeOfPause || 0);
  
   