console.log("Hello World!");
var $ = require('jquery');




//**************************************************************************
//PLAYER AND ENEMY
//**************************************************************************

function Characters(){

}
Characters.prototype.doDamage = function (enemy){ //pass who you are doing damage to.
  enemy.health -= this.attack;
  console.log('you did damage');
}


function PlayerCharacter(){
  this.health = 50;
  this.attack = 8;
  this.items = ['backpack', 'flask of wine', 'map'];
}
PlayerCharacter.prototype = new Characters(); //The link to doDamage

var warriorClass = new PlayerCharacter();
warriorClass.weapon = 'broadsword';

console.log(warriorClass);

function EnemyCharacter(){
  this.health = 70;
  this.attack = 6;
  this.items = ['axe', 50, 'gold'];
}
EnemyCharacter.prototype = new Characters();

var worgen = new EnemyCharacter();

// var attackStart = start;

$('#user-attack').on('click',function(){
    $(document).trigger('attack:start');
    warriorClass.doDamage(worgen, worgen.doDamage);
    setTimeout(function(){worgen.doDamage(warriorClass)}, 2000);
});



//**************************************************************************
//TURNS
//**************************************************************************

//bind the attack function

//I need my attack function to loop my turn?

bindAttack();



function bindAttack(){
  $('#user-attack').bind('character-attack', warriorClass.doDamage);
}

function unbindAttack(){
  $('#user-attack').unbind('character-attack');
}


//**************************************************************************
//ATTACK FUNCTIONS
//**************************************************************************
