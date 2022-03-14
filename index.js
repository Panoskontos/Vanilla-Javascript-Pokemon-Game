console.log('activating javascript')


function play() {
    var audio = new Audio('audio_file.mp3');
    audio.loop = false;
    audio.play(); 
}


// from select screen choose the pokemons
var pokemons_el = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemons_el)