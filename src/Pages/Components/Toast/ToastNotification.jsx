import React, { useState, useEffect } from 'react'
import './ToastNotification.css' // Import your CSS file
import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon
} from '../Icons'
import { useUIContext } from '../../../useContext/UIContext'

// Define separate SVG components for the icons

const ToastNotification = () => {
  const { toast, setToast } = useUIContext()

  const [currentToast, setCurrentToast] = useState(null)

  useEffect(() => {
    if (toast) {
      const { type, text } = toast

      const icon = getIcon(type)
      const message = text || getDefaultMessage(type)

      const newToast = {
        icon,
        text: message
      }

      setCurrentToast(newToast)

      setTimeout(() => {
        setCurrentToast(null)
        setToast(null)
      }, 2000)
    }
  }, [toast, setToast])

  const getIcon = type => {
    switch (type) {
      case 'success':
        return <SuccessIcon />
      case 'error':
        return <ErrorIcon />
      case 'warning':
        return <WarningIcon />
      case 'info':
        return <InfoIcon />
      default:
        return ''
    }
  }

  const getDefaultMessage = type => {
    switch (type) {
      case 'success':
        return 'Success'
      case 'error':
        return 'Error: Try again.'
      case 'warning':
        return 'Warning.'
      case 'info':
        return 'Info: This is an information toast.'
      default:
        return ''
    }
  }

  return (
    <div className=''>
      <div className='notifications z-30 fixed px-1 top-[90px] right-2'>
        {currentToast && (
          <div className='toast roundedLg bg-white shadow-md p-4 transform transition-transform duration-300 border'>
            <div className='flex items-center justify-between w-full'>
              {currentToast.icon} {/* Render the icon component */}
              <span className='ml-2 text-gray-600 text-sm font-bold'>
                {currentToast.text}
              </span>
              <span onClick={() => setCurrentToast(null)}>
                <CloseIcon />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ToastNotification
