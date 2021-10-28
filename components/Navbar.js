import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <div className='flex flex-col justify-center items-center bg-transparent z-50'>
            <img
                src='/logo.jpeg'
                alt='logo'
                className='h-20 my-2 sm:block sm:h-28 sm:my-4'
            />
            <div className='text-xs tracking-wide space-x-4 sm:space-x-6 uppercase sm:tracking-widest text-gray-800 sm:text-md sm:block relative z-50 md:text-lg'>
                <Link href='/'>
                    <a className={`${pathname === '/' && 'link-active'}`}>
                        Etusivu
                    </a>
                </Link>
                <Link href='/hoidot'>
                    <a className={`${pathname === '/hoidot' && 'link-active'}`}>
                        Hoidot
                    </a>
                </Link>
                <Link href='/hinnasto'>
                    <a
                        className={`${
                            pathname === '/hinnasto' && 'link-active'
                        }`}
                    >
                        Hinnasto
                    </a>
                </Link>
                <Link href='/kuvia'>
                    <a className={`${pathname === '/kuvia' && 'link-active'}`}>
                        Kuvia
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
