import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
    return (
        <div className='w-[50px] h-[50px] rounded-full bg-blue-500 text-white flex justify-center items-center cursor-pointer absolute right-0 bottom-0' onClick={onClick}>
        <FaChevronRight />
    </div>
    )
}

export default NextArrow