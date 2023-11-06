"use client";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center relative">
        <div className="text-white text-5xl text-center leading-[75px]">
          <h1 className="text-6xl">AWP Gaming Studios</h1>
          <h1>Imagine today where vision meets</h1>

          <h1> innovation and brands of tomorrow are created</h1>
        </div>
        <video
          autoPlay
          loop
          muted
          preload="true"
          className="h-[100%] min-w-full absolute -z-10 object-cover opacity-100 bg-black"
        >
          <source src="/websitevideo.mp4" />
        </video>
      </div>
    </>
  );
};

export default Header;
