"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import logo from './image/Group 10.png';
import image from './image/image.png';
import image1 from './image/image1.png';
import Countory from './Countory.js'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className=''>
            <header className=' container mx-auto flex justify-between items-center py-[12px] sm:py-[16px] relative rounded-[80px] px-[24px] bg-[#10B4A9] mt-[15px] md:mt-[18px] xl:mt-[26px] 2xl:mt-[30px]'>
                {/* {   
                toggle? 
                    <LiaBarsSolid onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden'/>
                    :
                    <VscChromeClose onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden'/>
                } */}
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[26px] absolute' />
                    </div>
                </div>
                <h1 className='Froggo-Logo w-[75px] sm:w-[80px] md:w-[85px] lg:w-[90px] xl:w-[95px] 2xl:w-[98.54px]'><Image src={logo} alt=''/></h1>
                <nav ref={menuRef} className={`navbar-items-main flex-col sm:flex-row flex justify-center items-center absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 gap-[20] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]`} href="#about">about</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]' href="#tokenomics">tokenomics</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]' href="#howtobuy">how to buy</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex justify-center items-center gap-[10px] sm:pl-[10px] md:pl-[12px] lg:pl-[15px] xl:pl-[18px] 2xl:pl-[20px]' href="/"><Countory/></Link>
                <div>
                    <button className='btm-new text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[10px] sm:py-[12px] md:py-[15px] lg:py-[18px] xl:py-[19px] 2xl:py-[20px] px-[18px] sm:px-[20px] md:px-[22px] lg:px-[24px] xl:px-[26px] xl:px-[28px] 2xl:px-[30px] rounded-[66px] flex justify-center items-center'>Connect Wallet</button>
                </div>
                </nav>
                
            </header>
        </div>
    );
};

export default Navbar;