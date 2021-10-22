import Head from 'next/head';
import GiftSection from '../components/GiftSection';
import Hero from '../components/Hero';
import TeamSection from '../components/TeamSection';

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
        </div>
    );
}
