import Link from "next/link";
import React from "react";

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
          <Link href="mailto:support@awpgamingstudios.com">Contact Us</Link>
        </div>
        <div className="mt-10">
          <ul className="flex gap-10 items-center justify-center">
            <li>
              <Link
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="fb.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="insta.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="twitter.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="linkdin.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
