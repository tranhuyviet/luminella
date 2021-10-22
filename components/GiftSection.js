import Link from 'next/link';

const GiftSection = () => {
    return (
        <section className='text-center py-24 relative bg-gray-50'>
            <h1 className='sectionTitle'>Luminellan lahjakortit</h1>
            <div className='mt-10 max-w-2xl mx-auto'>
                <p className='mb-12 text-lg text-gray-500'>
                    Luminellan lahjakortit ovat henkilökohtainen ja toivottu
                    lahja. Lahjakortteja on saatavana valitulle hoidolle tai
                    euromääräisenä. Lahjakortit voi noutaa hoitolasta tai pyytää
                    lähettämään postitse. Voimassaoloaika lahjakorteille on 4-6
                    kk.
                </p>
                <Link href='https://holvi.com/shop/luminella/'>
                    <a className='btn'>Osta lahjakortit</a>
                </Link>
            </div>
            <div className='absolute  bottom-0 right-0 opacity-30 w-[300px] h-[300px]'>
                <img src='/images/gift-box.png' alt='gift' />
            </div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-40 w-40 absolute top-0 left-8 text-primary-700 transform rotate-12 opacity-25 '
                viewBox='0 0 20 20'
                fill='currentColor'
            >
                <path d='M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z' />
                <path d='M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z' />
            </svg>
        </section>
    );
};

export default GiftSection;
