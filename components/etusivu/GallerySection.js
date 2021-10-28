import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

const images = [
    { url: '/images/gal-etuovi.jpeg' },
    { url: '/images/gal-hierontahuone.jpg' },
    { url: '/images/gal-hoitohuone.jpeg' },
    { url: '/images/gal-odotus1.jpeg' },
    { url: '/images/gal-odotus2.jpeg' },
    { url: '/images/gal-aula.jpg' },
];

const GallerySection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const handleImageClick = (index) => {
        setImgIndex(index);
        setIsOpen(true);
    };

    const hadleClose = () => {
        setIsOpen(false);
    };

    return (
        <section className='sectionWrap'>
            {/* <h1 className='sectionTitle'>Kuvia</h1> */}
            <div className=' grid grid-cols-3 max-w-6xl mx-auto gap-8'>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.url}
                            // key={index}
                            alt='gallery'
                            className='w-[360px] h-[360px] shadow-lg transition-all duration-300 hover:opacity-70'
                            onClick={() => handleImageClick(index)}
                        />
                    </div>
                ))}
            </div>
            {isOpen && (
                <Lightbox
                    images={images}
                    onClose={hadleClose}
                    startIndex={imgIndex}
                />
            )}
        </section>
    );
};

export default GallerySection;
