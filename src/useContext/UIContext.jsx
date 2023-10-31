import React, { createContext, useContext, useState } from 'react'

const UIContext = createContext()
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
  const [loader, setLoader] = useState(false)
  const [toast, setToast] = useState(null)
  const [modal, setModal] = useState(false)

  return (
    <>
      <UIContext.Provider
        value={{ loader, setLoader, toast, setToast, modal, setModal }}
      >
        {children}
      </UIContext.Provider>
    </>
  )
}
