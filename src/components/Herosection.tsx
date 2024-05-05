import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";

function Herosection() {
  return (
    <div className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className=" p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-26 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Become a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {" "}
            Developer !
          </span>
        </h1>
        <p className=" font-normal text-base sm:mt-4 md:text-lg mt-12 text-neutral-300 max-w-lg mx-auto">
          Master web development, mobile app creation, and Python programming
          with our comprehensive courses. Start your journey today!
        </p>
        <div className="mt-16">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
