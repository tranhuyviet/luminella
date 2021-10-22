import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <div className='flex flex-col justify-center items-center ralative bg-transparent z-50'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 absolute top-6 left-6 sm:hidden'
                viewBox='0 0 20 20'
                fill='currentColor'
            >
                <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' />
            </svg>
            <img src='/logo-ngang.jpg' alt='logo' className='sm:hidden w-48' />
            <img
                src='/logo.jpeg'
                alt='logo'
                className='hidden sm:block h-28 my-4'
            />
            <div className='hidden space-x-6 uppercase tracking-widest text-gray-800 text-md sm:block'>
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
                {/* <Link href='/nettiajanvaraus'>
                    <a
                        className={`${
                            pathname === '/nettiajanvaraus' && 'link-active'
                        }`}
                    >
                        Nettiajanvaraus
                    </a>
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;
