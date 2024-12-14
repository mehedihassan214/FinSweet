import React from 'react'
import Container from '../Components/Layouts/Container'
import Flex from '../Components/Layouts/Flex'
import WorkCard from '../Components/WorkCard'

const Work = () => {
    return (
        <section className='bg-[#F4F6FC] py-[129px]'>
            <Container>
                <Flex className={'gap-x-[142px] px-3 flex-wrap sm:flex-nowrapwrap sm:px-0 sm:flex-col lg:flex-row sm:items-center sm:justify-center '}>
                    <div className='w-[405px]'>
                        <h2 className='text-[48px] text-[#282938] font-pop font-semibold sm:text-center lg:text-left'>How we work</h2>
                        <p className='text-work_para text-[14px] font-pop font-[400] leading-[28px] mt-4 sm:text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur <span className='inline-block'>adipiscing elit, sed do eiusmod tempor.</span></p>
                        <div className='flex  sm:justify-center  lg:justify-start  gap-x-4  mt-4 '>
                            <p className='text-[#2405F2] text-[18px] font-pop font-[400] leading-[28px] '>Get in touch with us</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="#2405F2">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2" />
                            </svg>
                        </div>
                    </div>
                    <div className=' w-[656px] mt-10 lg:mt-0 sm:px-3 lg:px-0 '>
                        <WorkCard />          
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Work