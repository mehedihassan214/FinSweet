import React from 'react'
import projectCard1 from '../../assets/projectCard1.png'
import projectCard2 from '../../assets/projectCard2.png'
import projectCard3 from '../../assets/projectCard3.png'
import Flex from '../Layouts/Flex'

const ProjectCard = () => {
    return (
        <>
            <Flex className={'gap-x-8 mt-16 flex-col sm:flex-row px-3 xl:px-0'}>
                <div className='relative '>
                    <img src={projectCard1} alt="" className='w-[843px] h-full' />
                    <div className='pt-[312px] pb-[76px]  h-full w-[396px] absolute top-0 left-0 lg:bg-custom_gradiant duration-[.3s] hidden lg:block ' >
                        <h4 className='font-pop font-semibold text-[24px] text-white leading-[36px] ml-12 lg:mt-[-60px] xl:mt-0'>Workhub office Webflow <span className='inline-block'> Webflow Design </span></h4>
                        <p className='font-pop font-[400] text-[16px] text-white leading-[28px] mt-4 ml-12'>Euismod faucibus turpis eu gravida <span className='inline-block'> mi. Pellentesque et velit aliquam </span></p>

                        <div className='flex items-center gap-x-4 ml-12 mt-10'>
                            <p className='font-pop font-[500] text-[16px] text-[#FCD980] '>View More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="#FCD980">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='mt-10 sm:mt-0'>
                    <div className='relative'>
                        <img src={projectCard2} alt="" />
                        <div className='absolute w-full h-full top-0 left-0 lg:bg-[#1C1E53]  pt-[129px] pb-[45px] hover:bg-opacity-[0.9] opacity-0 hover:opacity-100 duration-[.3s] hidden lg:block'>
                            <h2 className='font-pop font-semibold text-[24px] text-white leading-[36px] ml-12 lg:mt-[-20px] xl:mt-0'>Unisaas Website<span className='block'>Design</span></h2>
                            <div className='flex items-center gap-x-4 ml-12 mt-[10px] '>
                                <p className='font-pop font-[500] text-[16px] text-[#FCD980] '>View More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="#FCD980">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className='relative mt-2 sm:mt-0'>
                        <img src={projectCard3} alt="" className='mt-8 ' />
                        <div className='absolute w-full h-full top-0 left-0 lg:bg-[#1C1E53]  pt-[129px] pb-[45px] hover:bg-opacity-[0.9] opacity-0 hover:opacity-100 duration-[.3s] hidden lg:block'>
                            <h2 className='font-pop font-semibold text-[24px] text-white leading-[36px] ml-12 lg:mt-[-20px]  xl:mt-0'>Unisaas Website<span className='block'>Design</span></h2>
                            <div className='flex items-center gap-x-4 ml-12 mt-[10px] '>
                                <p className='font-pop font-[500] text-[16px] text-[#FCD980] '>View More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="#FCD980">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Flex>
        </>
    )
}

export default ProjectCard