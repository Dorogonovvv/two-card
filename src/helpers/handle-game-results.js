import $ from "jquery";

export const getRandomColor = () =>
  "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

const mapPlayersPositionAndIndex = [
  "Top Left",
  "Bottom Left",
  "Top Right",
  "Bottom Right",
];

export const handleGameResults = (hands) => {
  // count amount of card entries
  const entriesCountArray = countHandsCardEntries(hands);

  // highlight couples
  highlightCouples(hands, entriesCountArray);

  // announce the winner
  announceTheWinner(entriesCountArray);
};

export const countHandsCardEntries = (hands) =>
  hands.map((hand) =>
    hand.reduce(
      (accum, item) => ({
        ...accum,
        [item.rank]: accum[item.rank] ? accum[item.rank] + 1 : 1,
      }),
      {}
    )
  );

export const highlightCouples = (hands, entriesCountArray) => {
  // reset previous results
  $(".card").css("border", "none");

  hands.forEach((hand, playerIndex) => {
    const handColorRankMap = {};
    // iterate cards in single hand
    hand.forEach((card) => {
      if (entriesCountArray[playerIndex][card.rank] === 2) {
        if (!handColorRankMap[card.rank]) {
          handColorRankMap[card.rank] = getRandomColor();
        }
        $(card.el)
          .css("border", `3px solid ${handColorRankMap[card.rank]}`)
          .css("border-radius", "14px");
      }
    });
  });
};

export const announceTheWinner = (entriesCountArray) => {
  const amountOfCouplesInHands = [0, 0, 0, 0];
  entriesCountArray.forEach((entriesCountObj, i) => {
    Object.values(entriesCountObj).forEach((entryCount) => {
      if (entryCount === 2) {
        amountOfCouplesInHands[i] = amountOfCouplesInHands[i] + 1;
      }
    });
  });
  const maxCouplesAmount = Math.max(...amountOfCouplesInHands);
  const noAbsoluteChampion =
    amountOfCouplesInHands.filter((item) => item === maxCouplesAmount)
      .length !== 1;
  if (noAbsoluteChampion) {
    alert("No absolute champion");
  } else {
    const championsIndex = amountOfCouplesInHands.findIndex(
      (item) => item === maxCouplesAmount
    );
    alert(`${mapPlayersPositionAndIndex[championsIndex]} player win!`);
  }
};
