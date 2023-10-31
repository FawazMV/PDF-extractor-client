import { Page } from 'react-pdf'

// PageThumbnail component for rendering individual PDF page thumbnails
const PageThumbnail = ({ pageNumber, isSelected, onClick, selectedPages }) => (
  <div
    className={`relative flex flex-col cursor-pointer items-center p-1 mx-2 mb-4 ${
      isSelected
        ? 'bg-blue-500 shadow-md rounded transform scale-105 border border-blue-200' // adding a bg color for the selected pages
        : 'bg-gray-200 hover:shadow-md hover:scale-105 border border-gray-300'
    }`}
    onClick={onClick}
  >
    {isSelected && ( // Display a badge with the selected page number if it's selected
      <div className='absolute z-10 top-0 right-0 p-1 text-sm bg-blue-500 text-white rounded-full'>
        {selectedPages.indexOf(pageNumber) + 1}
      </div>
    )}
    {/* Render the PDF page using the react-pdf library */}
    <Page className='w-full h-auto' pageNumber={pageNumber} width={180} />
  </div>
)

export default PageThumbnail
