import { bgColor } from '../../../utils/constants'
import './shimmer.css'

const ShimmerCard = () => (
  <div className='w-[250px] m-2 sm:m-5 animate-pulse'>
    <div
      className={`bg-blue-300 relative p-1 w-full rounded h-[350px] shadow flex-col flex justify-between`}
    >
      <div
        className={` bg-blue-300 h-6 w-5 absolute top-3 right-3 rounded-full animate-pulse `}
      />
      <div className={`${bgColor} w-full h-full grid place-items-center`}>
        <span className='loader2'></span>
      </div>
      <div
        className={`${bgColor} mt-1 w-full grid place-items-center bg-blue-300 h-12  opacity0`}
      >
        <span className='loader'></span>
      </div>
    </div>
  </div>
)

export default ShimmerCard
