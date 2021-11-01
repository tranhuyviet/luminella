import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='h-[calc(100vh-200px)] flex justify-center items-center relative'>
            <div className='text-center text-gray-700 '>
                <h1 className='sectionTitle'>Virhe 404</h1>
                <p className='text-xl mt-4 lg:text-2xl lg:mt-6'>
                    Emme löytäneet etsimääsi sivua.
                </p>
                <Link href='/'>
                    <a className='btn inline-block mt-4 lg:mt-6 relative z-20'>
                        takaisin etusivulle
                    </a>
                </Link>
            </div>
            <img
                src='/images/mandala-1.svg'
                alt='mandala'
                className='absolute opacity-20 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]'
            />
        </div>
    );
};

export default NotFound;
