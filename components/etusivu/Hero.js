import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        // 112px is mt-28
        <div className='h-[calc(100vh-168px)] md:h-[calc(100vh-168px-116px)] '>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='relative w-screen h-screen'>
                    <img
                        src='/images/mandala-1.svg'
                        alt='hero pic'
                        className=' absolute z-hero sm:bottom-10 sm:left-10 hidden opacity-[0.25] sm:block sm:w-[60%] sm:translate-y-1/2 sm:-translate-x-1/2 sm:opacity-[0.35]'
                    />
                    <img
                        src='/images/mandala-2.svg'
                        alt='hero pic'
                        className='absolute z-hero w-[80%] opacity-[0.25] sm:w-[40%] sm:opacity-[0.35] right-10  translate-x-1/2 top-20'
                    />
                </div>
            </div>
            <div className='md:max-w-4xl mx-auto sm:mt-20 md:mt-28 text-center px-4'>
                <h1 className='text-2xl sm:text-4xl md:text-5xl mt-10 text-gray-700 font-bold uppercase drop-shadow-xl tracking-wider font-title'>
                    Hyvinvointi- ja Kauneushoitola Luminella
                </h1>
                <p className='text-lg sm:text-xl md:text-2xl text-gray-500 mt-6 sm:mt-10'>
                    Hyvinvointi- ja Kauneushoitola Luminella sijaitsee
                    Myyrmäessä kävelymatkan (5min) päässä juna-asemalta
                    osoitteessa Leiritie 2.
                </p>
                <p className='text-lg sm:text-xl md:text-2xl text-gray-500 mt-3 mb-8 sm:mb-14'>
                    Oven edessä on parkkipaikka kahdelle autolle ja lisää
                    parkkitilaa löytyy hoitolan välittömästä läheisyydestä.
                </p>
                {/* bg-red-200 sm:flex-row sm:space-x-8 sm:space-y-0 sm:items-center justify-center relative z-20 */}
                <div className='space-y-4 space-x-0 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-8'>
                    <Link href='https://slotti.fi/booking/hyvinvointi-jakauneushoitolaluminella/'>
                        <a className='btn'>Netti Ajanvaraus</a>
                    </Link>

                    <Link href='https://www.facebook.com/Luminella-1449576941995360/?fref=ts'>
                        <a className='btn'>Meidän Facebook</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
