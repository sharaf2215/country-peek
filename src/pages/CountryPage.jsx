import { useParams, useNavigate } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import '../styles/App.css'

function CountryPage() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { country, loading, error } = useCountry(code)

  if (loading) return <p className="page-status">Loading country details...</p>
  if (error) return <p className="page-status page-status--error">{error}</p>
  if (!country) return null

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country

  const languageList = languages ? Object.values(languages).join(', ') : 'N/A'
  const currencyList = currencies 
    ? Object.values(currencies).map(c => c.name).join(', ') 
    : 'N/A'

  return (
    <div className="country-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <div className="country-page__layout">
        <img 
          src={flags.svg} 
          alt={`Flag of ${name.common}`} 
          className="country-page__flag" 
        />

        <div className="country-page__info">
          <h2 className="country-page__name">{name.common}</h2>
          <p className="country-page__official">{name.official}</p>

          <div className="country-page__details">
            <div className="details__column">
              <p><span>Population:</span> {population.toLocaleString()}</p>
              <p><span>Region:</span> {region}</p>
              <p><span>Sub Region:</span> {subregion}</p>
              <p><span>Capital:</span> {capital?.[0] ?? 'N/A'}</p>
            </div>
            <div className="details__column">
              <p><span>Languages:</span> {languageList}</p>
              <p><span>Currencies:</span> {currencyList}</p>
            </div>
          </div>

          {borders && borders.length > 0 && (
            <div className="country-page__borders">
              <h3>Border Countries:</h3>
              <div className="borders__list">
                {borders.map((borderCode) => (
                  <span key={borderCode} className="border-badge">
                    {borderCode}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryPage
