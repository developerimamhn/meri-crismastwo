import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image14 from '../header/image/image14.png';
import image15 from '../header/image/image15.png';
import image16 from '../header/image/image16.png';
import image17 from '../header/image/image17.png';
import image18 from '../header/image/image18.png';
import logo from '../header/image/Group 10.png';


const Footer = () => {
    return (
        <div className='relative'>
            <div className='flex justify-center items-center flex-col gap-[20px] lg:gap-[25px] xl:gap-8 2xl:gap-10'>
                <Link href='/'>
                    <Image className='w-[75px] sm:w-[85px] md:w-[95px] lg:w-[115px] xl:w-[145px] 2xl:w-[175.96px]' src={logo} alt=''/>
                </Link>
                <ul className='flex justify-center items-center gap-[12px] lg:gap-[16px] xl:gap-[22px] 2xl:gap-[24px]'>
                    <li><Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] 2xl:w-[82.37px]' src={image15} alt=''/></li>
                    <li><Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] 2xl:w-[82.37px]' src={image16} alt=''/></li>
                    <li><Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] 2xl:w-[82.37px]' src={image17} alt=''/></li>
                    <li><Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] 2xl:w-[82.37px]' src={image18} alt=''/></li>
                </ul>
            </div>
            <Image className='w-full' src={image14} alt=''/>
        </div>
    );
};

export default Footer;