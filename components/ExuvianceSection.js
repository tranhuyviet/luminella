import Link from 'next/link';

const ExuvianceSection = () => {
    return (
        <section className='text-center py-24 relative bg-[#FEFEFE]'>
            <h1 className='sectionTitle'>EXUVIANCE Tuotemyynti</h1>
            <div className='mt-10 max-w-2xl mx-auto'>
                <p className='mb-12 text-lg text-gray-500'>
                    Kotihoitotuotteita voit ostaa Luminellasta hoidon yhteydessä
                    sekä vapaasti hoitolan aukioloaikoina. Tarvittaessa voit
                    tilata tuotteita kotiisi, kanta-asiakkaille tilaus
                    laskutuksella, muille ennakkomaksulla. Tilaukseen lisätään
                    pakettiautomaattikulut.
                </p>
                <img src='/images/exu.jpeg' alt='exu image' className='mb-12' />
                <Link href='https://www.exuviance.fi/tuotteet'>
                    <a className='btn'>Exuviance Tuotteet</a>
                </Link>
            </div>
        </section>
    );
};

export default ExuvianceSection;
