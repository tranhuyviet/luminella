import React from 'react';

const Hero = () => {
    return (
        <section className='relative -mt-6'>
            {/* <img
                src='/images/hero-hinnasto2.webp'
                alt='hero hinnasto'
                className='w-full h-[500px] object-bottom object-cover'
            /> */}
            <div className=''>
                <video
                    autoPlay
                    muted
                    loop
                    className='h-[600px] w-full object-center object-cover filter brightness-50'
                >
                    <source
                        src='/videos/hinnasto-hero.mp4'
                        type='video/mp4'
                        className=''
                    />
                </video>
            </div>
            <div className='absolute inset-0 text-gray-50'>
                <div className='flex flex-col justify-center items-center h-full max-w-4xl mx-auto'>
                    <h1 className='text-6xl font-title tracking-wide drop-shadow-lg uppercase font-semibold'>
                        Hinnasto
                    </h1>
                    <p className='text-2xl mt-4 font-semibold'>
                        Arvoisa asiakas!
                    </p>
                    <p className='text-xl mt-4 text-gray-100'>
                        Jos et pääse tulemaan sovittuna aikana, pyydämme sinua
                        ilmoittamaan siitä viimeistään 24 h / vuorokautta
                        aikaisemmin. Muussa tapauksessa joudumme veloittamaan 50
                        % varaamasi palvelun arvosta.
                    </p>
                    <p className='text-xl text-gray-100 mt-4'>
                        Exuviance-sarjahoidot 7-14 vuorokauden välein: Joka
                        kolmas hoito -50%
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
