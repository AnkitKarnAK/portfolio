import React, { useEffect, useState } from "react";

import {
  SiNextdotjs,
  SiGraphql,
  SiMui,
  SiMobx,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

//  about data
export const skills = [
  {
    title: "Languages / Frameworks",
    icons: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "NextJS" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS" },
    ],
  },
  {
    title: "Tools and Technologies",
    icons: [
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiGraphql />, name: "GraphQL" },
      { icon: <BsFiletypeScss />, name: "SCSS" },
      { icon: <SiMui />, name: "MUI" },
      { icon: <SiMobx />, name: "MobX" },
      { icon: <SiRedux />, name: "Redux" },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";
import { fetchStats } from "../../service";
import { yearsOfExperience } from "../../utils";

const About = () => {
  console.log("About");
  const [personalStats, setPersonalStats] = useState();
  const [workStats, setWorkStats] = useState();

  const fetchAllStats = async () => {
    const [personalRes, workRes] = await Promise.all([
      fetchStats("ankitkarnak"),
      fetchStats("ankit-dslr"),
    ]);
    setPersonalStats(personalRes?.data?.user);
    setWorkStats(workRes?.data?.user);
  };
  useEffect(() => {
    fetchAllStats();
  }, []);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left max-sm:pb-[80px]">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 max-sm:text-[30px]"
        >
          Passionate about <span className="text-accent">Code </span> Quality,
          <br />
          Driven by <span className="text-accent">UI </span> Elegance
        </motion.h2>
        {/*<motion.p*/}
        {/*  variants={fadeIn("right", 0.4)}*/}
        {/*  initial="hidden"*/}
        {/*  animate="show"*/}
        {/*  exit="hidden"*/}
        {/*  className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"*/}
        {/*>*/}
        {/*  I specialize in crafting efficient, clean code that powers*/}
        {/*  exceptional user interfaces. With a commitment to code quality and*/}
        {/*  performance optimization, I stay at the forefront of frontend*/}
        {/*  technologies.*/}
        {/*</motion.p>*/}
        <div className="flex-1 flex h-full flex-col justify-around gap-6">
          {/* </div> */}
          {/* info */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              <div
                className={`cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0 text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300`}
              >
                {"Skills"}
              </div>
            </div>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start"
              >
                <div className="flex-1 flex max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className="text-s sm:text-base font-light mb-2 md:mb-0">
                    {skill.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  {/* <div>"Skills3</div> */}
                  {skill.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-4 w-[30px] sm:w-[100px]"
                    >
                      {/* icons */}
                      <div className="text-2xl text-white peer">
                        {icon.icon}
                      </div>
                      <span className="hidden sm:block peer-hover:block">
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={yearsOfExperience()}
                    duration={2}
                    delay={new Date().getFullYear() - 2022}
                    decimals={1}
                  />{" "}
                  +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={
                      (personalStats?.pullRequests.totalCount || 0) +
                      (workStats?.pullRequests.totalCount || 0)
                    }
                    duration={3}
                  />{" "}
                  +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Total Pull Requests <br />{" "}
                  <span className="text-[6px] sm:text-[8px]">
                    (since June 2023)
                  </span>
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={
                      (personalStats?.contributionsCollection
                        .totalCommitContributions || 0) +
                      (workStats?.contributionsCollection
                        .totalCommitContributions || 0)
                    }
                    duration={3}
                  />{" "}
                  +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Total Commits <br />{" "}
                  <span className="text-[6px] sm:text-[8px]">
                    (since June 2023)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
