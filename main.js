/*- http://reactmarathon-api.herokuapp.com/assets/scorpion.gif
- http://reactmarathon-api.herokuapp.com/assets/kitana.gif
- http://reactmarathon-api.herokuapp.com/assets/liukang.gif
- http://reactmarathon-api.herokuapp.com/assets/sonya.gif
- http://reactmarathon-api.herokuapp.com/assets/subzero.gif */

const arena = document.querySelector('.arenas');



const player1 = { name: 'Scorpion',  
                  hp: 100,
                  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
                  weapon: ['kick','block', 'huk'],
                  attack: function() {
                    console.log(this.name + 'fight(player1.name)' + 'Fight...');
                },
}

const player2 = { name: 'Kitana',  
                  hp: 100, 
                  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
                  weapon: ['kick','block', 'hit'],
                  attack: function() {
                      console.log(this.name + 'fight(player2.name)' + 'Fight...');
                  },

}
//player2.attack()
const createPlayer = (playerObj, playerclass) => { 
    
   const player = createElement('div', playerclass);
   console.log(player)
   player.innerHTML = `
                     <div class="progressbar">
                        <div class="life" style ="width: ${playerObj.hp}%"></div>
                        <div class="name">${playerObj.name}</div>
                    </div>
                    <div class="character">
                        <img src="${playerObj.img}" />
                     </div>
                    `
    //console.log(player)
    arena.appendChild(player);
    return player; 
               
}



const createElement = (nameTag, classTag) => {
    const tag = document.createElement(nameTag);
    tag.classList.add(classTag);
    return tag;
  
}

createPlayer(player1, 'player1');
createPlayer(player2, 'player2');