import React, { useState } from 'react'
import { exportPdf } from '../../../api/pdfRequests'
import { downloadPdf } from '../../../utils/helpers'
import PDFPages from './PDFPages'
import { DownloadButton, SelectText, SubmitButton } from './PDFButtons'
import { useUIContext } from '../../../useContext/UIContext'

const PDFViewer = ({ pdf, setError }) => {
  const [numPages, setNumPages] = useState(null)
  const [selectedPages, setSelectedPages] = useState([])
  const [downLoadLink, setDownloadLink] = useState('')
  const { setLoader, setToast } = useUIContext()

  // Toggle the selection of a PDF page
  const togglePageSelection = pageNumber => {
    if (selectedPages.includes(pageNumber)) {
      setSelectedPages(selectedPages.filter(page => page !== pageNumber))
    } else {
      setSelectedPages([...selectedPages, pageNumber])
    }
  }

  // Handle PDF export submission
  const exportPdfSubmit = async () => {
    setLoader(true) // Set the loader to true before making the request.
    try {
      const result = await exportPdf(pdf, selectedPages)
      if (result?.data?.success) {
        setSelectedPages([])
        setToast({ type: 'success', text: 'Successfully Exported' })
        setDownloadLink(result.data.newPath)
      } else {
        setToast({ type: 'error', text: 'PDF export failed' })
        setError('PDF export failed. Please try again.')
      }
    } finally {
      setLoader(false) // Set the loader to false after the request is complete.
    }
  }

  return (
    <>
      {selectedPages.length ? (
        <SubmitButton onClick={exportPdfSubmit} />
      ) : downLoadLink ? (
        <DownloadButton onClick={() => downloadPdf(downLoadLink)} />
      ) : numPages ? (
        <SelectText />
      ) : (
        <></>
      )}
      <PDFPages
        pdf={pdf}
        numPages={numPages}
        selectedPages={selectedPages}
        togglePageSelection={togglePageSelection}
        setNumPages={setNumPages}
      />
    </>
  )
}

export default PDFViewer
