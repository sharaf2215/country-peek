function FilterBar({ region, onRegionChange, sortBy, onSortChange }) {
  return (
    <div className="filter-bar">
      <select 
        value={region} 
        onChange={(e) => onRegionChange(e.target.value)}
        aria-label="Filter by Region"
      >
        <option value="All">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select 
        value={sortBy} 
        onChange={(e) => onSortChange(e.target.value)}
        aria-label="Sort by"
      >
        <option value="">Default Sort</option>
        <option value="name">Name (A–Z)</option>
        <option value="population">Population (High–Low)</option>
      </select>
    </div>
  )
}

export default FilterBar
