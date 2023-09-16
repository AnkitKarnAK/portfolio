// links
import Link from 'next/link';

// icons
import {
  RiGithubLine,
  RiTwitterLine,
  RiLinkedinLine

} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/ankitkarnak'} target='_blank' className='flex flex-col items-center hover:text-accent transition-all duration-300'>
        <RiGithubLine />
        <div className='text-xs'>Github</div>
      </Link>
      <Link href={'https://www.linkedin.com/in/ankitkarnak/'} target='_blank' className='flex flex-col items-center hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
        <div className='text-xs'>Linkedin</div>
      </Link>
      <Link href={'https://twitter.com/ankitkarnak'} target='_blank' className='flex flex-col items-center hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
        <div className='text-xs'>Twitter</div>
      </Link>
    </div>
  );
};

export default Socials;
