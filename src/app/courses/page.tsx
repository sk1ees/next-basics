"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
const coursesPage = () => {
  return (
    <>
      <div className="h-auto   w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 dark:bg-black/90">
        <div className="mt-40">
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Our Courses
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Minimalistic , simple and user-friendly course experience.
            </p>
          </div>
          <div className="flex mx-12 mb-12 flex-wrap gap-5 justify-center">
            {courseData.courses.map((items) => (
              <CardContainer className="inter-var" key={items.id}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {items.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {items.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={items.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      {items.instructor} →
                    </CardItem>
                    <Link href={`/courses/${items.slug}`}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Watch Now
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default coursesPage;
