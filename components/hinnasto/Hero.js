import React from 'react';

const Hero = () => {
    return (
        <section className=' relative '>
            <img
                src='/images/exuviance_product.webp'
                alt='hero hinnasto'
                className='w-full h-[600px] object-bottom object-cover filter brightness-75'
            />
            <div className='absolute inset-0 text-gray-50'>
                <div className='flex flex-col justify-center items-center h-full max-w-4xl mx-auto'>
                    <h1 className='text-6xl font-title tracking-wide drop-shadow-lg uppercase '>
                        Hinnasto
                    </h1>
                    <p className='text-2xl mt-4 font-semibold drop-shadow-lg'>
                        Arvoisa asiakas!
                    </p>
                    <p className='text-xl mt-4  drop-shadow-lg'>
                        Jos et pääse tulemaan sovittuna aikana, pyydämme sinua
                        ilmoittamaan siitä viimeistään 24 h / vuorokautta
                        aikaisemmin. Muussa tapauksessa joudumme veloittamaan 50
                        % varaamasi palvelun arvosta.
                    </p>
                    <p className='text-xl  mt-4 drop-shadow-lg'>
                        Exuviance-sarjahoidot 7-14 vuorokauden välein: Joka
                        kolmas hoito -50%
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
