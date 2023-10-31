import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import Button from '../../Components/Button'
import { downloadPdf } from '../../../utils/helpers'
import { bgColor } from '../../../utils/constants'

const Card = ({ pdfPath }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber] = useState(1) // Specify the initial page number
  const [isLoading, setIsLoading] = useState(true) // Track loading state

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setIsLoading(false) // PDF is now loaded
  }

  return (
    <Document
      file={pdfPath}
      className='flex gap-1 justify-center sm:justify-around p-2 sm:p-5 flex-wrap'
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <div
        className={`${bgColor} relative flex flex-col justify-between items-center p-1 shadow-2xl mx-2 mb-4 bg-teal-600`}
      >
        <div className='absolute top-0 right-0 mt-2 mr-2 px-2 py-1 bg-teal-500 text-white rounded-full text-xs'>
          {numPages}
        </div>

        <div className='relative'>
          <Page className='w-full h-auto' pageNumber={pageNumber} width={240} />
          <div
            className={`${bgColor} absolute top-1 right-1 px-[6px] bg-blue-600 text-white text-xs font-semibold p-1 rounded-full`}
          >
            {numPages}
          </div>
        </div>
        <Button
          className={`${bgColor} w-full flex text-lg justify-center hover:bg-white hover:text-blue-500  text-white`}
          onClick={() => downloadPdf(pdfPath)}
          text='Download PDF'
        />
      </div>
    </Document>
  )
}

export default Card
