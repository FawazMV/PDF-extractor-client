import { useEffect, useState } from 'react'
import { useUIContext } from '../../useContext/UIContext'
import { fetchSavedPdf } from '../../api/pdfRequests'
import { useAuthContext } from '../../useContext/authContext'
import Card from './components/Card'
import ShimmerCard from './components/Shimmer'

const SavedPDFs = () => {
  const [datas, setDatas] = useState(null)

  const { setToast } = useUIContext()
  const { clearAuthToken } = useAuthContext()

  useEffect(() => {
    // Fetch the saved PDFs when the component mounts
    fetchData()
  }, [])

  const fetchData = async () => {
    // Fetch saved PDFs from the server
    const result = await fetchSavedPdf()

    if (result?.data?.success) {
      // If the request is successful, set the PDF data
      setDatas(result.data.pdfs)
    } else {
      if (result?.status === 401 || result?.status === 404) {
        // If the request fails with a 401 or 404 status, it means the token is invalid, so clear the authentication token
        setToast({
          type: 'error',
          text: 'Token is invalid, Please sign in again'
        })
        clearAuthToken()
      } else {
        // If there's any other error, display it as a toast message
        setToast({ type: 'error', text: result?.data?.message })
      }
    }
  }

  return (
    <div className='pt-20 text-center'>
      {datas?.length ? (
        // If there are saved PDFs, display a header
        <h1 className='text-4xl py-2 font-bold mt-4 text-blue-50'>
          Extracted PDFs
        </h1>
      ) : (
        <></>
      )}
      <div className='flex justify-evenly flex-wrap gap-2'>
        {!datas ? (
          // If data is not yet loaded, display shimmer cards
          Array(10)
            .fill('')
            .map((_, index) => <ShimmerCard key={index} />)
        ) : datas.length ? (
          // If there are saved PDFs, display each PDF as a Card
          datas.map(data => <Card key={data._id} pdfPath={data.path} />)
        ) : (
          // If there are no saved PDFs, display a message
          <div className='text-4xl font-bold mt-20 text-white'>
            No Saved Data Available
          </div>
        )}
      </div>
    </div>
  )
}

export default SavedPDFs
