import React from 'react'
import Container from '../Components/Layouts/Container'
import Flex from '../Components/Layouts/Flex'
import clientPic from '../assets/clientPic.png'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import NextArrow from '../Components/subComponent/NextArrow';
import PrevArrow from '../Components/subComponent/PrevArrow';


const Client = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
        // className='w-[50px] h-[50px] rounded-full hover:bg-[blue] text-center hover:text-white duration-[.3s]'
    };

    return (
        <section className='py-[130px] bg-[#F4F6FC] bg-opacity-[0.5]'>
            <Container>
                <Slider {...settings}>
                    <div>
                        <div className={' flex gap-x-[110px]'} >
                            <div className='w-[327px]'>
                                <h3 className='font-pop font-semibold text-[#282938] text-[38px] leading-[56px]'>What our clients say about us</h3>
                                <p className='font-pop font-[400] text-[#282938] text-opacity-[0.7] text-[16px] leading-[28px] mt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                            </div>
                            <div className='w-[843px]'>
                                <h4 className='font-pop font-[500] text-[#282938] text-[32px] leading-[48px]'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
                                <div className='flex justify-between mt-10'>
                                    <div className='flex gap-x-2'>
                                        <img src={clientPic} alt="" className='rounded-full' />
                                        <div>
                                            <h5 className='font-pop font-[400] text-[#282938] text-[18px] '>Jenny Wilson</h5>
                                            <p className='font-pop font-[400] text-[#282938] text-[12px] '>Vice President</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={' flex gap-x-[110px]'} >
                            <div className='w-[327px]'>
                                <h3 className='font-pop font-semibold text-[#282938] text-[38px] leading-[56px]'>What our clients say about us</h3>
                                <p className='font-pop font-[400] text-[#282938] text-opacity-[0.7] text-[16px] leading-[28px] mt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                            </div>
                            <div className='w-[843px]'>
                                <h4 className='font-pop font-[500] text-[#282938] text-[32px] leading-[48px]'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
                                <div className='flex justify-between mt-10'>
                                    <div className='flex gap-x-2'>
                                        <img src={clientPic} alt="" className='rounded-full' />
                                        <div>
                                            <h5 className='font-pop font-[400] text-[#282938] text-[18px] '>Jenny Wilson</h5>
                                            <p className='font-pop font-[400] text-[#282938] text-[12px] '>Vice President</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={' flex gap-x-[110px]'} >
                            <div className='w-[327px]'>
                                <h3 className='font-pop font-semibold text-[#282938] text-[38px] leading-[56px]'>What our clients say about us</h3>
                                <p className='font-pop font-[400] text-[#282938] text-opacity-[0.7] text-[16px] leading-[28px] mt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                            </div>
                            <div className='w-[843px]'>
                                <h4 className='font-pop font-[500] text-[#282938] text-[32px] leading-[48px]'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
                                <div className='flex justify-between mt-10'>
                                    <div className='flex gap-x-2'>
                                        <img src={clientPic} alt="" className='rounded-full' />
                                        <div>
                                            <h5 className='font-pop font-[400] text-[#282938] text-[18px] '>Jenny Wilson</h5>
                                            <p className='font-pop font-[400] text-[#282938] text-[12px] '>Vice President</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default Client



















