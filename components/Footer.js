import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='text-gray-500 border-t shadow-md relative pt-8 px-8 md:pb-8'>
            <div className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 md:max-w-6xl md:mx-auto'>
                <div className='text-center md:text-left mx-auto'>
                    <p className='text-lg  mt-3 mb-3'>
                        <span className='font-semibold'>Aukioloajat:</span> Ma -
                        La (Sopimuksen mukaan)
                    </p>
                    <p className='text-lg  mt-3 mb-3'>
                        <span className='font-semibold'>Osoite:</span> Leiritie
                        2, 01600, Vantaa
                    </p>
                    <p className='text-lg  mt-3 mb-3'>
                        <span className='font-semibold'>Sähköposti:</span>{' '}
                        luminellakauneus@gmail.com
                    </p>
                    <p className='text-lg  mt-3 mb-3'>
                        <span className='font-semibold'>Christina:</span>{' '}
                        040-414 0214
                    </p>
                    <p className='text-lg  mt-3 mb-3'>
                        <span className='font-semibold'>Tuula:</span> 050-494
                        4652
                    </p>
                    <p className='text-lg  mt-3 mb-3'>
                        <span className='font-semibold'>Katja:</span> 044-977
                        9505
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center row-start-3 md:row-auto '>
                    <img src='/logo.jpeg' alt='logo' className='w-[140px]' />

                    <p className='text-lg mt-4 font-bold tracking-wide text-center'>
                        Copyright &copy; <span>{year}</span> Luminella.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center mt-4 md:mt-0'>
                    <img src='/images/81.gif' alt='centificate' />
                    <p className='text-lg mt-2 md:mt-6 text-center'>
                        <span className='text-lg font-semibold '>
                            Maksuvälineet:
                        </span>{' '}
                        pankkikortti, käteinen, visa, visa electron ja
                        mastercard.
                    </p>
                    <div className='flex justify-center items-center mt-4 '>
                        <Link href='https://www.facebook.com/Luminella-1449576941995360/?fref=ts'>
                            <img
                                src='/images/fb-logo.svg'
                                alt='facebook logo'
                                className='w-16 h-16 hover:cursor-pointer opacity-50'
                            />
                        </Link>
                        <img
                            src='/images/instagram-logo.svg'
                            alt='facebook logo'
                            className='w-16 h-16 hover:cursor-pointer opacity-50'
                        />
                        <img
                            src='/images/whatsapp-logo.svg'
                            alt='facebook logo'
                            className='w-16 h-16 hover:cursor-pointer opacity-60'
                        />
                    </div>
                </div>
            </div>
            <div className='absolute left-0 bottom-0 h-1 bg-primary-700 w-full' />
        </footer>
    );
};

export default Footer;
