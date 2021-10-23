import React from 'react';
import TeamCard from './TeamCard';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';

const TeamSection = () => {
    return (
        <section className='sectionWrap min-h-screen relative overflow-hidden z-mandala bg-gray-50'>
            <h1 className='sectionTitle'>Luminellan ammattilaiset</h1>
            <div className='flex flex-col items-center  mt-12'>
                <Flip left>
                    <div className='w-full flex justify-center'>
                        <TeamCard
                            imgUrl='/images/Chrisu.jpg'
                            name='CHRISTINA HOKKANEN'
                            text1='Jalkojenhoitajan AMT'
                            text2='Vyöhyketerapeutti'
                            text3='Koulutettu hieroja'
                            phone='040-414 0214'
                        />
                    </div>
                </Flip>
                <Flip left>
                    <div className='w-full flex justify-center'>
                        <TeamCard
                            imgUrl='/images/Tuula.jpg'
                            name='TUULA MÄÄTTÄ'
                            text1='Diplomi-Kosmetologi'
                            text2='Kestopigmentointi'
                            text3='Rosen kehoterapia'
                            phone='050-494 4652'
                        />
                    </div>
                </Flip>
                <Flip left>
                    <div className='w-full flex justify-center'>
                        <TeamCard
                            imgUrl='/images/Katja.jpg'
                            name='KATJA LOUHISTO'
                            text1='SKY-Kosmetologi'
                            text2='Koulutettu Hieroja'
                            text3='Urheiluhieroja'
                            phone='044-977 9505'
                        />
                    </div>
                </Flip>
            </div>
            {/* <div className='absolute z-mandala opacity-30 top-0 right-0 translate-x-1/2 -translate-y-1/2'>
                <img
                    src='/images/Mandala.svg'
                    alt='mandala'
                    className='h-[700px] w-[700px]'
                />
            </div> */}
            <div className='absolute z-mandala opacity-25 bottom-0 -translate-x-1/2'>
                <img
                    src='/images/Mandala.svg'
                    alt='mandala'
                    className='h-[540px] w-[540px] '
                />
            </div>
            <div className='absolute z-mandala opacity-25 bottom-0 right-0 translate-y-1/2'>
                <img
                    src='/images/Mandala.svg'
                    alt='mandala'
                    className='h-[540px] w-[540px] '
                />
            </div>
            <div className='absolute z-mandala opacity-25 top-0 right-0 translate-x-1/2'>
                <img
                    src='/images/Mandala.svg'
                    alt='mandala'
                    className='h-[540px] w-[540px] '
                />
            </div>
            <div className='absolute z-mandala opacity-25 top-0 -translate-y-1/2'>
                <img
                    src='/images/Mandala.svg'
                    alt='mandala'
                    className='h-[540px] w-[540px] '
                />
            </div>
        </section>
    );
};

export default TeamSection;
