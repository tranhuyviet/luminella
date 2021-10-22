import React from 'react';

const HoidotCard = ({ item, index }) => {
    return (
        <div className='mb-12'>
            <div className='max-w-5xl  mx-auto border py-8 px-16 shadow-lg border-l-[10px] border-l-primary-700 rounded-l-3xl '>
                <h1 className='font-semibold text-2xl font-title tracking-wide text-gray-700 drop-shadow-md'>
                    {item.title}
                </h1>
                <p className='mt-6 text-lg text-gray-500'>{item.text}</p>
            </div>
        </div>
    );
};

export default HoidotCard;
