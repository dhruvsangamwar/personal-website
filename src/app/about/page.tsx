"use client"
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/sidebar";
import {
  IconArrowLeft,
  IconMail,
  IconTools,
  IconInfoCircle,
  IconTerminal2,
  IconBlockquote,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { LinkPreview } from "../..//components/link-preview";


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
    {
      label: "Blog",
      href: "blog",
      icon: (
        <IconBlockquote className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact Me",
      href: "contact",
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
export const Logo = () => {
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
export const LogoIcon = () => {
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
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
      <h1 className="p-4 flex flex-row text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 items-center align-middle justify-center">
            About Me
        </h1>
        
        <div className="flex justify-normal items-center h-full flex-col px-4 pt-4">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          I am a recent graduate from&nbsp;
          <LinkPreview url="https://www.ucdavis.edu" className="font-bold">
            University of California - Davis
          </LinkPreview>{""}
          , where I studied{" "}
          <LinkPreview url="https://cs.ucdavis.edu" className="font-bold">
            Computer Science.
          </LinkPreview>{" "}
          
        </p>

        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          My passion lies in the areas of Databases, Distributed Systems, Computer Networks, and NLP. {" "}
          I also find great fulfillment in&nbsp;
          <LinkPreview
            url="https://dhruvsangamwar.notion.site/ECS-198F-Diving-deep-into-the-world-of-Algorithms-Competitive-programming-and-more-4faece565e2e4c25a517970354a66102"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
          teaching
          </LinkPreview>{" "}
          and sharing high-quality learning resources.
        </p>

        <br></br>

        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          Currently, I am actively seeking entry-level software engineering positions where I can apply my skills, contribute to innovative projects, and continue to grow professionally in a dynamic environment.
        </p>

        <br></br>

        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          When I am not at my computer, you can find me hiking, traveling, and bouldering.
        </p>

        </div>
      </div>
    </div>
  );
};