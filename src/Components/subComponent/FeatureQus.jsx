import React, { useState } from 'react'
import { IoIosAdd, IoIosClose } from "react-icons/io";

const FeatureQus = () => {
    const [isActive, setIsActive] = useState('01')

    const toggleButton = (id) => {
        setIsActive(((prevId) => {
            return prevId === id ? null : id
        }))
    }


    const freequentQuestions = [
        {
            id: '01',
            title: 'How much time does it take?',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            // icon: <IoIosAdd  />
        },
        {
            id: '02',
            title: 'How much time does it take?',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            // icon: <IoIosAdd />
        },
        {
            id: '03',
            title: 'How much time does it take?',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            // icon: <IoIosAdd />
        },
        {
            id: '04',
            title: 'How much time does it take?',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            // icon: <IoIosAdd />
        },
        {
            id: '05',
            title: 'How much time does it take?',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            // icon: <IoIosAdd />
        }

    ]
    return (
        <div className='gap-y-8'>
            {
                freequentQuestions.map(({ id, title, des, index }) => (
                    <div key={index} className='flex border-b border-black justify-between pr-3 pl-3'>
                        <div className='flex'>
                            <div className='text-[24px] text-[#2405F2] font-pop font-[400]'>{id}</div>
                            <div>
                                <h2 className='text-[24px] text-[#282938] font-pop font-[500] mb-4'>{title}</h2>
                                <p className={`text-[18px] text-[#282938] text-opacity-[0.7] font-pop font-[500] leading-[32px] w-[624px]   ${isActive === id ? 'opacity-100 block' : 'opacity-0 hidden'}`}> {des}</p>
                            </div>
                        </div>
                        <div >
                            {
                                isActive === id ? (
                                    <IoIosClose onClick={() => (toggleButton(id))} />
                                ) : (
                                    <IoIosAdd onClick={() => (toggleButton(id))} />
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FeatureQus
