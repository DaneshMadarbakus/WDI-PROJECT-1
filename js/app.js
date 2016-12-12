console.log('working');

var ConorGame = ConorGame || {};
ConorGame.ConorsLife = 100;
ConorGame.ComputerLife = 100;
ConorGame.DanaWhitePic = $('<img>', {class: 'mole', src: 'file:///Users/DaneshMadarbakus/development/WDI_PROJECT_1/images/dana_white.jpg'});
ConorGame.ArrianyPic = $('<img>', {class: 'mole', src: 'file:///Users/DaneshMadarbakus/development/WDI_PROJECT_1/images/arianny_celeste.png'});
ConorGame.EddieAlvarezPic = $('<img>', {class: 'mole', src: 'file:///Users/DaneshMadarbakus/development/WDI_PROJECT_1/images/eddie_alvarez.png'});


// set up the main board via html
// Show the modul page (start game)
// click button to start game (play sound byte)
// Show next modulus page (round one) (play sound byte)
// Show main board
// Start countdown timer
// score pointer
// Faces shows up (with timer)
// click fighter face (punch sound) (score goes up) click ring girl face (buzzer) (score goes down)
// timer up
// show next modulus page (display score) (play sound byte) time then...
// show next modulus (round 2) (sound byte) time then...
// main board (same thing but with a different fighter)
// score modulus
// display final score  (sound byte) (play again button - either reset )


// if neither player has finished life then loop back to mole appearing otherwise finish game



//Determine if there is a winner and set loop
ConorGame.determineWinner = function(){
  if(ConorGame.ConorsLife === 0) {
    alert('You lose!');
    ConorGame.startGame();
    ConorGame.ConorsLife = 100;
    ConorGame.ComputerLife = 100;
    $('#conorsHealth').text(ConorGame.ConorsLife);
    $('#opponentsHealth').text(ConorGame.ComputerLife);
  } else if (ConorGame.ComputerLife === 0) {
    alert('You win!');
    ConorGame.startGame();
    ConorGame.ConorsLife = 100;
    ConorGame.ComputerLife = 100;
    $('#conorsHealth').text(ConorGame.ConorsLife);
    $('#opponentsHealth').text(ConorGame.ComputerLife);
  } else {
    setInterval(ConorGame.pickMole(), 3000);
  }
};


// Remove mole if not clicked and adjust life if neccessary
ConorGame.removeMole = function() {
  if (ConorGame.$img === ConorGame.EddieAlvarezPic) {
    $('.mole').delay(1000).fadeOut(100, function(){
      $(this).remove();
      ConorGame.ConorsLife = ConorGame.ConorsLife - 10;
      $('#conorsHealth').text(ConorGame.ConorsLife);
      console.log('Conor', ConorGame.ConorsLife);
    });
  } else if (ConorGame.$img === ConorGame.ArrianyPic || ConorGame.$img ===  ConorGame.DanaWhitePic) {
    $('.mole').delay(1000).fadeOut(100, function(){
      $(this).remove();
      console.log('Computer', ConorGame.ComputerLife);
      console.log('Conor', ConorGame.ConorsLife);
    });
  }
  ConorGame.determineWinner();
};


// adds a clicker to the popped up mole
ConorGame.addClickerToMole = function(){
  if (ConorGame.$img === ConorGame.EddieAlvarezPic) {
    ConorGame.$img.on('click', function(){
      ConorGame.$img.remove();
      ConorGame.ComputerLife = ConorGame.ComputerLife - 10;
      $('#opponentsHealth').text(ConorGame.ComputerLife);
      console.log('computer', ConorGame.ComputerLife);
    });

  } else if (ConorGame.$img === ConorGame.ArrianyPic || ConorGame.$img ===  ConorGame.DanaWhitePic) {
    ConorGame.$img.on('click', function(){
      ConorGame.$img.remove();
      ConorGame.ConorsLife = ConorGame.ConorsLife - 10;
      $('#conorsHealth').text(ConorGame.ConorsLife);
      console.log('conor', ConorGame.ConorsLife);
    });
  }
  ConorGame.removeMole();
};

//mole appears
ConorGame.molesAppear = function(){
  console.log(this.$img);
  console.log(this.$pickMolePic);
  this.pickHole = Math.floor(Math.random() * 12);
  $('li').eq(this.pickHole).append(this.$img.hide().fadeIn(100));
  ConorGame.addClickerToMole();
};

// pick which mole to use (struggling to use 'this' properly)
ConorGame.pickMole = function(){
  console.log('pick mole');
  ConorGame.$pickMolePic = Math.random();
  if (ConorGame.$pickMolePic <= 0.2) {
    ConorGame.$img = ConorGame.DanaWhitePic;
  } else if (ConorGame.$pickMolePic <=0.4 && ConorGame.$pickMolePic > 0.2) {
    ConorGame.$img = ConorGame.ArrianyPic;
  } else {
    ConorGame.$img = ConorGame.EddieAlvarezPic;
  }
  ConorGame.molesAppear();
};

//start game
ConorGame.startGame = function(){
  console.log('start game');
  $('#startGameButton').on('click', function() {
    // var audio = new Audio('../surprisesurprise.mp3');
    // audio.play();
    ConorGame.pickMole.bind(this)();
  });
};


$(function() {
  ConorGame.startGame();
});
