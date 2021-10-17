const $arenas = document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Sub Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Kori Blade', 'Ice Daggers', 'Polar Axe'],
  attack: function () {
    console.log(player1.name + ' Fite...');
  }
};

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Sword'],
  attack: function () {
    console.log(player2.name + ' Fite...');
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function random() {
  return Math.ceil(Math.random() * 10);
}

function createPlayer(playerObj) {
  const $player = createElement('div', 'player' + playerObj.player);
  console.log($player);

  const $progressbar = createElement('div', 'progressbar');
  $player.appendChild($progressbar);

  const $character = createElement('div', 'character');
  $player.appendChild($character);

  const $life = createElement('div', 'life');
  $progressbar.appendChild($life);
  $life.style.width = playerObj.hp + '%';

  const $name = createElement('div', 'name');
  $progressbar.appendChild($name);
  $name.innerText = playerObj.name;

  const $img = createElement('img');
  $character.appendChild($img);
  $img.src = playerObj.img;

  return $player;
}
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

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