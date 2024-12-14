import React from 'react'
import workCard1 from '../assets/workCard1.svg'
import workCard2 from '../assets/workCard2.png'
import workCard3 from '../assets/workCard3.png'
import workCard4 from '../assets/workCard4.png'

const WorkCard = () => {
    const cardWork = [
        {
            url: <img src={workCard1} alt="" />,
            title: 'Strategy',
            des: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            url: <img src={workCard2} alt="" />,
            title: 'Wireframing',
            des: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            url: <img src={workCard3} alt="" />,
            title: 'Design',
            des: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            url: <img src={workCard4} alt="" />,
            title: 'Development',
            des: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        }
    ]

    return (
        <>

            <div className='flex flex-wrap gap-x-[25px] gap-y-12'>
                {
                    cardWork.map(({ url, title, des, index }) => (
                        <div key={index} className='w-[303px]'>
                            {url}
                            <h3 className='font-pop font-semibold text-black text-[32px] mt-[25px]'>{title}</h3>
                            <p className='font-pop font-[400] text-work_para text-[16px] w-[383px] mt-[8px]'>{des}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default WorkCard