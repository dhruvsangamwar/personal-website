"use client"
import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { HoverEffect } from "@/components/card-hover-effect";


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


const Dashboard = () => {
    return (
      <div className="flex flex-1 overflow-scroll">
        <div className="overflow-scroll p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    );
  };

  const projects = [
    {
      title: "Flashy",
      description:
        "CalHacks 2023: Automated Flash Card generation powered by GPT-4 to help students study. ",
      link: "https://github.com/ThaumicMekanism/calhacks-2023",
    },
    {
      title: "ResilientDB SDK",
      description:
        "Wrote a user friendly SDK in Rust for ResilientDB, an open source Blockchain fabric currently going through Apache incubation.",
      link: "https://github.com/ResilientEcosystem/rust_sdk",
    },
    {
      title: "placekittens",
      description:
        "placekittens.com was a famous API that served cat images, it went down recently. So I made a clone using Go.",
      link: "https://github.com/dhruvsangamwar/placekittens",
    },
    {
      title: "Neurotech Conference Website",
      description:
        "Designed and implemented the 2024 California Neurotech Conference which was hosted by UC Davis.",
      link: "https://caneurotech.netlify.app",
    },
    {
      title: "Neurotech Wiki",
      description:
        "Developed and maintained the only open source Neurotechnology Wiki.",
      link: "https://neurotechwiki.netlify.app",
    },
    {
      title: "Pomodoro",
      description:
        "A simple task based timer app that uses the pomodoro method of study. Implemented using SwiftUI.",
      link: "https://github.com/dhruvsangamwar/Pomodoro-App",
    },
  ];