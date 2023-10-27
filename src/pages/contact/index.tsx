import React from "react";
import bg from "./bg1.jpg";

const Contact = () => {
  return (
    <>
      <div className="a bg-[url('/bg1.jpg')] h-[100vh] flex flex-col items-center">
        <div className="mt-32">
          <h1 className="text-white text-[40px] md:text-[60px] ">
            A QUESTION, <br /> A PROPOSAL? <br /> CONTACT US
          </h1>
        </div>
        <div className="mt-20 text-white text-center">
          <h1 className="text-[24px]">USA Office </h1>
          <br />
          <h1>
            7600 N. 15th St. Ste 150 <br />
            Phoenix , AX 85020
          </h1>
        </div>
        <div className="mt-10 text-white underline">
          <a href="mailto:support@awpgamingstudios.com">Contact Us</a>
        </div>
        <div className="mt-10">
          <ul className="flex gap-10 items-center justify-center">
            <li>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="fb.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="insta.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="linkdin.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex items-center justify-center mt-20 h-[300px] relative">
        <video
          src="https://ff-portfolio.ams3.cdn.digitaloceanspaces.com/storage/767baf45-3a55-420f-a75f-63c71aac7468.mp4"
          autoPlay
          loop
          muted
          preload="true"
          className="absolute h-[300px] -bottom-10"
        ></video>
      </div> */}
    </>
  );
};

export default Contact;
