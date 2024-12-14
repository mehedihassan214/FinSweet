import React, { useState } from 'react';
import Container from '../Layouts/Container';
import Flex from '../Layouts/Flex';
import buildPic from '../../assets/buildPic.png';

const Build = () => {
    const [inputValues, setInputValues] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputValues = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = inputValues;

        if (!name || !email || !message) {
            setErrorMessage('All fields are required.');
        } else {
            setErrorMessage('');
            // Process the form submission
            console.log('Form submitted:', inputValues);
        }
    };

    return (
        <section className='pb-[128px]'>
            <Container>
                <Flex>
                    <div className='relative'>
                        <img src={buildPic} alt="Build Pic" />
                        <div className='absolute w-full h-full top-0 left-0 bg-[#1C1E5380] bg-opacity-[50%] pt-[96px] pb-[261px]'>
                            <h3 className='w-[464px] ml-[96px] text-[54px] text-white font-pop font-semibold leading-[74px]'>
                                Building stellar <span className='block'>websites for</span> early startups
                            </h3>
                            <p className='w-[464px] ml-[96px] text-[16px] text-white font-pop font-[500] leading-[28px] mt-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                            </p>
                        </div>
                    </div>
                    <div className='w-[624px] px-[96px] pt-[96px] pb-[48px] bg-[#1C1E53]'>
                        <h4 className='font-pop font-[400] text-[32px] text-white '>Send inquiry</h4>
                        <p className='font-pop font-[500] text-[16px] text-white leading-[28px] mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <form className='flex flex-col gap-y-4 mt-10' onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className='py-[18px] bg-[#1C1E53] w-[432px] border border-white border-opacity-[0.5] text-white px-4'
                                onChange={handleInputValues}
                                value={inputValues.name}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className='py-[18px] bg-[#1C1E53] w-[432px] border border-white border-opacity-[0.5] text-white px-4'
                                onChange={handleInputValues}
                                value={inputValues.email}
                            />
                            <input
                                type="text"
                                name="message"
                                placeholder="Your Message"
                                className='py-[18px] bg-[#1C1E53] w-[432px] border border-white border-opacity-[0.5] text-white px-4'
                                onChange={handleInputValues}
                                value={inputValues.message}
                            />
                            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                            <button type="submit" className='mt-4 py-[12px] bg-[#4CAF50] text-white'>Send Inquiry</button>
                        </form>
                        <div className='flex justify-center items-center gap-x-4 mt-6'>
                            <p className='text-white font-pop font-medium text-[16px]'>Get in touch with us</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
                            </svg>
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Build;
