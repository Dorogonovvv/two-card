import React from "react";

export const getRandomCardIndex = () =>
  Math.floor(Math.random() * (CARDS.length - 1));

export interface CardInterface {
  rank: number;
  html: React.ReactNode;
}

export const CARDS: Array<CardInterface> = [
  {
    rank: 2,
    html: (
      <div className="card rank-2 diams">
        <span className="rank">2</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 3,
    html: (
      <div className="card rank-3 diams">
        <span className="rank">3</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 4,
    html: (
      <div className="card rank-4 diams">
        <span className="rank">4</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 5,
    html: (
      <div className="card rank-5 diams">
        <span className="rank">5</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 6,
    html: (
      <div className="card rank-6 diams">
        <span className="rank">6</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 7,
    html: (
      <div className="card rank-7 diams">
        <span className="rank">7</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 8,
    html: (
      <div className="card rank-8 diams">
        <span className="rank">8</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 9,
    html: (
      <div className="card rank-9 diams">
        <span className="rank">9</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 10,
    html: (
      <div className="card rank-10 diams">
        <span className="rank">10</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 11,
    html: (
      <div className="card rank-j diams">
        <span className="rank">J</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 12,
    html: (
      <div className="card rank-q diams">
        <span className="rank">Q</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 13,
    html: (
      <div className="card rank-k diams">
        <span className="rank">K</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  {
    rank: 14,
    html: (
      <div className="card rank-a diams">
        <span className="rank">A</span>
        <span className="suit">&diams;</span>
      </div>
    ),
  },
  //
  {
    rank: 2,
    html: (
      <div className="card rank-2 hearts">
        <span className="rank">2</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 3,
    html: (
      <div className="card rank-3 hearts">
        <span className="rank">3</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 4,
    html: (
      <div className="card rank-4 hearts">
        <span className="rank">4</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 5,
    html: (
      <div className="card rank-5 hearts">
        <span className="rank">5</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 6,
    html: (
      <div className="card rank-6 hearts">
        <span className="rank">6</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 7,
    html: (
      <div className="card rank-7 hearts">
        <span className="rank">7</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 8,
    html: (
      <div className="card rank-8 hearts">
        <span className="rank">8</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 9,
    html: (
      <div className="card rank-9 hearts">
        <span className="rank">9</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 10,
    html: (
      <div className="card rank-10 hearts">
        <span className="rank">10</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 11,
    html: (
      <div className="card rank-j hearts">
        <span className="rank">J</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 12,
    html: (
      <div className="card rank-q hearts">
        <span className="rank">Q</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 13,
    html: (
      <div className="card rank-k hearts">
        <span className="rank">K</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  {
    rank: 14,
    html: (
      <div className="card rank-a hearts">
        <span className="rank">A</span>
        <span className="suit">&hearts;</span>
      </div>
    ),
  },
  //
  {
    rank: 2,
    html: (
      <div className="card rank-2 spades">
        <span className="rank">2</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 3,
    html: (
      <div className="card rank-3 spades">
        <span className="rank">3</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 4,
    html: (
      <div className="card rank-4 spades">
        <span className="rank">4</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 5,
    html: (
      <div className="card rank-5 spades">
        <span className="rank">5</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 6,
    html: (
      <div className="card rank-6 spades">
        <span className="rank">6</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 7,
    html: (
      <div className="card rank-7 spades">
        <span className="rank">7</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 8,
    html: (
      <div className="card rank-8 spades">
        <span className="rank">8</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 9,
    html: (
      <div className="card rank-9 spades">
        <span className="rank">9</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 10,
    html: (
      <div className="card rank-10 spades">
        <span className="rank">10</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 11,
    html: (
      <div className="card rank-j spades">
        <span className="rank">J</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 12,
    html: (
      <div className="card rank-q spades">
        <span className="rank">Q</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 13,
    html: (
      <div className="card rank-k spades">
        <span className="rank">K</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  {
    rank: 14,
    html: (
      <div className="card rank-a spades">
        <span className="rank">A</span>
        <span className="suit">&spades;</span>
      </div>
    ),
  },
  //
  {
    rank: 2,
    html: (
      <div className="card rank-2 clubs">
        <span className="rank">2</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 3,
    html: (
      <div className="card rank-3 clubs">
        <span className="rank">3</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 4,
    html: (
      <div className="card rank-4 clubs">
        <span className="rank">4</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 5,
    html: (
      <div className="card rank-5 clubs">
        <span className="rank">5</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 6,
    html: (
      <div className="card rank-6 clubs">
        <span className="rank">6</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 7,
    html: (
      <div className="card rank-7 clubs">
        <span className="rank">7</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 8,
    html: (
      <div className="card rank-8 clubs">
        <span className="rank">8</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 9,
    html: (
      <div className="card rank-9 clubs">
        <span className="rank">9</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 10,
    html: (
      <div className="card rank-10 clubs">
        <span className="rank">10</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 11,
    html: (
      <div className="card rank-j clubs">
        <span className="rank">J</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 12,
    html: (
      <div className="card rank-q clubs">
        <span className="rank">Q</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 13,
    html: (
      <div className="card rank-k clubs">
        <span className="rank">K</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
  {
    rank: 14,
    html: (
      <div className="card rank-a clubs">
        <span className="rank">A</span>
        <span className="suit">&clubs;</span>
      </div>
    ),
  },
];
