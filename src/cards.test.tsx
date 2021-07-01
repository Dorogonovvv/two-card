import { getRandomCardIndex } from "./cards";

describe("cards", () => {
  it("should generate random card index", () => {
    expect(getRandomCardIndex() >= 0).toBeTruthy();
    expect(getRandomCardIndex() <= 52).toBeTruthy();
  });
});
