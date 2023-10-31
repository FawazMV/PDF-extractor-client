import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  Outlet,
  Navigate,
  useNavigate
} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import ErrorPage from './Pages/ErrorPage'
import Screen from './Pages/Components/Screen'
import Navbar from './Pages/Components/Navbar/Navbar'
import SavedPDFs from './Pages/SavedPDFs/SavedPDFs'
import { UIProvider, useUIContext } from './useContext/UIContext'
import { TokenProvider, useAuthContext } from './useContext/authContext'

const PrivateRoute = ({ Component }) => {
  const { token } = useAuthContext()
  const { setToast } = useUIContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      showSignInToastAndNavigate()
    }
  }, [token])

  const showSignInToastAndNavigate = () => {
    // Display a toast message for unauthorized access
    setToast({ type: 'warning', text: 'Sign in to access' })

    // Navigate to the home page
    navigate('/')
  }

  return token ? <Component /> : null
}

const AppLayout = () => (
  <>
    <UIProvider>
      <TokenProvider>
        <Screen>
          <Navbar />
          <Outlet /> {/* Render nested routes */}
        </Screen>
      </TokenProvider>
    </UIProvider>
  </>
)

const App = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />, // Display an error page if needed
    children: [
      { path: '/', element: <HomePage /> }, // Home page route
      { path: '/saved-pdf', element: <PrivateRoute Component={SavedPDFs} /> } // Protected route
    ]
  }
])

export default App
