console.log('activating javascript')


function play() {
    var audio = new Audio('audio_file.mp3');
    audio.loop = false;
    audio.play(); 
}


// from select screen choose the pokemons
var pokemons_el = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemons_el)

var i=0
while (i<pokemons_el.length) {
    pokemons_el[i].onclick = function() {
        var pokemon_name = this.querySelector('.title').textContent
        console.log('i choose '+ pokemon_name)
    }
    i++
}
