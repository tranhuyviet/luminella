import React from 'react';

const ListItem = ({ item }) => {
    return (
        <div className='max-w-4xl mx-auto mt-12 shadow-lg '>
            <h2 className='text-xl md:text-2xl text-center font-title font-semibold bg-primary-700 py-3 text-gray-50 tracking-wide drop-shadow-sm'>
                {item.category}
            </h2>
            {item.hinnastoItems &&
                item.hinnastoItems.map((el, index) => (
                    <div
                        key={index}
                        className='border flex justify-between items-center py-3 px-4 text-base md:text-lg text-gray-600'
                    >
                        <p className='first-letter:font-semibold '>{el.name}</p>
                        <p className='font-bold text-right ml-4 '>{el.price}</p>
                    </div>
                ))}
        </div>
    );
};

export default ListItem;
