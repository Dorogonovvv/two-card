import React, { useState } from "react";
import "./App.css";
import { CardHands } from "./CardHands";

export const DEFAULT_PLAYERS_AMOUNT = 2;
export const MIN_PLAYERS_AMOUNT = 2;
export const MAX_PLAYERS_AMOUNT = 4;

function App() {
  const [playersAmount, setPlayersAmount] = useState(DEFAULT_PLAYERS_AMOUNT);
  const [round, setRound] = useState(0);

  const handlePlayersAmountChange = (event) => {
    const value = Number(event.target.value);
    const amount =
      value <= MIN_PLAYERS_AMOUNT
        ? MIN_PLAYERS_AMOUNT
        : value >= MAX_PLAYERS_AMOUNT
        ? MAX_PLAYERS_AMOUNT
        : value;
    setPlayersAmount(amount);
  };

  return (
    <div className="App">
      <button
        id="deal"
        className="play-button"
        onClick={() => setRound(round + 1)}
      >
        NEW DEAL
      </button>
      <h1>
        Played {round} time{round > 1 ? "s" : ""}
      </h1>
      <label htmlFor="players-amount-input">Players amount:</label>
      <input
        id="players-amount-input"
        className="input"
        type="number"
        min={MIN_PLAYERS_AMOUNT}
        max={MAX_PLAYERS_AMOUNT}
        step={1}
        value={playersAmount}
        onChange={handlePlayersAmountChange}
      />

      <CardHands round={round} playersAmount={playersAmount} />

      <hr />

      <h1>Instructions:</h1>
      <p>
        Create a mini game where clicking the button generates several hand
        cards.
        <br />
        Please be sure to fork this repo and update the readme file with your
        notes.
      </p>
      <ul>
        <li>A hand has 7 cards</li>
        <li>
          The winner of the game will be by the amount of pairs a hand has
        </li>
        <li>Each "deal" will create a brand new "game" with new hands</li>
        <li>Display those hands</li>
        <li>
          Mark each hand "pairs" with proper border. Be sure diff pair has diff
          border
        </li>
        <li>Game has two hands by default</li>
        <li>Organized code</li>
      </ul>
      <h5>Extra</h5>
      <ul>
        <li>option to add or remove hands 2-4</li>
        <li>Tests</li>
      </ul>
    </div>
  );
}

export default App;
