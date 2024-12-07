"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import image12 from '../header/image/image12.png';
import image13 from '../header/image/image13.png';

const Page2 = () => {
    const [text, setText] = useState("COPY");

    const handleChangeText = () => {
        setText("Copied!");

        // Set a timeout to revert the text back to "COPY" after 10 seconds
        setTimeout(() => {
            setText("COPY");
        }, 2000);
    };
    return (
        <div className="" id='tokenomics'>
            <div className='container mx-auto'>
                <div className='flex items-end justify-between gap-[30px] mt-[50px] sm:mt-[70px] md:mt-[100px] lg:mt-[130px] xl:mt-[160px] 2xl:mt-[190px]'>
                    <div className='mb-[-8%] relative z-[1]'>
                        <Image src={image12} alt=''/>
                    </div>
                    <div className='w-full flex-1'>
                    <h1 className="md:w-[300px] xl:w-[350px] 2xl:w-[500px] !leading-[120%] merryHeading text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] !text-[#fff]">Get Some ETH</h1>
                    <p className="!text-left !text-[#fff] elevatePragraph text-[13px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] !leading-[180%] mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-[30px] xl:mb-[35px] 2xl:mb-[40px]">Elevate your Christmas this year with our token, designed to bring festive joy and the potential for lasting rewards. It’s more than just an investment; <br/>
                    it’s an experience crafted to add excitement and holiday cheer. Make this season unforgettable with a blend of profit and merriment—join us for a truly memorable holiday journey!
                    </p>
                    <div id='copy' className='flex justify-between items-center w-full sm:w-[70%] p-[8px] pl-[16px] rounded-full text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] relative z-50'><input type="text" className='w-full bg-transparent border-none placeholder:text-[#000] relative z-50' placeholder='CJ8oT6dHzyHsXBq6JdhRHiRto3Le96pHyPchqfYdPxhN' /><button title={text} className='copy-styling-items py-[8px] sm:py-[10px] xl:py-[12px] 2xl:py-[14px] px-[14px] sm:px-[16px] xl:px-[22px] 2xl:px-[24px] rounded-full ml-[32px] duration-300  text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[180%] relative z-50' onClick={handleChangeText}>{text}</button></div> 
                    </div>
                </div>
            </div>
            <Image className="w-full" src={image13} alt=''/>
        </div>
    );
};

export default Page2;