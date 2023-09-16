// projects slider data
import Link from "next/link";

export const projectsSliderData = {
  slides: [
    {
      images: [
        {
          title: 'Portfolio Website',
          src: '/thumb-project-1.webp',
          url: '/',

        },
        {
          title: 'RacketMart (E-Com)',
          src: '/thumb-project-2.webp',
          url: 'https://racketmart.netlify.app',
        },
        {
          title: 'RacketPost (Social Media)',
          src: '/thumb-project-3.webp',
          url: 'https://racketpost.netlify.app',
        },
        {
          title: 'SkyUI (CSS Library)',
          src: '/thumb-project-4.webp',
          url: 'https://sky-ui.netlify.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'SkyUI (CSS Library)',
          src: '/thumb-project-4.webp',
          url: 'https://sky-ui.netlify.app/',
        },
        {
          title: 'Portfolio Website',
          src: '/thumb-project-1.webp',
          url: '/',
        },
        {
          title: 'RacketMart (E-Com)',
          src: '/thumb-project-2.webp',
          url: 'https://racketmart.netlify.app',
        },
        {
          title: 'RacketPost (Social Media)',
          src: '/thumb-project-3.webp',
          url: 'https://racketpost.netlify.app',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const ProjectsSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {projectsSliderData.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.src} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='text-xs sm:text-base  line-clamp-1 max-w-[80%] absolute bottom-0 bg-gradient-to-l from-accent via-[#f56e66] to-accent px-2 py-1 rounded-2xl'>{image.title}</div>

                      <Link href={image.url} target={"_blank"} className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectsSlider;
