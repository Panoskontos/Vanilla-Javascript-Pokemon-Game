console.log('activating javascript')

battle_screen = document.querySelector('#battle-screen')
console.log(battle_screen)

function play() {
    var audio = new Audio('audio_file.mp3');
    audio.loop = false;
    audio.play(); 
}

var game_state = {
    pokemon: '',
    rival: '',
    current_user_attack:'',
}

// This is the database
var pokemonDB = [
    {
        name:'charmander',
        type:'fire',
        hp:46,
        attack:52,
        defence:44,
        stamina:39,
        level:1,
        img:'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
    },
    {
        name:'bulbasaur',
        type:'grass',
        hp:45,
        attack:50,
        defence:48,
        stamina:50,
        level:1,
        img:'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
    },
    {
        name:'squirtle',
        type:'water',
        hp:54,
        attack:48,
        defence:56,
        stamina:65,
        level:1,
        img:'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
    },
]

// from select screen choose the pokemons
var pokemons_el = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemons_el)

var attack_button_el = document.querySelector('#battle-screen').querySelectorAll('.attack')
// console.log(attack_button_el)


// looping for choosing pokemon
var i=0
while (i<pokemons_el.length) {
    pokemons_el[i].onclick = function() {
        // we will use javascript data attributes
        var pokemon_name = this.dataset.pokemon
        console.log('i choose '+ pokemon_name)
        game_state.pokemon = pokemon_name
        cpuPick()
        battle_screen.classList.add('active')
        var user_player_img = document.querySelector('.player').getElementsByTagName('img')
        var rival_player_img = document.querySelector('.player2').getElementsByTagName('img')
        console.log(rival_player_img)
        // user_player_img[0].src = 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
        // iterate array if name is selected
        for (var i of pokemonDB){
            console.log(i)
            if (i.name == pokemon_name){
                user_player_img[0].src = i.img
            }

            if (game_state.rival == i.name){
                rival_player_img[0].src = i.img
            }
        }
        
        // console.log(game_state)
    }
    i++
}

// function that return random numbers between a space
function randomNumber(min,max){
    return Math.floor( Math.random()*(max-min) + min)
}

console.log(randomNumber(0,3))

// function that returns random pokemon
function cpuPick() {
    game_state.rival = pokemons_el[randomNumber(0,3)].dataset.pokemon
    console.log('rival is '+ game_state.rival)
}

// cpuPick()

// looping for choosing buttons 
var a =0
while (a<attack_button_el.length) {
    attack_button_el[a].onclick = function() {
        var attack_name = this.dataset.attack
        game_state.current_user_attack = attack_name
        console.log(game_state.current_user_attack)
        play(attack_name,'scissors')
    }
    a++
}

var play = function(userAttack,cpuAttack){
    
    switch(userAttack) {
        case 'rock':
            if (cpuAttack=='paper'){
                console.log('rock loses to paper')
            } else if (cpuAttack=="rock"){
                console.log('it is a tie')
            } else {
                console.log('rock beats scissors')
            }

            break;
        case 'paper':
            if (cpuAttack=='paper'){
                console.log('it is a tie')
            } else if (cpuAttack=="rock"){
                console.log('paper beats rock')
            } else {
                console.log('paper loses scissors')
            }
            break;
        case 'scissors':
            if (cpuAttack=='paper'){
                console.log('scissors beat paper')
            } else if (cpuAttack=="rock"){
                console.log('scissors loses to rock')
            } else {
                console.log('it is a tie')
            }
            break;
      }
}



// user choose attack 

// cpu health goes down

// cpu choose attack 

//user health goes down

// rock > scissors

// scissors > paper

// paper > rock
