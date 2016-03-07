console.log("Hello World!");
var $ = require('jquery');
var jqueryUi = require('jquery-ui');


var attackStart = false;
var 

//**************************************************************************
//PLAYER AND ENEMY
//**************************************************************************

// $(window).load(function(){ //trying to implement a load function that would hide my game's core from the user.
//   $('main').removeClass('.game-start'); //Then have an event listener bellow to show the game.
// });

function Characters(){ //constructor in order to create doDamage method

}
Characters.prototype.doDamage = function (enemy){ //pass who you are doing damage to.
  enemy.health -= this.attack;

  $('#player-health').html(warriorClass.health); //Printing player health values to our page
  $('#enemy-health').html(worgen.health); //Printing Enemy health values to our page
}


function PlayerCharacter(){ //Player defualt attacks and hit points
  this.health = 50;
  this.attack = 8;
  this.items = ['backpack', 'flask of wine', 'map']; //default player items
}
PlayerCharacter.prototype = new Characters(); //The link to doDamage

var warriorClass = new PlayerCharacter(); //New player class
warriorClass.weapon = 'broadsword'; //player class weapon
console.log(warriorClass.health);

function EnemyCharacter(){ //Enemy default attack and hit points
  this.health = 70;
  this.attack = 6;
  this.items = ['axe', 50, 'gold']; //lootable items
}
EnemyCharacter.prototype = new Characters(); //The link to doDamage


var worgen = new EnemyCharacter(); //New enemy type
console.log(worgen.health);

$('#user-attack').on('click',function(){
  if(attackStart){
    return;
  }

  attackStart = true;

$(document).trigger('attack:start');
  warriorClass.doDamage(worgen);
  $('.warrior').effect('bounce', 'slow');

  setTimeout(function(){
    worgen.doDamage(warriorClass)
    $('.warlock').effect('shake', 'slow');
    attackStart = false;
  }, 2000);
});
console.log(damageCalc);

//Thinking of maybe writting a seperate function for the timeout


//**************************************************************************
//VIEWS
//**************************************************************************


$('#player-health').html(warriorClass.health); //Printing player health values to our page
$('#enemy-health').html(worgen.health);

 //Printing Enemy health values to our page


// function PostHealth(){
//   $('#player-health').append('<div class="user-health">');
// }
//
// PostHealth.prototype.showHealth = function(hitPoints){
//
// }





//**************************************************************************
//TURNS
//**************************************************************************

//bind the attack function

//I need my attack function to loop my turn?








//**************************************************************************
//ATTACK FUNCTIONS
//**************************************************************************
