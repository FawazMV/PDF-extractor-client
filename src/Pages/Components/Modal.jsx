import { useUIContext } from '../../useContext/UIContext'

const Modal = ({ Component }) => {
  const { modal } = useUIContext()

  return modal ? (
    // Render the modal when 'modal' is truthy
    <>
      <div className='justify-center px-3 w-full pt-14 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <Component /> {/* Render the provided 'Component' within the modal */}
        </div>
      </div>
      <div className='fixed inset-0 z-10 bg-slate-800/40'></div>{' '}
      {/* Overlay background for the modal */}
    </>
  ) : null
}

export default Modal
