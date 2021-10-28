import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        // 112px is mt-28
        <div className='h-[calc(100vh-168px-112px)] '>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='relative w-screen h-screen '>
                    <img
                        src='/images/mandala-1.svg'
                        alt='hero pic'
                        className=' absolute z-hero bottom-0 w-[60%] translate-y-1/2 -translate-x-1/2 opacity-[0.35]'
                    />
                    <img
                        src='/images/mandala-2.svg'
                        alt='hero pic'
                        className='absolute z-hero w-[40%] opacity-[0.35] right-0  translate-x-1/2 top-20'
                    />
                </div>
            </div>
            <div className='max-w-4xl  mx-auto mt-28 text-center'>
                <h1 className='text-5xl mt-10 text-gray-700 font-bold uppercase drop-shadow-xl tracking-wider font-title'>
                    Hyvinvointi- ja Kauneushoitola Luminella
                </h1>
                <p className='text-2xl text-gray-500 mt-10'>
                    Hyvinvointi- ja Kauneushoitola Luminella sijaitsee
                    Myyrmäessä kävelymatkan (5min) päässä juna-asemalta
                    osoitteessa Leiritie 2.
                </p>
                <p className='text-2xl text-gray-500 mt-3 mb-14'>
                    Oven edessä on parkkipaikka kahdelle autolle ja lisää
                    parkkitilaa löytyy hoitolan välittömästä läheisyydestä.
                </p>

                <div className='space-x-8 flex justify-center relative z-20'>
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
