import React, { useState } from 'react'
import { bgColor, blueButton } from '../../utils/constants'
import Button from '../Components/Button'
import * as formHelper from '../../utils/forms'
import InputField from '../Components/InputField'
import { userLogin, userRegistration } from '../../api/authRequests'
import { CloseIcon } from '../Components/Icons'
import { useUIContext } from '../../useContext/UIContext'
import { useAuthContext } from '../../useContext/authContext'
import { FormValidate } from '../../utils/validations'

const AuthComponent = () => {
  const { setToast, setModal, setLoader } = useUIContext()
  const { setAuthToken } = useAuthContext()
  const [signup, setSignup] = useState(false) // Toggles between login and signup

  const formFields = signup
    ? formHelper.SignupFormFields
    : formHelper.LoginFormFields
  const initialData = signup
    ? formHelper.SignupFormData
    : formHelper.LoginFormData

  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState(initialData)

  // Function to handle input field changes
  const handleChange = ({ name, value }) => {
    setFormData({ ...formData, [name]: value })
  }

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    setErrors(initialData)
    const newErrors = FormValidate(formData, formFields)
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      signup ? signUpSubmit() : loginSubmit()
    }
  }

  // Function to handle login form submission
  const loginSubmit = async () => {
    setLoader(true)
    try {
      const result = await userLogin(formData)
      if (result?.data?.success) {
        setAuthToken(result.data?.token)
        setToast({ type: 'success', text: 'Successfully Logged' })
        setModal(false)
      } else {
        setToast({ type: 'error', text: result?.data?.message })
      }
    } finally {
      setLoader(false)
    }
  }

  // Function to handle signup form submission
  const signUpSubmit = async () => {
    setLoader(true)
    try {
      const result = await userRegistration(formData)
      if (result?.data?.success) {
        setAuthToken(result.data?.token)
        setToast({ type: 'success', text: 'Successfully registered' })
        setModal(false)
      } else {
        setToast({ type: 'error', text: result?.data?.message })
      }
    } finally {
      setLoader(false)
    }
  }

  return (
    <>
      <div
        className={`${bgColor} relative flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-50 shadow-2xl`}
      >
        <span
          className='absolute top-5 right-8'
          onClick={() => {
            setErrors(initialData)
            setFormData(initialData)
            setModal(false)
          }}
        >
          <CloseIcon />
        </span>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>
            {signup ? 'Sign up' : 'Sign in'}
          </h1>
          <p className='text-sm text-gray-200'>
            {signup ? 'Sign up' : 'Sign in'} to access your account
          </p>
        </div>
        <div className='space-y-12'>
          <div className='space-y-4'>
            {formFields.map(field => (
              <InputField
                key={field.name}
                field={field}
                formError={errors}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className='space-y-2'>
            <div>
              <Button
                onClick={handleSubmit}
                className={`${blueButton} w-full px-8 py-3 font-semibold rounded-md `}
                text={signup ? 'Sign up' : 'Sign in'}
              />
            </div>
            <p className='px-6 text-xs text-center text-gray-200'>
              {signup
                ? 'Already have an account?'
                : "Don't have an account yet?"}
              <span
                className='hover:underline cursor-pointer pl-1 text-blue-700'
                onClick={() => {
                  setSignup(!signup)
                  setErrors(initialData)
                }}
              >
                {!signup ? 'Sign up' : 'Sign in'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthComponent
