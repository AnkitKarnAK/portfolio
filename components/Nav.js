// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';
import { MdWork } from 'react-icons/md'
import { RiStickyNoteFill } from "react-icons/ri"

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  {
    name: 'work',
    path: '/work',
    icon: <MdWork />,
  },
  { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-20 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div
        className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-accent'
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* icon */}
              <div className='flex flex-col items-center gap-2'>
                <div>{link.icon}</div>
                <div className='text-[12px] leading-none font-semibold capitalize'>
                      {link.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
