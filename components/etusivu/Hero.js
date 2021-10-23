import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
const Hero = () => {
    return (
        // 112px is mt-28
        // <div className='h-[calc(100vh-168px-112px)] relative'>
        <div className='h-[600] mt-10 relative'>
            {/* <img
                src='/images/hero-pic-3.webp'
                alt='hero pic'
                className='w-full h-screen object-scale-down xl:object-fill absolute inset-0 z-hero'
            /> */}
            <div className=''>
                <video
                    autoPlay
                    muted
                    loop
                    className='h-[600px] w-full object-center object-cover filter brightness-75'
                >
                    <source
                        src='/videos/hero-video.mp4'
                        type='video/mp4'
                        className=''
                    />
                </video>
            </div>
            <div className=' text-center absolute inset-0 flex justify-center items-center'>
                <div className='max-w-3xl  mx-auto '>
                    <Fade bottom>
                        <>
                            <h1 className='text-4xl mt-10 text-gray-200 font-semibold uppercase drop-shadow-lg tracking-wider font-title'>
                                Hyvinvointi- ja Kauneushoitola Luminella
                            </h1>
                            <p className='text-xl text-gray-200 mt-10'>
                                Hyvinvointi- ja Kauneushoitola Luminella
                                sijaitsee Myyrmäessä kävelymatkan (5min) päässä
                                juna-asemalta osoitteessa Leiritie 2.
                            </p>
                            <p className='text-xl text-gray-200 mt-3 mb-14'>
                                Oven edessä on parkkipaikka kahdelle autolle ja
                                lisää parkkitilaa löytyy hoitolan välittömästä
                                läheisyydestä.
                            </p>
                        </>
                    </Fade>
                    {/* <p className='text-xl text-gray-400 mt-3 mb-3'>
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
                </p> */}
                    <div className='space-x-8 flex justify-center'>
                        <Fade left>
                            <Link href='https://slotti.fi/booking/hyvinvointi-jakauneushoitolaluminella/'>
                                <a className='btn'>Nettia Ajanvaraus</a>
                            </Link>
                        </Fade>
                        <Fade right>
                            <Link href='https://www.facebook.com/Luminella-1449576941995360/?fref=ts'>
                                <a className='btn'>Meidän Facebook</a>
                            </Link>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
