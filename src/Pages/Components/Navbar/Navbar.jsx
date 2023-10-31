import React, { useState } from 'react'
import { bgColor } from '../../../utils/constants'
import Logo from './components/Logo'
import MenuButton from './components/MenuButton'
import UserButtons from './components/UserButtons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../useContext/authContext'
import { useUIContext } from '../../../useContext/UIContext'

const Navbar = () => {
  const { setModal } = useUIContext()
  const [showMenu, setShowMenu] = useState(false)
  const { token, clearAuthToken } = useAuthContext()

  const navigate = useNavigate()
  const location = useLocation()

  // Function to open the login modal
  const handleLogin = () => {
    setModal(true)
    setShowMenu(false)
  }

  // Function to handle navigation between pages (home and saved PDFs)
  const handleNavigation = () => {
    setShowMenu(false)
    if (location.pathname === '/saved-pdf') {
      navigate('/') // If the current path is /saved-pdf, navigate to /
    } else {
      navigate('/saved-pdf')
    }
  }

  // Function to handle the user logout action with a confirmation dialog
  const handleLogout = () => {
    const result = window.confirm('Are you sure you want to logout?')
    if (result) clearAuthToken()
  }

  // Function to toggle the visibility of the menu
  const handleMenuItems = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav
      className={`${bgColor} shadow fixed z-[999] bg top-0 left-0 w-full  p-4`}
    >
      <div className='md:flex justify-between'>
        <div className='flex items-center justify-between px-1'>
          <Logo handleMenuItems={handleMenuItems} showMenu={showMenu} />
          <MenuButton handleMenuItems={handleMenuItems} showMenu={showMenu} />
        </div>
        <UserButtons
          isLoggedIn={token}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          showMenu={showMenu}
          handleNavigation={handleNavigation}
        />
      </div>
    </nav>
  )
}

export default Navbar
