import React, { useEffect, useState } from "react";
import { CardInterface, CARDS, getRandomCardIndex } from "./cards";
import {
  announceTheWinner,
  countHandsCardEntries,
  getRandomColor,
} from "./helpers/handle-game-results";

export interface CardHandsProps {
  round: number;
  playersAmount: number;
}

const CARDS_IN_ONE_HAND = 7;

export const generateSequenceOfIndexes = (playersAmount: number) => {
  const emptyArrayOfNeededLength = new Array(
    CARDS_IN_ONE_HAND * playersAmount
  ).fill(null);

  return emptyArrayOfNeededLength.reduce((accum) => {
    return [...accum, generateUniqIndexInArray(accum)];
  }, []);
};

export const generateUniqIndexInArray = (array: Array<number>): number => {
  const uniqueIndex = getRandomCardIndex();
  return array.includes(uniqueIndex)
    ? generateUniqIndexInArray(array)
    : uniqueIndex;
};

export const CardHands = ({ round, playersAmount }: CardHandsProps) => {
  const [cards, setCards] = useState<Array<Array<CardInterface>>>([]);
  const [cardsEntriesPerHand, setCardsEntriesPerHand] = useState<
    Array<Record<string, number>>
  >([]);

  useEffect(() => {
    if (round === 0) return;
    const sequenceOfUniqIndexes = generateSequenceOfIndexes(playersAmount);
    const arraysOfUniqIndexes = new Array(playersAmount)
      .fill(null)
      .map((item, i) => [
        ...sequenceOfUniqIndexes.slice(
          i * CARDS_IN_ONE_HAND,
          (i + 1) * CARDS_IN_ONE_HAND
        ),
      ]);

    const cards = arraysOfUniqIndexes.map(
      (singleHandIndexesArr: Array<number>) =>
        singleHandIndexesArr.map((index) => CARDS[index])
    );
    const cardsEntriesPerHand = countHandsCardEntries(cards);
    setCards(cards);
    setCardsEntriesPerHand(cardsEntriesPerHand);
    setTimeout(() => {
      announceTheWinner(cardsEntriesPerHand);
    }, 500);
  }, [round]);

  return (
    <div className="playingCards fourColours rotateHand">
      {cards.map((cardInHand, index) => {
        const handColorRankMap: Record<number, string> = {};
        return (
          <ul className="table" key={`table-${index}`}>
            <p>Player {index + 1}</p>
            {cardInHand.map((card, cardIndex) => {
              if (!handColorRankMap[card.rank]) {
                handColorRankMap[card.rank] = getRandomColor();
              }
              return (
                <li
                  key={cardIndex}
                  className="card-wrapper"
                  style={
                    cardsEntriesPerHand[index][card.rank] === 2
                      ? { border: `2px solid ${handColorRankMap[card.rank]}` }
                      : {}
                  }
                >
                  {card.html}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
