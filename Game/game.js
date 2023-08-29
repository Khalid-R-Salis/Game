let Player = {
  Name:"Per",
  Chips:145
  }
  let cards = [];
  let sum = 0;
  let isAlive = 0;
  let hasBlackJack = false;
  let message = document.querySelector("#msg");
  let msg = "";
  let cardsDisply = document.querySelector("#card");
  let playerLE = document.getElementById("amt");
  playerLE.textContent = `${Player.Name}: $${Player.Chips}`;

  function getRandomCards(){
    let randomnums = Math.floor(Math.random()*13) + 1;
    if(randomnums > 10){
      return 10
    } else if(randomnums === 1){
      return 11
    } else{
    return randomnums;
    }
  }
  
  function start(){
    let isAlive = true;
    let firstCard = getRandomCards();
    let secondCard = getRandomCards();
    let cards = [firstCard, secondCard];
    let sum = firstCard + secondCard;

    renderGame();
  }

function renderGame(){
  document.querySelector("#sum").textContent = "Sum: "+sum;
  document.querySelector("#card").textContent = "Cards:";
  for(i=0; i<=cards.length; i++){
    cardsDisply.textContent = "Cards:" +cards;
  }
  if(sum <= 20){
    msg = "Do you want to draw a new card?"
  } else if(sum === 21){
    msg = "You`ve got a blackjack"
    isAlive = true;
  } else{
     msg  = "You are out of the game"
    isAlive = false;
  }
message.textContent = msg;
}
function newG() {
    let card = getRandomCards();
    sum+=card;
    cards.push(card);
    console.log(cards)
    renderGame();
}
