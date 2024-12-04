import React from 'react';
import image2 from '../header/image/image2.png';
import image5 from '../header/image/image7.png';
import Image from 'next/image';

const Page = () => {
    return (
        <div className='relative overflow-hidden w-full '>
            {/* <Image className="absolute top-0" src={image2} alt=''/> */}
            <Image className='w-full' src={image2} alt=''/>
            <div className='container mx-auto sm:px-[0] px-[24px]'>
                
                <div className='flex flex-col sm:flex-row pb-[140px] sm:pb-[120px] md:pb-[120px] lg:pb-[250px] xl:pb-[300px] 2xl:pb-[400px]'>
                    <div className='flex-1 relative z-20'>
                    <h1 className="!leading-[144px] merryHeading text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px]">Merry Christmas Token</h1>
                    <p  className="text-left elevatePragraph text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[17px]">The holidays are coming, and so is your chance to profit! With the MCT token, you can take advantage of seasonal market trends and join in on the excitement of a potential pump. MCT is the second project in a successful holiday ecosystem—its first token achieved an impressive 35x return! By investing in MCT, <br/><br/>   
                    you’re not only setting yourself up for gains but also opening the door to bonus NFTs for even more earning potential. Each NFT box offers unique rewards, adding an extra layer of excitement and value. Don’t miss out on this holiday investment opportunity—get in early and earn together with the community!</p>
                    <div className="flex gap-[10px] xl:gap-[16px] mb-[111px]">
                        <button className='mt-[16px] sm:mt-[20px] lg:mt-[22px] btm-new text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[10px] sm:py-[12px] md:py-[15px] lg:py-[18px] xl:py-[19px] 2xl:py-[20px] px-[18px] sm:px-[20px] md:px-[22px] lg:px-[24px] xl:px-[26px]  2xl:px-[30px] rounded-[66px] flex justify-center items-center leading-[22px]'>Buy Now Token</button>
                        <button className='mt-[16px] sm:mt-[20px] lg:mt-[22px] btm-new text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[10px] sm:py-[12px] md:py-[15px] lg:py-[18px] xl:py-[19px] 2xl:py-[20px] px-[18px] sm:px-[20px] md:px-[22px] lg:px-[24px] xl:px-[26px]  2xl:px-[30px] rounded-[66px] flex justify-center items-center leading-[22px] !bg-[#FAFFFF]'>Join Our Telegram</button>
                    </div>
                    </div>
                    <div className='flex-1'>
                    
                    </div>
                    
                </div>
                
            </div>
            <Image className='absolute bottom-[0] z-10' src={image5} alt=''/>
        </div>
    );
};

export default Page;