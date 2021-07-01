export const getRandomColor = () =>
  "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

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
    alert(`Player ${championsIndex + 1} win!`);
  }
};
