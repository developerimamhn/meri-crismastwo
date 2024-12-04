import React from 'react';
import Image from "next/image";
import image3 from './image/image3.png';

const HeroArea = () => {
    return (
        <div>
            <main>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="pt-[20px] sm:pt-[40px] lg:pt-[56px] merryHeading text-[50px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[130px] 2xl:text-[160px]">Merry Christmas</h1>
                    <p  className="text-center elevatePragraph text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]">Elevate your Christmas with our token: pure festive joy wrapped <br/> in a memorable experience</p>
                    <button className='mt-[16px] sm:mt-[20px] lg:mt-[22px] btm-new text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[10px] sm:py-[12px] md:py-[15px] lg:py-[18px] xl:py-[19px] 2xl:py-[20px] px-[18px] sm:px-[20px] md:px-[22px] lg:px-[24px] xl:px-[26px]  2xl:px-[30px] rounded-[66px] flex justify-center items-center'>Buy Christmas Token</button>
                    <Image className='pt-[60px] md:pt-[80px] lg:pt-[110px] xl:pt-[130px] 2xl:pt-[155px]' src={image3} alt=''/>
                </div>
            </main>
        </div>
    );
};

export default HeroArea;