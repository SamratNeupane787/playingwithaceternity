"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
function Cards() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className=" py-12 bg-black-600">
      <div>
        <div className="text-center">
          <h2 className=" text-6xl font-bold pb-4">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500">
              Courses
            </span>
          </h2>
          <p className="text-2xl font-semibold">Learn with Fun!</p>
        </div>
      </div>
      <div className=" mt-10 ">
        <div className=" grid place-items-center gap-3 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center pb-10">
              <BackgroundGradient>
                <div className=" flex flex-col items-center justify-center  text-center rounded-[44px]  overflow-hidden max-w-full h-[30vh]">
                  <p className=" px-3 py-3">{course.title}</p>

                  <p className=" px-3 py-3">{course.description}</p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-10 text-center">
        <Link href={"/courses "}>
          <button className="bg-slate-500 hover:bg-slate-700 px-6 py-3 rounded-full">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
