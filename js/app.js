
// Show the modul page (start game)
// click button to start game (play sound byte)
// Show next modulus page (round one) (play sound byte)
// Show main board
// click fighter face (punch sound) (score goes up) click ring girl face (buzzer) (score goes down)
// show next modul page (Give brief summary of real fight) (play sound byte) time then...
// show next modal (round 2 vs jose or nate or whoever) (sound byte) time then...
// main board (same thing but with a different fighter)
// summary modal
// Modal (You are the CHAMP CHAMP)  (sound byte) (play again button - either reset)


// if neither player has finished life then loop back to mole appearing otherwise finish game


// z-index of 1 css modal create div modal html onlick call div .hide check jquery grid, another div to make it blurred
// curl -O url
// python -m SimpleHTTPServer // cmnd+c to switch off

// add another modal to signal the end of the game (either win or lose)
// add function to switch the image
// continue to style the page




console.log('working');

var ConorGame = ConorGame || {};

//Determine if there is a winner and set loop
ConorGame.determineWinner = function(){
  var self = this;
  if(ConorGame.ConorsLife === 0) {
    ConorGame.playing = false;
    $('.modal3').removeClass('hide');
    $('.greyScreen').removeClass('hide');
    new Audio('../audio/cocky.mp3').play();
    ConorGame.ConorsLife = 100;
    ConorGame.ComputerLife = 100;
    $('#conorsHealth').text(ConorGame.ConorsLife);
    $('#opponentsHealth').text(ConorGame.ComputerLife);
  } else if (ConorGame.ComputerLife === 0) {
    ConorGame.playing = false;
    $('.modal2').removeClass('hide');
    $('.greyScreen').removeClass('hide');
    new Audio('../audio/irelandbaby.mp3').play();
    ConorGame.ConorsLife = 100;
    ConorGame.ComputerLife = 100;
    $('#conorsHealth').text(ConorGame.ConorsLife);
    $('#opponentsHealth').text(ConorGame.ComputerLife);
  } else if (ConorGame.playing) {
    console.log('vijdivbiuc', ConorGame.playing);
    setTimeout(ConorGame.pickMole.bind(self), 2000);
  }
};

// Adjust connor's pic depending on how much life he has
ConorGame.adjustPics = function(){
  if (this.ConorsLife >= 80){
    $('#conorHealthImg').attr('src', this.conorPic1);
  } else if (this.ConorsLife >= 50 && this.ConorsLife < 80) {
    $('#conorHealthImg').attr('src', this.conorPic2);
  } else if (this.ConorsLife >= 30 && this.ConorsLife < 50) {
    $('#conorHealthImg').attr('src', this.conorPic3);
  } else {
    $('#conorHealthImg').attr('src', this.conorPic4);
  }
};

// Remove mole if not clicked and adjust life if neccessary
ConorGame.removeMole = function() {
  if (this.$img === this.EddieAlvarezPic) {
    $('.mole').delay(1000).fadeOut(50, function(){
      new Audio('../audio/buzzer.mp3').play();
      new Audio('../audio/fookoff.mp3').play();
      $('.mole').remove();
      ConorGame.ConorsLife = ConorGame.ConorsLife - 10;
      $('#conorsHealth').text(ConorGame.ConorsLife);
      // console.log('Conor', ConorGame.ConorsLife);
    });
  } else if (this.$img === this.ArrianyPic || this.$img ===  this.DanaWhitePic) {
    $('.mole').delay(1000).fadeOut(50, function(){
      $('.mole').remove();
      // console.log('Computer', this.ComputerLife);
      // console.log('Conor', this.ConorsLife);
    });
  }
  ConorGame.adjustPics();
};

// adds a clicker to the popped up mole
ConorGame.addClickerToMole = function(){
  if (this.$img === this.EddieAlvarezPic) {
    this.$img.one('click', function(){
      ConorGame.$img.remove();
      (new Audio('../audio/punch.mp3')).play();
      (new Audio(ConorGame.conorQuoteArray[Math.floor(Math.random() * ConorGame.conorQuoteArray.length)])).play();
      ConorGame.ComputerLife = ConorGame.ComputerLife - 10;
      $('#opponentsHealth').text(ConorGame.ComputerLife);
      // console.log('computer', ConorGame.ComputerLife);
    });

  } else if (this.$img === this.ArrianyPic || this.$img ===  this.DanaWhitePic) {
    this.$img.one('click', function(){
      ConorGame.$img.remove();
      (new Audio('../audio/buzzer.mp3')).play();
      (new Audio('../audio/fookoff.mp3')).play();
      ConorGame.ConorsLife = ConorGame.ConorsLife - 10;
      $('#conorsHealth').text(ConorGame.ConorsLife);
      // console.log('conor', ConorGame.ConorsLife);
    });
  }
  ConorGame.removeMole();
};

//mole appears
ConorGame.molesAppear = function(){
  // console.log(this.$img);
  // console.log(this.$pickMolePic);
  this.pickHole = Math.floor(Math.random() * 12);
  $('li').eq(this.pickHole).append(this.$img.hide().fadeIn(100));
  this.addClickerToMole();
};

// pick which mole to use (struggling to use 'this' properly)
ConorGame.pickMole = function(){
  this.determineWinner();
  if (this.playing) {
    this.$pickMolePic = Math.random();
    if (this.$pickMolePic <= 0.2) {
      this.$img = this.DanaWhitePic;
    } else if (this.$pickMolePic <=0.4 && this.$pickMolePic > 0.2) {
      this.$img = this.ArrianyPic;
    } else {
      this.$img = this.EddieAlvarezPic;
    }
    this.molesAppear();
  }
};

ConorGame.setupTwo = function (){
  this.playing = true;
  new Audio('../audio/weallgotowar.mp3').play();
  $('.modal, .modal2, .modal3').addClass('hide');
  $('.greyScreen').addClass('hide');
  $('#conorHealthImg').attr('src', this.conorPic1);
  this.pickMole();
};

//start game
ConorGame.setup = function(){
  this.playing = true;
  this.conorQuoteArray = ['../audio/snake.mp3', '../audio/whothefuckisthatguy.mp3', '../audio/lefthand.mp3', '../audio/bumlife.mp3', '../audio/liltwerp.mp3', '../audio/youlldofookinnuttin.mp3'];
  this.conorPic1 = ('../images/conormcgregor5.jpg');
  this.conorPic2 = '../images/conormcgregor4.jpg';
  this.conorPic3 = '../images/conormcgregorb1.jpg';
  this.conorPic4 = '../images/conormcgregorb2.jpg';
  this.ConorsLife = 100;
  this.ComputerLife = 100;
  this.DanaWhitePic = $('<img>', {class: 'mole', src: '../images/dana_white.jpg'});
  this.ArrianyPic = $('<img>', {class: 'mole', src: '../images/arianny_celeste.png'});
  this.EddieAlvarezPic = $('<img>', {class: 'mole', src: '../images/eddie_alvarez.png'});
  (new Audio('../audio/talklikeitalk.mp3')).play();
  $('.startGameButton').on('click', this.setupTwo.bind(this));
};

$(ConorGame.setup.bind(ConorGame));
