import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='sectionWrap  text-gray-500 border-t shadow-md'>
            <div className='grid grid-cols-3 max-w-6xl mx-auto'>
                <div className='text-left mx-auto'>
                    <p className='text-md  mt-3 mb-3'>
                        <span className='font-semibold'>Aukioloajat:</span> Ma -
                        La (Sopimuksen mukaan)
                    </p>
                    <p className='text-md  mt-3 mb-3'>
                        <span className='font-semibold'>Osoite:</span> Leiritie
                        2, 01600, Vantaa
                    </p>
                    <p className='text-md  mt-3 mb-3'>
                        <span className='font-semibold'>Sähköposti:</span>{' '}
                        luminellakauneus@gmail.com
                    </p>
                    <p className='text-md  mt-3 mb-3'>
                        <span className='font-semibold'>Christina:</span>{' '}
                        040-414 0214
                    </p>
                    <p className='text-md  mt-3 mb-3'>
                        <span className='font-semibold'>Tuula:</span> 050-494
                        4652
                    </p>
                    <p className='text-md  mt-3 mb-3'>
                        <span className='font-semibold'>Katja:</span> 044-977
                        9505
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src='/logo.jpeg' alt='logo' className='' />

                    <p className='mt-4 font-bold tracking-wide'>
                        Copyright &copy; <span>{year}</span> Luminella.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src='/images/81.gif' alt='centificate' />
                    <p className='text-md mt-6'>
                        <span className='font-semibold'>Maksuvälineet:</span>{' '}
                        pankkikortti, käteinen, visa, visa electron ja
                        mastercard.
                    </p>
                    <div className='flex justify-center items-center mt-4'>
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
        </footer>
    );
};

export default Footer;
