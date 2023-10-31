import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { Document } from 'react-pdf'
import PageThumbnail from './PageThumbnail'

const PDFPages = ({
  pdf,
  numPages,
  selectedPages,
  togglePageSelection,
  setNumPages
}) => {
  // Callback function to set the total number of pages when the document is loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <Document
      file={pdf}
      className={`flex gap-1 justify-center sm:justify-around p-2 sm:p-5 flex-wrap`}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {[...Array(numPages)].map((_, index) => (
        <PageThumbnail
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          selectedPages={selectedPages}
          isSelected={selectedPages.includes(index + 1)}
          onClick={() => togglePageSelection(index + 1)}
        />
      ))}
    </Document>
  )
}

export default PDFPages
