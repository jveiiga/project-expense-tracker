//usando case switch e método substring

function defineSuit(card) {

  let naipe = card.substr(-1)

  switch (naipe) {
    case "♣":
      return "clubs";
      break;

    case "♦":
      return "diamonds";
      break;

    case "♥":
      return "hearts";
      break;

    case "♠":
      return "spades";
      break;
  }
}
console.log(defineSuit("3♣"), "clubs");
console.log(defineSuit("Q♠"), "spades");
console.log(defineSuit("9♦"), "diamonds");
console.log(defineSuit("J♥"), "hearts");

//usando if else e método substring

function defineSuits(card) {

    naipe = card.substr(-1)
    
    if( naipe === "♣" ) {

        return 'clubs'

    }else if( naipe === "♦" ) {

        return 'diamonds'

    }else if( naipe === "♥" ) {

        return 'hearts'

    }else {

        return 'spades'

    }   
}
console.log(defineSuits("3♣"), "clubs")
console.log(defineSuits("Q♠"), "spades");
console.log(defineSuits("9♦"), "diamonds");
console.log(defineSuits("J♥"), "hearts");