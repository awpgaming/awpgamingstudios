"use client";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center relative">
        <div className="text-white text-5xl text-center leading-[75px]">
          <h1 className="text-6xl">Femme Fatale Studio</h1>
          <h1>is a creative studio of visual,</h1>

          <h1>interactive & immersive experiences</h1>
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
