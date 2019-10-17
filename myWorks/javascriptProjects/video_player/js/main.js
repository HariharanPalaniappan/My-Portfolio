var fullScreen = false;
var video = document.getElementById("live");
var play =  document.getElementById("play");
var pause =  document.getElementById("pause");
var mute = document.getElementById("mute");
var dur_time = document.getElementById("dur");
var cur_time = document.getElementById("cur");
var volume_up = document.getElementById("volume_up");
var volume_down = document.getElementById("volume_down");
var progress_bar = document.getElementById("progress_bar");
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var controls = document.getElementById("controls");
var expand = document.getElementById("expand");
// play
function playVideo(){
	video.play();
	play.style.display="none";
	pause.style.display="block";
}
function videoPlay(){
	if ((video.paused == false)) {
		video.pause();
		pause.style.display="none";
		play.style.display="block";
	}
	else{
		video.play();
		play.style.display="none";
		pause.style.display="block";
	}
}
// pause
function pauseVideo(){
	video.pause();
	pause.style.display="none";
	play.style.display="block";
}
// // mute
// function mut(){
// 	video.muted = true;
// 	unmute.style.display="none";
// 	mute.style.display="block";
// }
// // unmute
// function unmut(){
// 	video.muted = false;
// 	mute.style.display="none";
// 	unmute.style.display="block";
// }
// vloume_up
function volumeUp(){
	if(video.volume <= 0.9){
		video.volume += 0.1;
		// mute.style.display="none";
		// unmute.style.display="block";
		mute.style.display = "none"
		volume_down.style.display = "block"
	} 
	else{
		// volume_up.style.color = "rgb(30, 176, 37)"
		volume_up.classList.add("max_vol");
	}
}
// volume down
function volumeDown(){
	if(video.volume >= .1 && video.volume <= 1){
		video.volume -= 0.1;
		// volume_up.style.color = "rgb(238, 238, 238)"
		volume_up.classList.remove("max_vol");
	}  
	else{
		// unmute.style.display="none";
		// mute.style.display="block";
		volume_down.style.display = "none"
		mute.style.display = "block"
	}
}
// seekbar
function seekbar(){
	var progress_value = video.currentTime *(100/video.duration);
	progress_bar.value = progress_value;
	var color= 'linear-gradient(90deg,rgb(171,205,239)'+progress_value+'%,rgb(238,238,238)'+progress_value+'%)';
	progress_bar.style.background=color;
// duration
var durationTime = video.duration;
var currentTime = video.currentTime;
// current time
var currentMin	= Math.floor(currentTime / 60);
var currentSec = Math.floor(currentTime - currentMin * 60);
if(currentMin < 10){
	currentMin = "0"+ currentMin;
}
if(currentSec < 10){
	currentSec = "0"+ currentSec;
}
cur_time.innerHTML = currentMin+":"+currentSec;

// over all duration
var durMin	= Math.floor(durationTime / 60);
var durSec = Math.floor(durationTime - durMin * 60);
if(durMin < 10){
	durMin = "0"+ durMin;
}
if(durSec < 10){
	durSec = "0"+ durSec;
}
var reminMin = durMin -currentMin;
var reminSec = durSec -currentSec;
if(reminMin < 10){
	reminMin = "0"+ reminMin;
}
if(reminSec < 10){
	reminSec = "0"+ reminSec;
}
dur_time.innerHTML =  "-"+reminMin+":"+reminSec;
if(durationTime == currentTime){
	play.style.display="block";
	pause.style.display="none";
	var progress_value = 0;
	progress_bar.value = progress_value;
	var color= 'linear-gradient(90deg,rgb(171,205,239)'+progress_value+'%,rgb(238,238,238)'+progress_value+'%)';
	progress_bar.style.background=color;
	cur_time.innerHTML = reminMin+":"+reminSec;
	dur_time.innerHTML =  "-"+ currentMin+":"+currentSec;
}
}
//seekbar move
function seekMove(){
	var seekTo = video.duration*(progress_bar.value / 100);
	video.currentTime =seekTo;
}
// fast forwards
function forwardFast(){
	video.currentTime += 5;
}
// fast backward
function backwardFast(){
	video.currentTime -= 5;
}
// fade in fade out
function fadeIn(){
	controls.style.opacity= 1;
}
function fadeOut(){
	controls.style.opacity=0;
}
// Expand video
function expand_video(){
			fullScreen = true;
			openFullscreen();
	// video.requestFullscreen();
}
// key press event
function keyPlay(key){
	if(key.keyCode == "32")
		videoPlay();
}
function keyForward(key){
	if(key.keyCode == "39")
		forwardFast();
}
function keyBackward(key){
	if(key.keyCode == "37")
		backwardFast();
}
function keyMute(key){
	if(key.keyCode == "77"){
		if(video.muted == false){
			video.muted =true;
			volume_down.style.display = "none"
			mute.style.display = "block"
		}
		else{
			video.muted =false;
			mute.style.display = "none"
			volume_down.style.display = "block"
		}
	}
}
function keyVolumeUp(key){
	if(key.keyCode == "38"){
		volumeUp();
	}
}
function keyVolumeDown(key){
	if(key.keyCode == "40"){
		volumeDown();
	}
}
function keyFullScreen(key){
	if(key.keyCode == "70"){
		if(fullScreen == false){
			openFullscreen();
			// video.requestFullscreen();
			fullScreen = true;
		}
		else{
			closeFullscreen();
			// document.webkitExitFullscreen();
			fullScreen = false;
		}
	}
}
// full screen enable disable
function openFullscreen() {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		elem.webkitRequestFullscreen();
	} else if (video.msRequestFullscreen) { /* IE/Edge */
		video.msRequestFullscreen();
	}
}

function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}
// Event Listener
video.addEventListener("click",videoPlay);
play.addEventListener("click",playVideo);
pause.addEventListener("click",pauseVideo);
volume_up.addEventListener("click",volumeUp);
volume_down.addEventListener("click",volumeDown);
progress_bar.addEventListener('change',seekMove);
video.addEventListener('timeupdate',seekbar);
forward.addEventListener("click",forwardFast)
backward.addEventListener("click",backwardFast)
video.addEventListener('mouseover',fadeIn);
video.addEventListener('mouseout',fadeOut);
controls.addEventListener('mouseover',fadeIn);
controls.addEventListener('mouseout',fadeOut);
expand.addEventListener('click',expand_video);
window.addEventListener('keydown',keyPlay);
window.addEventListener('keydown',keyForward);
window.addEventListener('keydown',keyBackward);
window.addEventListener('keydown',keyMute);
window.addEventListener('keydown',keyFullScreen);
window.addEventListener('keydown',keyVolumeUp);
window.addEventListener('keydown',keyVolumeDown);

































