import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="home">
        <p className="home__status">
          You haven't saved any countries yet.{' '}
          <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
            Go back and explore!
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="home">
      <h2 style={{ padding: '1rem 0' }}>Your Favourite Countries</h2>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Favourites
