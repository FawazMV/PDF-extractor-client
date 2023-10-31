import { createContext, useContext, useState } from 'react'

const TokenContext = createContext()

// Custom hook for consuming the token context
export const useAuthContext = () => useContext(TokenContext)

// TokenProvider component responsible for managing authentication tokens
export const TokenProvider = ({ children }) => {
  // Initialize the token state, either from local storage or an empty string
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  // Function to set and store a new token
  const setAuthToken = newToken => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  // Function to clear the authentication token
  const clearAuthToken = () => {
    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <TokenContext.Provider value={{ token, setAuthToken, clearAuthToken }}>
      {children}
    </TokenContext.Provider>
  )
}
