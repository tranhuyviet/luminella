import React from 'react';

const TeamCard = ({ imgUrl, name, text1, text2, text3, phone }) => {
    return (
        <div className='max-w-3xl relative border shadow-xl text-center bg-primary-900 h-[300px] w-full mt-16 mb-16'>
            <div className='absolute -top-10 left-10'>
                <img
                    src={imgUrl}
                    alt={name}
                    className='h-[380px] rounded-2xl shadow-2xl border '
                />
            </div>
            <div className='pl-[340px] flex justify-center items-center w-full h-full'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-50 mt-6 drop-shadow-md tracking-widest font-title'>
                        {name}
                    </h2>
                    <div className='w-full flex justify-center mt-2 mb-3'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-gray-100'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-gray-100'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-gray-100'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                    </div>
                    <p className='text-lg text-gray-200 mb-2'>{text1}</p>
                    <p className='text-lg text-gray-200 mb-2'>{text2}</p>
                    <p className='text-lg text-gray-200 mb-2'>{text3}</p>
                    <p className='text-xl text-gray-200 mb-8 font-bold'>
                        {phone}
                    </p>
                </div>
            </div>
            {/* <div className='absolute'>
                <img src={imgUrl} alt={name} />
            </div>

            <h2 className='text-xl font-bold text-gray-800 mt-6 drop-shadow-md tracking-wider'>
                {name}
            </h2>
            <div className='w-full flex justify-center mt-2 mb-3'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-gray-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
            </div>
            <p className='text-md text-gray-500 mb-2'>{text1}</p>
            <p className='text-md text-gray-500 mb-2'>{text2}</p>
            <p className='text-md text-gray-500 mb-2'>{text3}</p>
            <p className='text-lg text-gray-500 mb-8 font-bold'>{phone}</p> */}
        </div>
    );
};

export default TeamCard;
