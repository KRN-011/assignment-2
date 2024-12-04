import React from "react";
import GameCard from "../gameCard/GameCard";

const GameLsit = ({ games =[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameLsit;
