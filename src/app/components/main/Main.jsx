"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBar from "../searchBar/SearchBar";
import SortFilter from "../sortFilter/SortFilter";
import GameLsit from "../gameList/GameLsit";

const Main = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
        );
        const data = response.data || [];
        setGames(data);
        setFilteredGames(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!games.length) {
    return <div className="text-center">No games available</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Games Listing</h1>
      <SearchBar games={games} setFilteredGames={setFilteredGames} />
      <SortFilter games={games} setFilteredGames={setFilteredGames} />
      <GameLsit games={filteredGames} />
    </div>
  );
};

export default Main;
