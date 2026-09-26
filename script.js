
// ==============================
// PLAYLIST
// ==============================

const songs = [

 {
  title: "Butterfly",
  artist: "Sublashini",
  src: "songs/Butterfly.mp3"
 },

 {
  title: "Chiru Chiru",
  artist: "Sagar Desai",
  src: "songs/chiru chiru.mp3"
 },

 {
  title: "Endhyya Sammi",
  artist: "Shweta Mohan,Ajay-Atul",
  src: "songs/Endhyya_Sammi.mp3"
 },

 {
  title: "Priyasakhi",
  artist: "K.S. Harisankar and Hesham Abdul Wahab",
  src: "songs/priyasakhi.mp3"
 },

 {
  title: "Sancharame",
  artist: "Hesham Abdul Wahab,Gorati Venkanna",
  src: "songs/sancharame.mp3"
 }

];


// ==============================
// VARIABLES
// ==============================

let currentSong = 0;

const audio = new Audio();

const songTitle = document.getElementById("song-title");

const artist = document.getElementById("artist");

const playButton = document.getElementById("play");

const previousButton = document.getElementById("previous");

const nextButton = document.getElementById("next");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const playlist = document.getElementById("playlist");


// ==============================
// LOAD SONG
// ==============================

function loadSong(index) {

 const song = songs[index];

 songTitle.textContent = song.title;

 artist.textContent = song.artist;

 audio.src = song.src;

 audio.load();

 updatePlaylist();

}


// ==============================
// PLAY SONG
// ==============================

function playSong() {

 audio.play();

 playButton.textContent = "⏸";

}


// ==============================
// PAUSE SONG
// ==============================

function pauseSong() {

 audio.pause();

 playButton.textContent = "▶";

}


// ==============================
// PLAY / PAUSE BUTTON
// ==============================

playButton.addEventListener("click", function () {

 if (audio.paused) {

  playSong();

 } else {

  pauseSong();

 }

});


// ==============================
// NEXT SONG
// ==============================

nextButton.addEventListener("click", function () {

 currentSong++;

 if (currentSong >= songs.length) {

  currentSong = 0;

 }

 loadSong(currentSong);

 playSong();

});


// ==============================
// PREVIOUS SONG
// ==============================

previousButton.addEventListener("click", function () {

 currentSong--;

 if (currentSong < 0) {

  currentSong = songs.length - 1;

 }

 loadSong(currentSong);

 playSong();

});


// ==============================
// UPDATE PROGRESS BAR
// ==============================

audio.addEventListener("timeupdate", function () {

 if (audio.duration) {

  progress.value =
   (audio.currentTime / audio.duration) * 100;

  currentTime.textContent =
   formatTime(audio.currentTime);

 }

});


// ==============================
// WHEN SONG LOADS
// ==============================

audio.addEventListener("loadedmetadata", function () {

 duration.textContent =
  formatTime(audio.duration);

});


// ==============================
// PROGRESS BAR CLICK
// ==============================

progress.addEventListener("input", function () {

 if (audio.duration) {

  audio.currentTime =
   (progress.value / 100) * audio.duration;

 }

});


// ==============================
// VOLUME CONTROL
// ==============================

volume.addEventListener("input", function () {

 audio.volume = volume.value;

});


// ==============================
// AUTOPLAY NEXT SONG
// ==============================

audio.addEventListener("ended", function () {

 currentSong++;

 if (currentSong >= songs.length) {

  currentSong = 0;

 }

 loadSong(currentSong);

 playSong();

});


// ==============================
// FORMAT TIME
// ==============================

function formatTime(time) {

 if (isNaN(time)) {

  return "0:00";

 }

 const minutes = Math.floor(time / 60);

 const seconds = Math.floor(time % 60);

 return minutes + ":" +
  (seconds < 10 ? "0" : "") +
  seconds;

}


// ==============================
// CREATE PLAYLIST
// ==============================

function createPlaylist() {

 playlist.innerHTML = "";

 songs.forEach(function (song, index) {

  const songElement =
   document.createElement("div");

  songElement.classList.add("playlist-song");

  songElement.textContent =
   song.title + " - " + song.artist;

  songElement.addEventListener("click", function () {

   currentSong = index;

   loadSong(currentSong);

   playSong();

  });

  playlist.appendChild(songElement);

 });

}


// ==============================
// UPDATE ACTIVE SONG
// ==============================

function updatePlaylist() {

 const playlistSongs =
  document.querySelectorAll(".playlist-song");

 playlistSongs.forEach(function (song, index) {

  if (index === currentSong) {

   song.classList.add("active");

  } else {

   song.classList.remove("active");

  }

 });

}


// ==============================
// INITIALIZE PLAYER
// ==============================

createPlaylist();

loadSong(currentSong);

audio.volume = 1;

