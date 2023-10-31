import { useUIContext } from '../../useContext/UIContext'
import { bgColor } from '../../utils/constants'
import AuthModal from '../AuthComponent/components/AuthModal'
import Loader from './Loader'
import ToastNotification from './Toast/ToastNotification'

// The Screen component manages the overall application layout
const Screen = ({ children }) => {
  // Use the UI context to access loader state
  const { loader } = useUIContext()

  return (
    <div className={`${bgColor} min-h-screen w-screen`}>
      {loader && <Loader />} {/* Display a loader when needed */}
      {children} {/* Render the children components */}
      <ToastNotification /> {/* Show toast notifications */}
      <AuthModal /> {/* Display authentication modal when needed */}
    </div>
  )
}

export default Screen
