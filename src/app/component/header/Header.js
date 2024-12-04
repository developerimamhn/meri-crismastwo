import React from 'react';
import Navbar from './Navbar';
import HeroArea from './HeroArea';
import image4 from './image/image4.png';
import Image from "next/image";

const Header = () => {
    return (
        <div className="relative">
            <Navbar/>
            <HeroArea/>
            <Image className='absolute bottom-0 left-0 w-full z-[-1]' src={image4} alt=''/>
        </div>
    );
};

export default Header;