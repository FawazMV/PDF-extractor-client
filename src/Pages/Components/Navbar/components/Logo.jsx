import logo from '../../../../assets/logoLight.svg'

const Logo = () => (
  <div className='flex items-center'>
    <img src={logo} alt='Logo' className='w-10 h-10 mr-2' />
    <h1 className='text-white text-xl font-semibold'>PDF Extractor</h1>
  </div>
)

export default Logo
