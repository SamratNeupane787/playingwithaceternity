import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className=" grid pb-6 place-items-center  gap-8 mx-6 my-2 border-t-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <div className=" text-center  flex items-center justify-center flex-col pt-8">
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          About Us
        </h1>
        <p className=" tracking-wider  pt-4">
          Discover top-notch online courses at{" "}
          <span className=" text-violet-600">CodingFunda!</span> We offer
          expert-led programming, web development, data science, and mobile app
          development courses. Empower yourself with in-demand skills and
          advance your career with us today!
        </p>
      </div>
      <div className=" flex items-center justify-center flex-col sm:pt-16 md:pt-0">
        <h1 className="text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Links
        </h1>
        <ul className=" text-center">
          <li className=" pt-4">
            <Link href={"/"}>Home</Link>
          </li>{" "}
          <li className=" pt-4">
            <Link href={"/courses"}>Courses</Link>
          </li>
          <li className=" pt-4">
            <Link href={"/contact"}>Contact Us</Link>
          </li>{" "}
        </ul>
      </div>
      <div className=" sm:pt-8 md:pt-0">
        <h2 className=" text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Our Socials
        </h2>
        <div className=" pt-3 flex flex-row items-center justify-center gap-4">
          <FaInstagram size={32} href={"/"} />
          <FaXTwitter size={32} href={"/"} />
          <FaLinkedin size={32} href={"/"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
