import Image from "next/image";
import React from "react";

const Middle = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center flex-col w-auto p-10 items-center text-center">
          <div>
            <h1 className="text-2xl">
              We produce and craft <br />
              <strong>experiences to live.</strong>
            </h1>
          </div>
          <div>
            <h2 className="mt-5 text-2xl">
              Unique experiences that physically
              <br />
              and emotionally engage the general public.
            </h2>
          </div>
          <div>
            <h1 className="mt-5 text-2xl  ">
              ON-SITE INSTALLATIONS /<br />
              CLIPS & MOTION DESIGN /<br />
              WEBSITES /<br />
              VIRTUAL REALITY /<br />
              AUGMENTED REALITY /
            </h1>
          </div>
          <div>
            <a href="#">
              <h1 className="uppercase font-bold">More about the studio</h1>
            </a>
          </div>
        </div>
        <div className="mt-32 left-0">
          <div className="w-[80%] h-[600px]">
            <img
              src="/aa.jpg"
              alt=""
              className="object-fit"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="ml-[20%] mt-16 w-[40%]">
            <h1 className="font-[bold] text-[50px] uppercase my-8">
              MUSEUMS & CULTURE
            </h1>
            <span className="text-[20px] leading-6">
              For international cultural institutions, we create educational and
              entertaining content in the form of interactive and audiovisual
              installations to be experienced in a museum pathway. We also
              accompany the production of documentaries and audiovisual
              programmes for the general public.
            </span>
            <a href="#">
              <h1 className="uppercase font-bold mt-10">
                SEE OUR CULTURE PROJECTS
              </h1>
            </a>
          </div>
        </div>
        <div className="mt-32 w-full flex justify-end">
          <div className="w-[80%]">
            <div className="w-[100%] h-[600px]">
              <img
                src="/img2.jpg"
                alt=""
                className="object-fit"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="w-[40%]">
              <h1 className="font-[bold] text-[50px] uppercase my-8">
                MUSEUMS & CULTURE
              </h1>
              <span className="text-[20px] leading-6">
                For international cultural institutions, we create educational
                and entertaining content in the form of interactive and
                audiovisual installations to be experienced in a museum pathway.{" "}
                <br />
                We also accompany the production of documentaries and
                audiovisual programmes for the general public.
              </span>
              <a href="#">
                <h1 className="uppercase font-bold mt-10">
                  SEE OUR CULTURE PROJECTS
                </h1>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-32 left-0">
          <div className="w-[80%] h-[600px]">
            <img
              src="/img3.jpg"
              alt=""
              className="object-fit"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="ml-[20%] mt-16 w-[40%]">
            <h1 className="font-[bold] text-[50px] uppercase my-8">
              MUSEUMS & CULTURE
            </h1>
            <span className="text-[20px] leading-6">
              For international cultural institutions, we create educational and
              entertaining content in the form of interactive and audiovisual
              installations to be experienced in a museum pathway. We also
              accompany the production of documentaries and audiovisual
              programmes for the general public.
            </span>
            <a href="#">
              <h1 className="uppercase font-bold mt-10">
                SEE OUR CULTURE PROJECTS
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col w-auto mt-20 items-center text-center">
        <div className="w-full">
          <a target="" href="#">
            <div>
              <h1>DISCOVER OUR SELECTION OF PROJECTS</h1>
            </div>
          </a>
          <div className="flex items-center justify-center mt-20 h-[300px] relative">
            <video
              src="https://ff-portfolio.ams3.cdn.digitaloceanspaces.com/storage/767baf45-3a55-420f-a75f-63c71aac7468.mp4"
              autoPlay
              loop
              muted
              preload="true"
              className="absolute h-[300px] -bottom-10"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
