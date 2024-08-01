"use client"
import React, { useEffect, useId, useRef, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
import {
  IconArrowLeft,
  IconMail,
  IconTools,
  IconInfoCircle,
  IconTerminal2,
  IconBlockquote,
  IconBriefcase2,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import UCD from "../../../public/UCD.png"
import SOLIDIGM from "../../../public/SOLIDIGM.jpg"
import NOMAD from "../../../public/NOMAD.jpeg"

export default function Home() {

  const links = [
    {
      label: "About Me",
      href: "./about",
      icon: (
        <IconInfoCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Experience",
      href: "experience",
      icon: (
        <IconTerminal2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "projects",
      icon: (
        <IconTools className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    // {
    //     label: "Blog",
    //     href: "blog",
    //     icon: (
    //       <IconBlockquote className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    //     ),
    // },
    {
      label: "Resume",
      href: "/Dhruv_Sangamwar.pdf",
      icon: (
        <IconBriefcase2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Github",
      href: "https://github.com/dhruvsangamwar",
      icon: (
        <IconBrandGithub className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dsangamwar",
      icon: (
        <IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact Me",
      href: "mailto:sangamward@gmail.com",
      icon: (
        <IconMail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <main>
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
    </main>
  );
}
const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-blue-500 dark:bg-white rounded-br-sm rounded-tr-lg rounded-tl-sm rounded-bl-lg flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Dhruv Sangamwar
      </motion.span>
    </Link>
  );
};
const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-blue-500 dark:bg-white rounded-br-sm rounded-tr-lg rounded-tl-sm rounded-bl-lg flex-shrink-0" />
    </Link>
  );
};
 
// Dummy dashboard component with content
const Dashboard = () => {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
      );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();
    
    useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
        setActive(false);
        }
    }
    
    if (active && typeof active === "object") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);
     
    useOutsideClick(ref, () => setActive(null));
    
    return (
      <div className="flex flex-1 overflow-scroll">
        <div className="overflow-scroll p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <h1 className="p-4 flex flex-row text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 items-center align-middle justify-center">
            Work Experience
        </h1>
        <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-scroll"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
 
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row align-middle items-center justify-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>

        </div>
      </div>
    );
  };

  const CloseIcon = () => {
    return (
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    );
  };

  const cards = [
    {
      description: "Student Researcher",
      title: "C^2 Lab",
      src: UCD,
      ctaText: "Sep 2023 - Aug 2023",
      content: () => {
        return (
          <p>
          · Studying governance policies within open-source repositories and sustainability of open-source software model, under Dr. Seth Frey. <br></br>
          · Time series analysis on commit history, and governance documents from a data set of over 700 open source repositories using python. <br></br>
          · Developing applications that allow researchers to analyze institutional grammar through semantic role labeling and other NLP methods. <br></br>
          </p>
        );
      },
    },
    {
      description: "Course Lecturer",
      title: "University California, Davis",
      src: UCD,
      ctaText: "Aug 2023 - Dec 2023",
      content: () => {
        return (
          <p>
            · Designed and taught ECS 198F - Diving deep into world algorithms: competitive programming and more, a exhaustive 3 unit course. <br></br>
            · Curated lesson plans and lectured a class of 85 students. Facilitated one on one technical interview preparation with every student. <br></br>
            · Developed programming assignments and automated test cases for student submissions using Gradescope API in Python & C++. <br></br>
            · Taught topics such as Data Structures, Algorithm analysis, Dynamic programming, Randomized and approximation algorithms. <br></br>
          </p>
        );
      },
    },
   
    {
      description: "Product Engineer: Co-op",
      title: "Solidigm (Intel NPSG)",
      src: SOLIDIGM,
      ctaText: "Jun 2022 - Jun 2023",
      content: () => {
        return (
          <p>
              · Designed, developed and automated 30+ new firmware validation tests on Intel SLC/QLC NAND SSD technology, P41 Plus drive. <br></br>
              · Modernized legacy test framework by migrating tests from Python 2.7 to Python 3 improving performance and security. <br></br>
              · Validated firmware through Regression tests covering areas of telemetry, thermal, write and read speeds, and data corruption. <br></br>
              · Gained proficiency in using RS-232 serial data (UART) reported by device to characterize firmware behavior to debug efficiently. <br></br>
          </p>
        );
      },
    },
    {
      description: "Software Engineer",
      title: "NomΛd",
      src: NOMAD,
      ctaText: "Mar 2021 - Dec 2021",
      content: () => {
        return (
          <p>
            · A startup with over $50,000 in funding and 10 engineers aiming to bring budget friendly travel options with features such as rent
              splitting. Holds 20+ listings in 2 countries, and completed UCLA Anderson Venture Accelerator. <br></br>
            · Developed a database seeding script using JavaScript to interface with MongoDB, improving database initialization and load testing. <br></br>
            · Implemented caching using Redis to improve geo-spatial indexing for property listings enhancing proximity based search performance. <br></br>
            · Developed containerized micro-services using Docker and scaled using Kubernetes, deployed applications on AWS and Firebase. <br></br>
          </p>
        );
      },
    },
  ];