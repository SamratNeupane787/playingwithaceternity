"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" mt-[1rem]">
      <div className=" text-center ">
        <h1 className=" text-center font-semibold sm:text-3xl md:text-5xl">
          Review From Our
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {" "}
            Students
          </span>
        </h1>
      </div>
      <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I'm amazed by the variety of courses offered on this website. Whether you're a beginner or an advanced learner, there's something valuable for everyone. Kudos to the team!",
    name: "Alex Johnson",
    title: "Impressed Learner",
  },
  {
    quote:
      "The instructors on this platform are not just knowledgeable but also excellent communicators. They make complex concepts easy to understand, which has greatly accelerated my learning journey.",
    name: "Sarah Williams",
    title: "Grateful Student",
  },
  {
    quote:
      "I've tried many online learning platforms, but this one stands out for its user-friendly interface and high-quality content. Enrolling in courses here was one of the best decisions I've made.",
    name: "David Brown",
    title: "Satisfied Customer",
  },
  {
    quote:
      "The course materials are well-organized and supplemented with practical exercises and quizzes that reinforce learning. I feel more confident in my skills after completing courses from this website.",
    name: "Emily Taylor",
    title: "Confident Learner",
  },
  {
    quote:
      "The affordability of courses here is a huge plus. I've gained valuable skills without breaking the bank. Definitely recommend this platform to anyone looking to learn programming!",
    name: "Michael Anderson",
    title: "Budget-Friendly Learner",
  },
  {
    quote:
      "The customer support team is incredibly responsive and helpful. Anytime I had a question or issue, they were quick to assist and ensure that my learning experience was smooth and enjoyable.",
    name: "Laura Martinez",
    title: "Happy Customer",
  },
];
