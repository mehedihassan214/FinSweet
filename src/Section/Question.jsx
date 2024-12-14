import React from 'react'
import Container from '../Components/Layouts/Container'
import Flex from '../Components/Layouts/Flex'
import FeatureQus from '../Components/subComponent/FeatureQus';

const Question = () => {
  
    return (
        <section className='py-[128px] bg-[#fff]'>
            <Container>
                <Flex className={' gap-x-[136px]'}>
                    <div className='w-[327px]'>
                        <h3 className='font-pop font-semibold text-[#282938] text-[38px] leading-[56px]'> Frequently asked questions</h3>
                        <p className='font-pop font-[400] text-[#2405F2] text-opacity-[0.7] text-[16px] leading-[28px] mt-[16px] w-full'>Contact us for more info</p>
                    </div>
                    <div className='w-[846px] '>
                        <FeatureQus/>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Question