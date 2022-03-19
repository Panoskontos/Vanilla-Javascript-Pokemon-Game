console.log('activating javascript')

battle_screen = document.querySelector('#battle-screen')
console.log(battle_screen)


function playmusic() {
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

var weapon = document.querySelector('#battle-screen').querySelector('.user-weapon')
var cpu_weapon =   document.querySelector('#battle-screen').querySelector('.cpu-weapon')
// looping for choosing pokemon
var i=0
while (i<pokemons_el.length) {
    pokemons_el[i].onclick = function() {
        // we will use javascript data attributes
        playmusic()
        var pokemon_name = this.dataset.pokemon
        console.log('i choose '+ pokemon_name)
        game_state.pokemon = pokemon_name
        cpuPick()
        // take different pokemons
        while (game_state.pokemon == game_state.rival){
            cpuPick()
        }

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
var previous = 0
while (a<attack_button_el.length) {
    attack_button_el[a].onclick = function() {
        var attack_name = this.dataset.attack
        game_state.current_user_attack = attack_name

        // add choice
        weapon.textContent = attack_name

        console.log(game_state.current_user_attack)
        play(attack_name,cpuItem())
        // this.classList.remove('userpicked')
    }
    a++
}

// 
var play = function(userAttack,cpuAttack){
    var player_health = document.querySelector('#battle-screen').querySelector('.player .inside')
    var cpu_health = document.querySelector('#battle-screen').querySelector('.cpu .inside')
    
   
    
    // calculate_health(player_health)

    switch(userAttack) {
        case 'rock':
            if (cpuAttack=='paper'){
                console.log('rock loses to paper')
                console.log('you lose')
                player_health.style.width = calculate_health(player_health)
            } else if (cpuAttack=="rock"){
                console.log('it is a tie')
            } else {
                console.log('rock beats scissors')
                console.log('you win')
                cpu_health.style.width = calculate_health(cpu_health)
            }

            break;
        case 'paper':
            if (cpuAttack=='paper'){
                console.log('it is a tie')
            } else if (cpuAttack=="rock"){
                console.log('paper beats rock')
                console.log('you win')
                cpu_health.style.width = calculate_health(cpu_health)
            } else {
                console.log('paper loses scissors')
                console.log('you lose')
                player_health.style.width = calculate_health(player_health)
            }
            break;
        case 'scissors':
            if (cpuAttack=='paper'){
                console.log('scissors beat paper')
                console.log('you win')
                cpu_health.style.width = calculate_health(cpu_health)

            } else if (cpuAttack=="rock"){
                console.log('scissors loses to rock')
                console.log('you lose')
                player_health.style.width = calculate_health(player_health)
            } else {
                console.log('it is a tie')
            }
            break;
      }

      if (parseInt(player_health.style.width) === 0) {
        declareWinner('CPU')
        setTimeout(function(){
            location.reload();
          }, 3000);
        // location.reload()
        
        }

        if (parseInt(cpu_health.style.width) === 0) {
            declareWinner('You')
            // location.reload()
            setTimeout(function(){
                location.reload();
              }, 3000);
            
        }
}

var items = ['rock','paper','scissors']

function cpuItem() {
    var item =  items[randomNumber(0,3)]
    cpu_weapon.textContent = item

    // find button
    return item
}

function calculate_health(userhealth){
    num = parseInt(userhealth.style.width)
    // minus the damage
    damage = 20
    num -= damage
    return num+'%'
}

var main_title = document.querySelector('#battle-screen').querySelector('.fight-btn')
function declareWinner(user){
    main_title.textContent =  user +' Win'
}


// player_health.style.width = '80%'
// user choose attack 

// cpu health goes down

// cpu choose attack 

//user health goes down

// rock > scissors

// scissors > paper

// paper > rock
