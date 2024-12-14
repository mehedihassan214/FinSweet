import React from 'react'
import Container from '../Components/Layouts/Container'
import FeaturesCard from '../Components/subComponent/FeaturesCard'

const Features = () => {
  return (
    <section className='py-[80px] sm:py-[128px] bg-[#F4F6FC] '>
        <Container>
            <div className='text-center'>
                <h5 className='font-pop font-[500]  text-[16px] text-[#282938]'>Features</h5>
                <h1 className='font-pop font-semibold leading-[34px] sm:leading-[64px] text-[24px] sm:text-[48px] text-[#282938]'>Design that solves<span className='block'>problems, one product </span> at a time</h1>
            </div>
            <div className='mt-12'>
                <FeaturesCard/>
            </div>
        </Container>
    </section>
  )
}

export default Features