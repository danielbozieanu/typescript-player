/// <reference path="typings.d.ts" />

var playlist = new Playlist();

var song1 = new Song("Here Come the Sun", "The Beatles", "2:54");
var song2 = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playlist.add(song1);
playlist.add(song2);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");

playButton.onclick = function(){
    playlist.play();
    playlist.renderInElement(playlistElement);
    console.log('play');
};

var nextButton = document.getElementById("next");

nextButton.onclick = function(){
    playlist.next();
    playlist.renderInElement(playlistElement);
}