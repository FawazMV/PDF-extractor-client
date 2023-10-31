import { useLocation } from 'react-router-dom'
import { blueButton } from '../../../../utils/constants'
import Button from '../../Button'

const UserButtons = ({
  isLoggedIn,
  handleLogin,
  showMenu,
  handleLogout,
  handleNavigation
}) => {
  const location = useLocation()

  const buttons = isLoggedIn
    ? [
        {
          className:
            'bg-blue-100 hover:bg-blue-600 my-1 text-blue-600 hover:text-blue-100 border-blue-600 hover:border-blue-100',
          text: location.pathname === '/saved-pdf' ? 'Home' : 'View Saved PDFs',
          onClick: handleNavigation
        },
        {
          className:
            'text-red-100 hover:text-red-600 my-1 bg-red-600 hover:bg-red-100 hover:border-red-600',
          onClick: handleLogout,
          text: 'Logout'
        }
      ]
    : [
        {
          className:
            blueButton +
            ' hidden md:block ease-linear transition-all duration-150',
          onClick: handleLogin,
          text: 'Login To Save Your PDF'
        }
      ]

  return (
    <>
      {isLoggedIn ? (
        <div className='md:flex items-center hidden'>
          {buttons.map((button, index) => (
            <Button
              key={index}
              className={button.className}
              text={button.text}
              onClick={button.onClick}
            />
          ))}
        </div>
      ) : (
        <Button
          className='hover:bg-blue-100 hidden md:block bg-blue-600 hover:text-blue-600 text-blue-100 hover:border-blue-600'
          onClick={handleLogin}
          text='Login To Save Your PDF'
        />
      )}

      {showMenu && (
        <div className='md:hidden flex-col items- flex text-gray-800 p-4 mt-4 rounded'>
          {isLoggedIn ? (
            buttons.map((button, index) => (
              <Button
                key={index}
                className={button.className}
                text={button.text}
                onClick={button.onClick}
              />
            ))
          ) : (
            <Button
              className='hover:bg-blue-100  md:block bg-blue-600 hover:text-blue-600 text-blue-100 hover:border-blue-600'
              onClick={handleLogin}
              text='Login To Save Your PDF'
            />
          )}
        </div>
      )}
    </>
  )
}

export default UserButtons
