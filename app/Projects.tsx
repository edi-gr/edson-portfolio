"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {};

const Projects = (props: Props) => {
  const [selectedId, setSelectedId] = useState<boolean>(false);
  return (
    <div className="w-10/12 mx-auto" id="projects">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">
        Work Experience / Projects
      </h1>
      <p className="pt-6 text-neutral-300">
        Over the months, I have gained experience in designing and developing a
        variety of websites, ranging from simple one-page landing pages to
        complex multi-page applications.
      </p>
      {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
      <div className="mt-20 md:w-9/12 mx-auto">
        <div className="my-10 sm:w-full mx-auto">
          <h1 className="text-2xl font-bold mb-4">Web3 Developer</h1>
          <div className="text-neutral-300">Doge Capital</div>
          <div className="text-neutral-300">
            <span>Nov 2023 - Feb 2024 · UAE</span>
          </div>

          <div className="mt-6 text-neutral-300">
            <h2 className="text-xl font-bold">Frontend Projects</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                Developed a frontend site for FOMO in half a day, featuring a
                functional sidebar, confirmation page, and aesthetic design.
                <Image
                  src="/fomo.jpeg"
                  alt="FOMO Project"
                  width={1000}
                  height={450}
                  className="mx-auto my-4"
                />
              </li>
              <li>
                Created a complex frontend for a site based on a Canva design,
                completing it within 2 days.
                <Image
                  src="/decimus.png"
                  alt="HappyFunds Project"
                  width={1000}
                  height={450}
                  className="mx-auto my-4"
                />
              </li>
            </ul>
          </div>

          <div className="mt-6 text-neutral-300">
            <h2 className="text-xl font-bold">Project: Duel Arena</h2>
            <li>
              Debugged thousands of lines of code to fix timer issues in the
              game and resolved a bug involving Tokens from the server. This was
              a month-long project.
            </li>
          </div>
        </div>
        <div className="mt-1 inline-block">
          <a
            href="http://fomowtf.com/"
            className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
          >
            Explore <BsArrowUpRight size={14} className="ml-2" />
          </a>
        </div>
      </div>

      <div className="mt-20 md:w-9/12 mx-auto">
        <div className="my-10 sm:w-full mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            Came Second in Quark Hackathon 2023
          </h1>
          <div className="text-neutral-300">Quark 2023</div>
          <div className="text-neutral-300">
            <span>March 2023 · India</span>
          </div>

          <div className="mt-6 text-neutral-300">
            <Image
              src="/playpals.jpeg"
              alt="HappyFunds Project"
              width={1000}
              height={450}
              className="mx-auto my-4"
            />
            <h2 className="text-xl font-bold">Project: Playpals</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                Developed a Friendship website specifically for gamers, allowing
                users to match with nearby gamers based on their gaming
                preferences using tinder swipe style for matching.
              </li>
              <li>
                Integrated a feature that enables matched gamers to connect and
                play games together, fostering friendships through gaming.
              </li>
              <li>
                Designed an intuitive user interface, focusing on ease of use
                and providing a seamless matching experience.
              </li>
              <li>
                Implemented real-time chat and matchmaking functionalities,
                ensuring responsive and engaging user interactions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 md:w-9/12 mx-auto">
        <div className="my-10 sm:w-full mx-auto">
          <h1 className="text-2xl font-bold mb-4">HappyFunds Project</h1>
          <div className="text-neutral-300">Ethereum + Next.js</div>
          <div className="text-neutral-300">
            <span>April 2023</span>
          </div>

          <div className="mt-6 text-neutral-300">
            <Image
              src="/happy.png"
              width={1000}
              height={500}
              className="mx-auto mb-6"
            />
            <h2 className="text-xl font-bold">Project: Charity Marketplace</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                Built a decentralized platform for managing and donating to
                charities.
              </li>
              <li>Users can create, update, and delete charity listings.</li>
              <li>
                Implemented secure donation functionality with Ethereum and
                Polygon integration.
              </li>
              <li>
                Platform supports banning and unbanning of charities by the
                contract owner.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
