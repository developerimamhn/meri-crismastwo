import React from 'react';
import Image from 'next/image';
import image8 from '../header/image/image8.png';
import image9 from '../header/image/image9.png';
import image10 from '../header/image/image10.png';
import image11 from '../header/image/image11.png';



const Page1 = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <div className='mx-auto text-center'>
                <h1 className="!leading-[120%] merryHeading text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px]">How To Buy</h1>
                    <p className="elevatePragraph text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[17px] text-center ">Learn the simple steps to buy our token and start your <br/> holiday investment journey today!</p>
                </div>
                <div className=''>
                    <div className="flex justify-between items-center gap-[50px] flex-col md:flex-row">
                        <div className='relative'>
                            <Image className="" src={image8} alt=''/>
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
                                <div className="text-center ">
                                    <h1 className="w-[400px] md:w-[300px] xl:w-[350px] 2xl:w-[500px] text-center !leading-[120%] merryHeading text-[45px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[70px] 2xl:text-[80px] !text-[#000]">How To Buy</h1>
                                    <p className="px-[15%] sm:px-0 !text-[#000] elevatePragraph text-[13px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] text-center !leading-[180%] w-fit">Get MetaMask for free on your mobile by downloading it <br/> from your app store.
                                    For desktop, simply download the Chrome  wallet in minutes and be ready  to start your crypto journey!
                                    </p>
                                </div>
                            </div>
                        </div>    
                        <div className='relative'>
                            <Image className="" src={image9} alt=''/>
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
                                <div className="text-center ">
                                    <h1 className="w-[400px] md:w-[300px] xl:w-[350px] 2xl:w-[500px] text-center !leading-[120%] merryHeading text-[45px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[70px] 2xl:text-[80px] !text-[#000]">Get Some ETH</h1>
                                    <p className="px-[15%] sm:px-0 !text-[#000] elevatePragraph text-[13px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] text-center !leading-[180%] w-fit">Ensure your wallet has enough ETH for the $Christmas token swap. 
                                    You can purchase ETH directly on MetaMask or buy it on an exchange like Binance, then transfer it to your wallet. This way, you're all set to join in the holiday excitement!
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="flex justify-between items-center gap-[50px] flex-col md:flex-row">
                    <div className='relative'>
                            <Image className="" src={image10} alt=''/>
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
                                <div className="text-center ">
                                    <h1 className="w-[400px] md:w-[300px] xl:w-[350px] 2xl:w-[500px] text-center !leading-[120%] merryHeading text-[45px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[70px] 2xl:text-[80px] !text-[#000]">go to uniswap</h1>
                                    <p className="px-[15%] sm:px-0 !text-[#000] elevatePragraph text-[13px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] text-center !leading-[180%] w-fit">Uniswap is a decentralized exchange for swapping cryptocurrencies. 
                                    It uses liquidity pools, where users provide funds and earn rewards. Trade directly from your wallet, without needing a centralized platform.
                                    </p>
                                </div>
                            </div>
                        </div>    
                        <div className='relative'>
                            <Image className="" src={image11} alt=''/>
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
                                <div className="text-center ">
                                    <h1 className="w-[400px] md:w-[300px] xl:w-[350px] 2xl:w-[550px] text-center !leading-[120%] merryHeading text-[45px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[70px] 2xl:text-[80px] !text-[#000]">ETH to $Christmas</h1>
                                    <p className="px-[15%] sm:px-0 !text-[#000] elevatePragraph text-[13px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] text-center !leading-[180%] w-fit">Swap ETH for $Christmas effortlessly, with no taxes on the transaction. 
                                    Adjust slippage to ensure smooth swaps during high volatility. Enjoy fast and seamless transactions, all in one go!
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;