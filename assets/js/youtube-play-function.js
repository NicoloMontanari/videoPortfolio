/*//PLAY
$('a.play-video').click(function(){
	$('.cortometraggio')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});

//STOP
$('a.stop-video').click(function(){
	$('.cortometraggio')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

//PAUSE
$('a.pause-video').click(function(){
	 e.preventDefault();
	$('.cortometraggio')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});
*/

// global variable for the player
	var player;

	// this function gets called when API is ready to use
	function onYouTubePlayerAPIReady() {
	  // create the global player from the specific iframe (#video)
	  player = new YT.Player('video', {
	    events: {
	      // call this function when player is ready to use
	      'onReady': onPlayerReady
	    }
	  });
	}

	function onPlayerReady(event) {
	  
	  // bind events
	  var playButton = document.getElementById("play-button");
	  playButton.addEventListener("click", function() {
	    player.playVideo();

	  });
	  
	  var pauseButton = document.getElementById("pause-button");
	  pauseButton.addEventListener("click", function() {
	    player.pauseVideo();
	    console.log("premuto");
	  });

	  var stopButton = document.getElementById("stop-button");
	  stopButton.addEventListener("click", function() {
	    player.stopVideo();
	  });
	  
	}

	// Inject YouTube API script
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);