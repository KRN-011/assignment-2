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
      <select onChange={handleSort} className="border p-2 mb-4 w-full rounded-md">
        <option value="all">All Platforms</option>
        {platforms.map((platform, index) => (
            <option key={index} value={platform}>
                {platform}
            </option>
        ))}
      </select>
    </>
  )
}

export default SortFilter
