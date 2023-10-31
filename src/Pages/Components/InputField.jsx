import { useState } from 'react'

const InputField = ({ field, onChange, formError }) => {
  const [inputType, setInputType] = useState(field.type)

  const togglePasswordVisibility = () => {
    setInputType(prevType => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <div className='mb-4 relative'>
      <label
        className='block text-gray-600 font-semibold mb-2'
        htmlFor={field.name}
      >
        {field.label}
      </label>
      <input
        autoComplete='off'
        name={field.name}
        className={`shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-300 ${
          formError[field.name] ? 'border-red-500' : ''
        }`}
        onChange={e => {
          formError[field.name] = ''
          onChange(e.target)
        }}
        id={field.name}
        type={inputType}
        placeholder={field.placeholder}
      />
      <p className='text-red-500 text-xs'>{formError[field.name]}</p>
      {field.type === 'password' && (
        <div
          className='absolute top-11 right-4 cursor-pointer'
          onClick={togglePasswordVisibility}
        >
          {inputType === 'password' ? <Eye /> : <EyeClose />}
        </div>
      )}
    </div>
  )
}

const Eye = () => (
  <svg
    width='16'
    height='16'
    className='text-gray-700'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />
    <path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z' />
  </svg>
)

const EyeClose = () => (
  <svg
    width='16'
    height='16'
    className='text-gray-700'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z' />
    <path d='M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z' />
  </svg>
)
export default InputField
