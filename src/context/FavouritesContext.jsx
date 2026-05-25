import { createContext, useReducer, useEffect, useContext } from 'react'

const FavouritesContext = createContext()

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      // Guard against duplicates
      if (state.some((c) => c.cca3 === action.payload.cca3)) {
        return state
      }
      return [...state, action.payload]
    case 'REMOVE_FAVOURITE':
      return state.filter((c) => c.cca3 !== action.payload)
    default:
      return state
  }
}

export function FavouritesProvider({ children }) {
  const [favourites, dispatch] = useReducer(favouritesReducer, [], (initial) => {
    const saved = localStorage.getItem('favourites')
    return saved ? JSON.parse(saved) : initial
  })

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  const context = useContext(FavouritesContext)
  if (context === undefined) {
    throw new Error('useFavourites must be used within a FavouritesProvider')
  }
  return context
}
