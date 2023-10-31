import Modal from '../../Components/Modal'
import AuthComponent from '../AuthComponent'

const AuthModal = () => (
  // Use the 'Modal' component to display the 'AuthComponent' within a modal dialog
  <Modal Component={AuthComponent} />
)

export default AuthModal
