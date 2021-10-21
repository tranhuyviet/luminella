import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className=''>
            <img
                src='/images/hero-pic-3.jpeg'
                alt='hero pic'
                className='w-full h-screen object-scale-down xl:object-fill absolute inset-0 z-hero'
            />
            <div className='max-w-3xl  mx-auto mt-20 text-center'>
                <h1 className='text-6xl mt-10 text-gray-700 font-semibold'>
                    Hyvinvointi- ja Kauneushoitola Luminella
                </h1>
                <p className='text-xl text-gray-500 mt-10'>
                    Hyvinvointi- ja Kauneushoitola Luminella sijaitsee
                    Myyrmäessä kävelymatkan (5min) päässä juna-asemalta
                    osoitteessa Leiritie 2.
                </p>
                <p className='text-xl text-gray-500 mt-2'>
                    Oven edessä on parkkipaikka kahdelle autolle ja lisää
                    parkkitilaa löytyy hoitolan välittömästä läheisyydestä.
                </p>
                <p className='text-xl text-gray-500 mt-2 mb-14'>
                    Aukioloajat: Ma - La (Sopimuksen mukaan)
                </p>
                <Link href='/nettiajanvaraus'>
                    <a className='btn'>Nettia Ajanvaraus</a>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
