import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full lg:px-[20%] pt-[145px] pb-[50px] px-[15%] bg-[url('/black-board.jpg')]">
        <div>
          <div className="flex justify-between">
            <div>
              <ul className="text-white flex flex-col gap-5">
                <li>
                  <a href="#">Case studies</a>
                </li>
                <li>
                  <a href="#">Case studies</a>
                </li>
                <li>
                  <a href="#">Case studies</a>
                </li>
                <li>
                  <a href="#">Case studies</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white flex flex-col gap-5">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src={"/logo.png"}
                width={75}
                height={75}
                alt="logo"
              ></Image>
            </div>
          </div>
          <div className="mt-32 flex flex-col md:flex-row items-start justify-between ">
            <div className="w-[210px] whitespace-nowrap text-[25px] leading-6 text-white">
              Subscribe to our newsletter
            </div>
            <form action="" className="flex gap-10">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your e-mail address"
                className="bg-transparent"
              />
              <button className="text-white">Submit</button>
            </form>
          </div>
          <div className="flex mx-auto justify-center mt-16 text-white">
          &copy; All rights reserved AWP Gaming Studio 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
