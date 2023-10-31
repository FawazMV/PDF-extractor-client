import React, { useState } from 'react'
import PDFViewer from './components/PDFViewer'

const HomePage = () => {
  // State to track the selected PDF and error messages
  const [selectedPDF, setSelectedPDF] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // Function to handle PDF file selection
  const handlePDFSelect = event => {
    const file = event.target.files[0]

    if (file) {
      if (file.type === 'application/pdf') {
        setSelectedPDF(file)
        setErrorMessage('')
      } else {
        setErrorMessage('Please select a PDF file.')
      }
    }
  }

  return (
    <div
      className='pt-24 min-h-[90vh] flex flex-col items-center p-3 justify-center'
      onClick={() => setErrorMessage('')}
    >
      <div className='bg-white bg-opacity-90 rounded-lg shadow-md p-6 w-full max-w-md md:max-w-xl lg:max-w-3xl'>
        <h1 className='text-2xl font-bold mb-4'>PDF Master</h1>

        <input
          type='file'
          accept='application/pdf'
          onChange={handlePDFSelect}
          className='mb-2 p-2 border border-gray-300 w-full'
        />
        {errorMessage && (
          <p className='text-red-500 pl-2 text-xs'>{errorMessage}</p>
        )}

        {selectedPDF ? (
          <PDFViewer pdf={selectedPDF} setError={setErrorMessage} />
        ) : (
          <p className='text-gray-500 mt-4'>Select a PDF file to extract</p>
        )}
      </div>
    </div>
  )
}

export default HomePage
