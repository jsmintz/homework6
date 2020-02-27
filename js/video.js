var video;
var volume;
var muteButton;



function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector('#volume');
	console.log(volume)
	volume.innerHTML = video.volume * 100 + '%'

} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= .8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if ((video.currentTime + 60) < video.duration){
		video.currentTime += 60;
		video.play();
		console.log("Current location is "+ video.currentTime);
	}
	else {
		video.currentTime = 0;
		video.playbackRate = 1;
		video.play()
		console.log("Current location is "+ video.currentTime);
	}
} 

function mute() { 
	
	if (video.muted){
		video.muted = false;
		console.log('Changing to Unmuted');
		muteButton.innerHTML = 'Mute';
	}
	else {
		video.muted = true;
		console.log('Changing to Muted')
		muteButton = document.querySelector('#mute');
		muteButton.innerHTML = 'Unmute';
	}
}

function changeVolume() {
	let slider = document.querySelector('#volumeSlider');
	console.log(slider.value);
	video.volume = slider.value / 100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = slider.value + '%';
}
       

function gray() { 
	video.className = 'grayscale';
	console.log("In grayscale");
}

function color() {
	video.className = '';
	console.log("In color") 
}
