"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import Footer from "@/components/Footer";
export default function courseCard() {
  return (
    <div className=" min-h-screen py-12 pt-36">
      <h1 className=" text-6xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Our Courses ({courseData.courses.length})
      </h1>
      <div className=" grid grid-cols-1 gap-3 place-items-center mx-10 md:grid-cols-2 ">
        {courseData.courses.map((item, index) => {
          return (
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="250"
                    width="250"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Buy Course
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}