🎵 Music Player

A simple and modern Music Player Web Application built using HTML, CSS, and JavaScript.  
The application allows users to play songs, pause them, move between songs, control volume, and track the current playback position.

 🚀 Features

- ▶️ Play and pause songs
- ⏮️ Previous song
- ⏭️ Next song
- 🎵 Display song title and artist
- ⏱️ Display current time and song duration
- 📊 Music progress bar
- 🔊 Volume control
- 📋 Playlist
- 🔄 Automatically play the next song when the current song ends
- 📱 Responsive and modern user interface
- ✨ Smooth hover effects and minimal slider design

 🛠️ Technologies Used

- HTML5 – Structure of the music player
- CSS3 – Styling, layout, responsiveness, and animations
- JavaScript – Audio controls and player functionality


 📁 Project Structure
Music-Player/
│
├── index.html
├── style.css
├── script.js
│
└── songs/
    ├── song1.mp3
    ├── song2.mp3
    └── song3.mp3
    🎧 How It Works

The music player uses JavaScript's Audio object to control audio playback.

Play / Pause

The play button starts or pauses the currently selected song.

Next / Previous

The next and previous buttons change the current song from the playlist.

Progress Bar

The progress bar shows the current position of the song and allows the user to move to a different part of the song.

Volume Control

The volume slider allows users to increase or decrease the audio volume.

Playlist

Songs are stored in a JavaScript array containing information such as:

Song title
Artist name
Audio file path
▶️ How to Run
Download or clone this repository.
Open the project folder in Visual Studio Code.
Add your audio files inside the songs folder.
Make sure the file names match the paths used in script.js.
Open index.html in your browser.

For example:

const songs = [
    {
        title: "Song One",
        artist: "Artist One",
        src: "songs/song1.mp3"
    }
];
💡 Future Improvements
Add album/cover images
Add shuffle functionality
Add repeat functionality
Add mute/unmute button
Add song search
Add more playlist categories
Store the user's playlist using Local Storage
📌 Project Purpose

This project was developed to practice HTML, CSS, and JavaScript, especially JavaScript DOM manipulation, event handling, and HTML5 audio controls.

👩‍💻 Author

Anjani Alaveni

GitHub:
https://github.com/anjani-alaveni

📄 License

This project is created for learning and educational purposes.