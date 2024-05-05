"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

import Link from "next/link";
export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  text-center font-sans font-bold">
          Contact US
        </h1>
        <p></p>
        <p className="text-neutral-500 pt-10 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          For any Query Contact Us From the Form Provided Below
        </p>
        <input
          type="text"
          placeholder="hi@samratneupane.com.np"
          className="rounded-lg h-[8vh] text-center border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-10  bg-neutral-950 placeholder:text-neutral-700"
        />
        <div className=" flex items-center justify-center gap-3 ssm:flex-col md:flex-row ">
          <input
            type="text"
            placeholder="First name"
            className="rounded-lg h-[8vh] text-center border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-10  bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="text"
            placeholder="Last name"
            className="rounded-lg h-[8vh] border text-center border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-10  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <div className=" flex items-center justify-center mt-8">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
