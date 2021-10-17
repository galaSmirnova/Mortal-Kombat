const $arenas = document.querySelector('.arenas');

const player1 = {
  name: 'Sub Zero',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Kori Blade', 'Ice Daggers', 'Polar Axe'],
  attack: function () {
    console.log(player1.name + ' Fite...');
  }
};

const player2 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Sword'],
  attack: function () {
    console.log(player2.name + ' Fite...');
  }
};

function createPlayer(player, obj) {
  const $player = document.createElement('div');
  $player.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $progressbar.appendChild($life);
  $life.style.width = String(obj.hp) + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $progressbar.appendChild($name);
  $name.innerText = obj.name;

  const $img = document.createElement('img');
  $character.appendChild($img);
  $img.src = obj.img;

<<<<<<< Updated upstream
  $arenas.appendChild($player);
}
createPlayer('player1', player1);
createPlayer('player2', player2);
=======
  return $player;
}

function random() {
  return Math.ceil(Math.random() * 10);
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');

  player.hp -= random();
  console.log(player.hp);
  $playerLife.style.width = player.hp + '%';
  if (player.hp <= 0) {
    $playerLife.style.width = 0 + '%';
    $randomBtn.disabled = true;
  }
  return player.hp;
}

function playerWins(name) {
  const $winsTitle = createElement('div', 'loseTitle');
  $winsTitle.innerText = name + ' wins';
  return $winsTitle;
}

$randomBtn.addEventListener('click', function () {
  console.log('Ты нажал на кнопку');

  let player1HP = changeHP(player1);
  let player2HP = changeHP(player2);

  if (player1HP <= 0) {
    $arenas.appendChild(playerWins(player2.name));
  } else if (player2HP <= 0) {
    $arenas.appendChild(playerWins(player1.name));
  }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
>>>>>>> Stashed changes
