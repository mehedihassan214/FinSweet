import React from 'react'
import Container from '../Components/Layouts/Container'
import Flex from '../Components/Layouts/Flex'
import ProjectCard from '../Components/subComponent/ProjectCard'

const Project = () => {
    return (
        <section className='bg-[#fff] py-[50px] sm:py-[128px] px-3 xl:px-0'>
            <Container>
                <div className='flex justify-between w-full flex-col sm:flex-row'>
                    <div>
                        <h2 className='font-pop font-semibold text-[35px] sm:text-[48px] text-[#282938] '>View our projects</h2>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <p className='font-pop font-[500] text-[16px] text-[#282938] '>View More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                        </svg>
                    </div>
                </div>
                <div>
                    <ProjectCard />
                </div>

            </Container>
        </section>
    )
}

export default Project