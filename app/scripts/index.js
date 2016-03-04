console.log("Hello World!");
var $ = require('jquery');




//**************************************************************************
//PLAYER AND ENEMY
//**************************************************************************

$(window).load(function(){ //trying to implement a load function that would hide my game's core from the user.
  $('main').removeClass('.game-start'); //Then have an event listener bellow to show the game.
});

function Characters(){ //constructor in order to create doDamage method

}
Characters.prototype.doDamage = function (enemy){ //pass who you are doing damage to.
  enemy.health -= this.attack;

  $('#player-health').html(warriorClass.health); //Printing player health values to our page
  $('#enemy-health').html(worgen.health); //Pringing Enemy health values to our page
}


function PlayerCharacter(){ //Player defualt attacks and hit points
  this.health = 50;
  this.attack = 8;
  this.items = ['backpack', 'flask of wine', 'map']; //default player items
  console.log('The player did damange!');
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


//I think that using promises to get the button to unbind after the player attack and then to...
//rebind after the computer attacks is the way to go with this attack function method. Read up on promises.

//removed button from my html so this is currently pointless.
// $('.start-btn').click(function(){
//   $('main').addClass('.game-start')
// });

//Can I wrap the click event with a .when() to then pass a .then() that unbinds the button after the first click.
//.then() again in order to rebind the button after the enemy does their damage method?

$('#user-attack').on('click',function(){
  $(document).trigger('attack:start');
  //if statement to be used for Hit Chance.
  warriorClass.doDamage(worgen, worgen.doDamage);
  setTimeout(function(){worgen.doDamage(warriorClass)}, 2000);

  console.log('enemy was hit:', worgen.health);
});

//Do I use .off() method ?



//**************************************************************************
//VIEWS
//**************************************************************************


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





function bindAttack(){
  $('#user-attack').bind('character-attack', warriorClass.doDamage);
}

function unbindAttack(){
  $('#user-attack').unbind('character-attack');
}


//**************************************************************************
//ATTACK FUNCTIONS
//**************************************************************************
