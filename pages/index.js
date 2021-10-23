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
            <ExuvianceSection />
            <GiftSection />
            <AjankohtaistaSection />
            {/* <GallerySection /> */}
        </div>
    );
}
