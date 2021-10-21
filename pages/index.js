import Head from 'next/head';

export default function Home() {
    return (
        <div>
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
            <h1>Luminella web</h1>
        </div>
    );
}
