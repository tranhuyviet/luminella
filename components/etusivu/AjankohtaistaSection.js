import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const AjankohtaistaSection = () => {
    return (
        <section className='sectionWrap  bg-gray-50'>
            <h1 className='sectionTitle'>Ajankohtaista</h1>
            <div className='mt-10 relative max-w-4xl mx-auto'>
                <div className='border w-full grid grid-cols-2 shadow-lg bg-primary-700'>
                    <Fade left>
                        <img
                            src='/images/rosen.jpg'
                            alt='exu'
                            className='w-[420px] border-r'
                        />
                    </Fade>
                    <div className='text-gray-500 py-6 px-6 flex items-center '>
                        <div>
                            <h2 className='text-2xl font-title font-semibold text-gray-100'>
                                Rosen kehoterapia (ROSEN METHOD) 50e/h
                            </h2>
                            <p className='mb-10 text-lg mt-6 text-gray-100'>
                                Tuula Määttä Harjoitusjaksolla oleva
                                Rosenterapia opiskelija p.050-4944652
                            </p>
                            <Link href='https://slotti.fi/booking/hyvinvointi-jakauneushoitolaluminella/'>
                                <a className='btn-reverse'>Netti Ajanvaraus</a>
                            </Link>
                            <Link href='https://www.facebook.com/Rosenterapeuttifi-342042090069211'>
                                <a className='btn-reverse ml-4'>Facebook</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AjankohtaistaSection;
