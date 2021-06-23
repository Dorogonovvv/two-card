import { countHandsCardEntries, getRandomColor } from "./handle-game-results";

describe("handle-game-results helpers", () => {
  it("should generate colors correctly", () => {
    const hexadecimal = /^#[a-f0-9]/i;
    expect(getRandomColor()).toMatch(hexadecimal);
  });
  it("should count cards in hands correctly", () => {
    const cardsInHands = [
      [{ rank: 2 }, { rank: 2 }, { rank: 3 }],
      [{ rank: 7 }],
    ];
    const expectedHandsCardEntries = [{ 2: 2, 3: 1 }, { 7: 1 }];
    expect(countHandsCardEntries(cardsInHands)).toEqual(
      expectedHandsCardEntries
    );
  });
});
