function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search for a country..."
        aria-label="Search for a country"
        className="search-bar__input"
      />
    </div>
  )
}

export default SearchBar
