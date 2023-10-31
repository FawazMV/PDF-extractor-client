import { Link, useRouteError } from 'react-router-dom'
import { bgColor } from '../utils/constants'
import Button from './Components/Button'

const ErrorPage = () => {
  const err = useRouteError()
  console.log(err.message)
  return (
    <section
      className={`${bgColor} flex items-center h-screen p-16 text-gray-100`}
    >
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Sorry, we couldn't find this page.
          </p>
          <p className='mt-4 mb-8 text-gray-500'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to='/' className=''>
            <Button
              className='px-8 py-3 font-semibold rounded bg-blue-500 text-gray-900'
              text='Back to homepage'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
