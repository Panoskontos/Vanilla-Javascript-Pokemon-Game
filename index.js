console.log('activating javascript')


function play() {
    var audio = new Audio('audio_file.mp3');
    audio.loop = false;
    audio.play(); 
}

var game_state = {
    pokemon: '',
    rival: ''
}

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

        console.log(game_state)
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

cpuPick()
