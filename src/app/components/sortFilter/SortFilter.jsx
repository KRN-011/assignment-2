import React from 'react'

const SortFilter = ({ games = [], setFilteredGames }) => {

    const handleSort = (e) => {
        const platform = e.target.value;
        if (platform === 'all') {
            setFilteredGames(games);
        } else {
            const filtered = games.filter((game) => game.platform === platform)
            setFilteredGames(filtered)
        }
    }

    const platforms = [...new Set(games.map((game) => game.platform))]

  return (
    <>
      <select onChange={handleSort} className="border p-2 mb-4 rounded-md w-1/4">
        <option value="all">All Platforms</option>
        {platforms.filter(i => typeof i != "undefined").map((gamePlatform, index) => (
            <option key={index} value={gamePlatform}>
                {gamePlatform}
            </option>
        ))}
      </select>
    </>
  )
}

export default SortFilter
