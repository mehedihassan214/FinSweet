import React from 'react'
import Container from '../Components/Layouts/Container'
import Flex from '../Components/Layouts/Flex'
import bannerPic from '../assets/banner.svg'

const Banner = () => {
    return (
        <section className='bg-[#1C1E53] pt-[60px] sm:pt-[100px] md:pt-[126px] pb-[100px] sm:pb-[128px] '>
            <Container>
                <Flex className={'gap-x-[60px] flex-wrap md:flex-nowrap gap-y-10 md:gap-y-0'}>
                    <div className='w-[582px] px-3 xl:px-0'>
                        <h2 className='font-pop font-semibold text-white text-[30px] sm:text-[46px] md:text-[30px] lg:text-[40px] xl:text-[54px] leading-[40px]  md:leading-[45px] lg:leading-[60px] xl:leading-[74px]'>Building stellar <span className='block'>websites for early</span>  startups</h2>
                        <p className='font-pop font-base text-4 text-banner_para mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className=' flex gap-x-10 mt-12'>
                            <button className='bg-[#FCD980] px-[30px] md:px-[20px] lg:px-[50px] xl-px-[56px] py-[10px] md:py-[16px] text-[12px] md:text-[10] lg:text-[10px] xl:text-[18px] text-[#1B1C2B] font-pop font-semibold rounded-[41px] '>View our work</button>
                            <div className='flex justify-center items-center gap-x-4'>
                                <p className='text-[white] font-pop font-medium text-[12px] md:text-[10px] lg:text-[10px] xl:text-[16px]'> View Pricing</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 xl:px-0 xl:w-[638px] sm:flex sm:items-center sm:justify-center'>
                        <img src={bannerPic} alt="" />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner