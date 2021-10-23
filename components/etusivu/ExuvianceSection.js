import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const ExuvianceSection = () => {
    return (
        <section className='sectionWrap relative bg-[#FEFEFE]'>
            <Fade bottom>
                <h1 className='sectionTitle'>EXUVIANCE Tuotemyynti</h1>
                <div className='mt-10 max-w-3xl mx-auto'>
                    <p className='mb-12 text-lg text-gray-500'>
                        Kotihoitotuotteita voit ostaa Luminellasta hoidon
                        yhteydessä sekä vapaasti hoitolan aukioloaikoina.
                        Tarvittaessa voit tilata tuotteita kotiisi,
                        kanta-asiakkaille tilaus laskutuksella, muille
                        ennakkomaksulla. Tilaukseen lisätään
                        pakettiautomaattikulut.
                    </p>
                    <img
                        src='/images/exu.jpeg'
                        alt='exu image'
                        className='mb-12'
                    />
                    <Link href='https://www.exuviance.fi/tuotteet'>
                        <a className='btn'>Exuviance Tuotteet</a>
                    </Link>
                </div>
            </Fade>
        </section>
    );
};

export default ExuvianceSection;
