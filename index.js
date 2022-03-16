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
    rival: ''
}


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
        console.log(user_player_img)
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
