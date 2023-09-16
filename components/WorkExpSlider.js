// testimonial slider data
export const workExpSlider = [
  {
    image: '/dslr.png',
    name: 'DSLR Technology',
    position: 'Founding Engineer',
    duration: '(June 2023 - Present)',
    message:
      'Working on an early stage startup, building an E-Com app in Women Ethnic wear. Worked on so many features like A/B Features, Collection, Product Details, Cart, Checkout  & various other e-com features etc',
  },
  {
    image: '/bukuwarung.png',
    name: 'BukuWarung',
    position: 'SDE-2 Frontend',
    duration: '(Dec 2021 - May 2023)',
    message:
      'Joined as a Fresher then grown up to SDE-2 in a mid size startup, scaling the payments feature of the app. Worked on things like KYC, KYB, Checkout and many more.'
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// next image
import Image from 'next/image';

const WorkExpSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {workExpSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] sm:text-[14px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                  {/* duration */}
                  <div className='text-[10px] sm:text-[12px] font-extralight tracking-widest'>
                    {person.duration}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center  xl:pl-20'>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkExpSlider;
