import React from "react";

const GameCard = ({ game }) => {
  return (
    <>
      <div className="border rounded-lg p-4 shadow-md">
        <h3 className="font-bold text-lg">{game.title}</h3>
        <p>Platform: {game.platform}</p>
        <p>Score: {game.score}</p>
        <p>Genre: {game.genre}</p>
        <p>Editor's Choice: {game.editors_choice}</p>
      </div>
    </>
  );
};

export default GameCard;
