import React from 'react';
import GallerySection from '../components/etusivu/GallerySection';
import Head from 'next/head';
const Kuvia = () => {
    return (
        <div>
            <Head>
                <title>Kuvia | Hyvinvointi- ja Kauneushoitola Luminella</title>
                <meta
                    name='description'
                    content='Hyvinvointi- ja Kauneushoitola Luminella'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <GallerySection />
        </div>
    );
};

export default Kuvia;
