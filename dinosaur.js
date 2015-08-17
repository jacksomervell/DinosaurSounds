// var trexPlayer = trexPlayer || {}

// trexPlayer.setup = function() {
//   this.playTrex = document.getElementsByClass('trexImage')[0];
//   this.playTrex.addEventListener("click",trexPlayer.playClickHandler.bind(this)) 
// }
// trexPlayer.getSound = function() {
//   if (!this.currentSound) {
//     this.currentSound = soundManager.createSound({
//       id: 'trex', 
//       url: '/sounds/trex.mp3'
//     });
     
//   }
//   return this.currentSound;
// }

soundManager.setup({
  url: '/swf/',
  flashVersion: 9, 
  onready: function() {
    var trexPlay = soundManager.createSound({
      id: 'trex',
      url: 'sounds/trex.mp3'
    });
    // trexPlay.play();
  },

});

var trexPlayer = document.getElementsByClassName('trexImage');
var trexPlayer = trexPlayer[0] 

 trexPlayer.addEventListener("click", function(){
  var trexPlay = soundManager.createSound({
      id: 'trex',
      url: 'sounds/trex.mp3'
    });
  trexPlay.play();
 });

var tricerPlayer = document.getElementsByClassName('triceratopsImage');
var tricerPlayer = tricerPlayer[0] 

 tricerPlayer.addEventListener("click", function(){
  var tricerPlay = soundManager.createSound({
      id: 'triceratops',
      url: 'sounds/triceratops.mp3'
    });
  tricerPlay.play();
 });

 var stegPlayer = document.getElementsByClassName('stegImage');
var stegPlayer = stegPlayer[0] 

 stegPlayer.addEventListener("click", function(){
  var stegPlay = soundManager.createSound({
      id: 'stegasaurus',
      url: 'sounds/steg.mp3'
    });
  stegPlay.play();
 });

 var apatPlayer = document.getElementsByClassName('apatImage');
var apatPlayer = apatPlayer[0] 

 apatPlayer.addEventListener("click", function(){
  var apatPlay = soundManager.createSound({
      id: 'apatosaurus',
      url: 'sounds/apat.mp3'
    });
  apatPlay.play();
 });

