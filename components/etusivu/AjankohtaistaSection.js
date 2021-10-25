import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const AjankohtaistaSection = () => {
    return (
        <section className='sectionWrap max-w-4xl mx-auto'>
            <h1 className='sectionTitle'>Ajankohtaista</h1>
            <div className='mt-10 relative'>
                <div className='border w-full grid grid-cols-2 shadow-lg bg-primary-700'>
                    <Fade left>
                        <img
                            src='/images/exu2.jpeg'
                            alt='exu'
                            className='w-[420px] border-r'
                        />
                    </Fade>
                    <div className='text-gray-500 py-6 px-6 flex items-center '>
                        <div>
                            <Fade right>
                                <h2 className='text-2xl font-title font-semibold text-gray-100'>
                                    Rosen kehoterapia (ROSEN METHOD) 50e/h
                                </h2>
                                <p className='mb-10 text-lg mt-6 text-gray-100'>
                                    Tuula Määttä (edistynyt opiskelija)
                                    ajanvaraus p.050-4944652
                                </p>
                                <Link href='https://slotti.fi/booking/hyvinvointi-jakauneushoitolaluminella/'>
                                    <a className='btn-reverse'>
                                        Netti Ajanvaraus
                                    </a>
                                </Link>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AjankohtaistaSection;
