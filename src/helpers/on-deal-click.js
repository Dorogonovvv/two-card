import { cards } from "../cards-js/cards";
import { handleGameResults } from "./handle-game-results";
import { STANDARD } from "../cards-js/deck-types";

const POSSIBLE_HANDS = [
  new cards.Hand({ faceUp: true, x: 60, y: 60 }),
  new cards.Hand({ faceUp: true, x: 60, y: 340 }),
  new cards.Hand({ faceUp: true, x: 540, y: 60 }),
  new cards.Hand({ faceUp: true, x: 540, y: 340 }),
];

//Let's deal when the Deal button is pressed:
export const onDealClick = function (playersAmount) {
  //Tell the library which element to use for the table
  cards.init({ table: "#card-table", type: STANDARD });
  //Create a new deck of cards
  let deck = new cards.Deck();
  //By default it's in the middle of the container, put it slightly to the side
  deck.x -= 50;

  //cards.all contains all cards, put them all in the deck
  deck.addCards(cards.all);
  //No animation here, just get the deck onto the table.
  deck.render({ immediate: true });

  //Lets add a discard pile
  const discardPile = new cards.Deck({ faceUp: true });
  discardPile.x += 50;

  const actualPlayers = POSSIBLE_HANDS.slice(0, playersAmount);

  deck.deal(7, actualPlayers, 50, function () {
    //This is a callback function, called when the dealing is done.

    handleGameResults(actualPlayers);
    discardPile.render();
  });
};
