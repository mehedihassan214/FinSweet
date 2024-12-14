import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const PrevArrow = ({onClick}) => {
  return (
    <div className='w-[50px] h-[50px] rounded-full bg-blue-500 text-white flex justify-center items-center cursor-pointer absolute right-20 bottom-0 z-10' onClick={onClick}>
    <FaChevronLeft />
</div>
  )
}

export default PrevArrow