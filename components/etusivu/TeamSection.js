import React from 'react';
import TeamCard from './TeamCard';

const TeamSection = () => {
    return (
        <section className='sectionWrap min-h-screen relative overflow-hidden bg-gray-50'>
            <h1 className='sectionTitle'>Luminellan ammattilaiset</h1>
            <div className='flex justify-center space-x-8 mt-12'>
                <TeamCard
                    imgUrl='/images/Tuula.jpg'
                    name='TUULA MÄÄTTÄ'
                    text1='Diplomi-Kosmetologi'
                    text2='Rosen kehoterapia'
                    text3='Hieronnan AMT'
                    phone='050-494 4652'
                />

                <TeamCard
                    imgUrl='/images/Chrisu.jpg'
                    name='CHRISTINA HOKKANEN'
                    text1='Jalkojenhoitajan AMT'
                    text2='Koulutettu hieroja'
                    text3='Vyöhyketerapeutti'
                    phone='040-414 0214'
                />

                <TeamCard
                    imgUrl='/images/Katja.jpg'
                    name='KATJA LOUHISTO'
                    text1='SKY-Kosmetologi'
                    text2='Koulutettu hieroja'
                    text3='Urheiluhieroja'
                    phone='044-977 9505'
                />
            </div>
            {/* <div className='absolute z-mandala opacity-30 top-0 right-0 translate-x-1/2 -translate-y-1/2'>
                <img
                    src='/images/Mandala.svg'
                    alt='mandala'
                    className='h-[700px] w-[700px]'
                />
            </div> */}
            {/* <div className='absolute z-10 opacity-50 bottom-0 -translate-x-1/2'>
                <img
                    src='/images/mandala-3.svg'
                    alt='mandala'
                    className='h-[540px] w-[540px] '
                />
            </div> */}
            <div className='absolute z-10  bottom-0 translate-y-1/2 w-full '>
                <div className='relative'>
                    <img
                        src='/images/mandala-2.svg'
                        alt='mandala'
                        className='w-[40%] absolute right-0 bottom-0 translate-y-1/2 opacity-[0.35] translate-x-1/2'
                    />
                </div>
            </div>
            {/* <div className='absolute z-10  top-0 right-0 w-full bg-red-500'>
                <div className='relative bg-gray-500'>
                    <img
                        src='/images/mandala-3.svg'
                        alt='mandala'
                        className='w-[30%] absolute right-0 translate-x-1/2 opacity-[0.35]'
                    />
                </div>
            </div> */}
            <div className='absolute z-10 top-0 -translate-y-1/2 w-full'>
                <img
                    src='/images/mandala-1.svg'
                    alt='mandala'
                    className='w-[60%] -translate-x-1/2 opacity-[0.35]'
                />
            </div>
        </section>
    );
};

export default TeamSection;
