import { useState } from "react";

const SearchBar = ({ games, setFilteredGames }) => {
    const [query, setQuery] = useState("");
  
    const handleSearch = (event) => {
      const userQuery = event.target.value.toLowerCase();
      setQuery(userQuery)
      const filtered = games.filter((game) =>
        game.title && game.title.toLowerCase().includes(userQuery)
      );
      setFilteredGames(filtered);
    };
  
    const clearSearch = () => {
      setQuery("");
      setFilteredGames(games)
    };
  
    return (
      <div className="mb-4 flex items-center space-x-2 w-9/12">
        <input
          type="text"
          placeholder="Search games by title..."
          className="flex-1 p-2 border rounded"
          value={query}
          onChange={handleSearch}
        />
        {query && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={clearSearch}
          >
            Clear
          </button>
        )}
      </div>
    );
  };
  
  export default SearchBar;
  