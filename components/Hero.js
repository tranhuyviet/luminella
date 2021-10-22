import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        // 112px is mt-28
        <div className='h-[calc(100vh-168px-112px)]'>
            <img
                src='/images/hero-pic-3.jpeg'
                alt='hero pic'
                className='w-full h-screen object-scale-down xl:object-fill absolute inset-0 z-hero'
            />
            <div className='max-w-3xl  mx-auto mt-28 text-center'>
                <h1 className='text-4xl mt-10 text-gray-700 font-semibold uppercase drop-shadow-lg tracking-wider font-title'>
                    Hyvinvointi- ja Kauneushoitola Luminella
                </h1>
                <p className='text-xl text-gray-400 mt-10'>
                    Hyvinvointi- ja Kauneushoitola Luminella sijaitsee
                    Myyrmäessä kävelymatkan (5min) päässä juna-asemalta
                    osoitteessa Leiritie 2.
                </p>
                <p className='text-xl text-gray-400 mt-3'>
                    Oven edessä on parkkipaikka kahdelle autolle ja lisää
                    parkkitilaa löytyy hoitolan välittömästä läheisyydestä.
                </p>
                <p className='text-xl text-gray-400 mt-3 mb-3'>
                    <span className='font-semibold'>Aukioloajat:</span> Ma - La
                    (Sopimuksen mukaan)
                </p>
                <p className='text-xl text-gray-400 mt-3 mb-3'>
                    <span className='font-semibold'>Osoite:</span> Leiritie 2,
                    01600, Vantaa
                </p>
                <p className='text-xl text-gray-400 mt-3 mb-14'>
                    <span className='font-semibold'>Sähköposti:</span>{' '}
                    luminellakauneus@gmail.com
                </p>
                <Link href='https://slotti.fi/booking/hyvinvointi-jakauneushoitolaluminella/'>
                    <a className='btn'>Nettia Ajanvaraus</a>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
