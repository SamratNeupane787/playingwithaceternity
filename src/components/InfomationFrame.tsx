"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const courses = [
  {
    title: "Introduction to Python Programming",
    description:
      "Learn the basics of Python programming language and start building simple applications in this comprehensive course.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full  px-4 py-4"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Web Development Bootcamp",
    description:
      "Master HTML, CSS, JavaScript, and build responsive websites from scratch with expert guidance in this intensive bootcamp.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full  px-4 py-4"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Flutter",
    description:
      "Create beautiful native apps with Flutter framework for Android and iOS platforms.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmx1dHRlcnxlbnwwfHwwfHx8MA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full  px-4 py-4"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "React Native",
    description:
      "Build cross-platform mobile apps using React Native framework and JavaScript with hands-on projects in this practical course.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full  px-4 py-4"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "NextJS",
    description:
      "Learn server-side rendering and modern web development with Next.js framework.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full  px-4 py-4"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description: "",
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 max-h-full">
      <StickyScroll content={courses} />
    </div>
  );
}
