import React from 'react';

const HoidotCard = ({ item, index }) => {
    return (
        <div className='mb-8 md:mb-12'>
            <div className='max-w-4xl  mx-auto border py-4 md:py-8 px-4 md:px-16 shadow-lg border-l-[5px] md:border-l-[10px] border-l-primary-700 md:rounded-3xl rounded-2xl'>
                <h1 className='uppercase font-semibold text-xl md:text-2xl font-title tracking-wide text-gray-700 drop-shadow-md '>
                    {item.title}
                </h1>
                <p className='mt-3 md:mt-6 text-lg text-gray-500'>
                    {item.text}
                </p>
                {item.text2 && (
                    <p className='mt-3 md:mt-6 text-lg text-gray-500'>
                        {item.text2}
                    </p>
                )}
            </div>
        </div>
    );
};

export default HoidotCard;
