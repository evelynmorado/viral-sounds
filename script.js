let song1 = new Audio("songs/1.mp3");
let song2 = new Audio("songs/2.mp3");
let song3 = new Audio("songs/3.mp3");
let song4 = new Audio("songs/4.mp3");
let song5 = new Audio("songs/5.mp3");
let song6 = new Audio("songs/6.mp3");
let song7 = new Audio("songs/7.mp3");
let song8 = new Audio("songs/8.mp3");

 function playSong(){
    song1.play();
    song1.addEventListener("ended", function(){
        song2.play();
    });
    song2.addEventListener("ended", function(){
        song3.play();
    });
    song3.addEventListener("ended", function(){
        song4.play();
    });
    song4.addEventListener("ended", function(){
        song5.play();
    });
    song5.addEventListener("ended", function(){
        song6.play();
    });
    song6.addEventListener("ended", function(){
        song7.play();
    });
    song7.addEventListener("ended", function(){
        song8.play();
    });
 }