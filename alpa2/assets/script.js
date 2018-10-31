console.clear();

const cardValues = [
  "A","B","C","D","E","F","G","H","I","J","K","L","n","o","p","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","l","n","m","o","p","q","r","s","t","u","v","w","x","y","z"
];

let activeCards = [];
let score = 0;

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const increaseScore = () => {
 score = score + 1;
 const scoreElement = document.querySelector('.score');
 scoreElement.innerText = score;
}

const createCard = (value) => {
  const card = document.createElement('li');
  card.classList.add('card');
  card.dataset.value = value;
  card.addEventListener('click', handleClick, false);  

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  card.appendChild(cardContent);

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  cardContent.appendChild(cardFront);   
  
  const cardNumber = document.createElement('div');
  cardFront.classList.add('card-front');
  cardContent.appendChild(cardFront);     

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  cardBack.innerText = value;
  cardContent.appendChild(cardBack);      

  return card;
}

const handleClick = (e) => {
  const card = e.target.parentNode.parentNode;
  card.removeEventListener('click', handleClick, false);
  card.classList.add('active');
  activeCards.push(card);

  if( activeCards.length >= 2 ){
    compareCards();
  }
}

const compareCards = () => {
  increaseScore();
  
  if(activeCards[0].dataset.value === activeCards[1].dataset.value){
    activeCards.forEach( card => {
      card.classList.remove('active');
      card.classList.add('matched');
    });    
    activeCards = [];
  } else {
    const mismatchedCards = activeCards;
    activeCards = [];

    setTimeout( () => {
      mismatchedCards.forEach( card => {
        card.classList.remove('active');
        card.addEventListener('click', handleClick, false);
      });      
    }, 1000);
  }
}

const createCardElements = (array) => {
  const cardElements = [];

  array.forEach( cardValue => {
    const card = createCard(cardValue);
    cardElements.push(card);
    const cardMatch = createCard(cardValue);
    cardElements.push(cardMatch);
  });

  return cardElements
}

const addCardsToList = () => {
  const cardList = document.querySelector('.card-list');
  const cardElements = createCardElements(cardValues);  
  // cardElements.forEach( card => cardList.appendChild(card));
  shuffle(cardElements).forEach( card => cardList.appendChild(card));
}

addCardsToList();