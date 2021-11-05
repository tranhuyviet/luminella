import Head from 'next/head';
import AjankohtaistaSection from '../components/etusivu/AjankohtaistaSection';
import ExuvianceSection from '../components/etusivu/ExuvianceSection';
import GallerySection from '../components/etusivu/GallerySection';
import GiftSection from '../components/etusivu/GiftSection';
import Hero from '../components/etusivu/Hero';
import TeamSection from '../components/etusivu/TeamSection';

export default function Home() {
    return (
        <div className='ralative'>
            <Head>
                <title>
                    Etusivu | Hyvinvointi- ja Kauneushoitola Luminella
                </title>
                <meta
                    name='description'
                    content='Hyvinvointi- ja Kauneushoitola Luminella'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero />
            <TeamSection />
            <GiftSection />
            <AjankohtaistaSection />
            <div className='absolute inset-0 overflow-hidden z-mandala'>
                <img
                    src='/images/mandala-2.svg'
                    alt='hero pic'
                    className='absolute z-hero w-[80%] opacity-[0.25] sm:w-[40%] sm:opacity-[0.35] right-10  translate-x-1/2 top-20'
                />
            </div>
        </div>
    );
}
