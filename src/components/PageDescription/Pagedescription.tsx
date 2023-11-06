import React from "react";
interface Obj {
  headerText: string;
  subheadText: string;
  description: string;
  imgsrc: string;
}
const PageDescription = ({
  headerText,
  subheadText,
  description,
  imgsrc,
}: Obj) => {
  return (
    <>
      <div className="relative flex flex-col text-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-[55vh]">
            <img src={imgsrc} alt="image" className="w-full h-full" />
          </div>
          <div className="absolute top-[10%] text-center">
            <div>
              <h1 className="text-6xl text-white">{headerText}</h1>
            </div>
            <div className="mt-5">
              <span className="text-2xl text-white mt-4">{subheadText}</span>
            </div>
          </div>
        </div>
        <div className="w-[50%] relative -top-16 flex justify-center mx-auto bg-white ">
          <div className="w-[75%] mt-24">
            <h1 className="">{description}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDescription;

// {headerText}
//           {subheadText}
//           {description}
//           {imgsrc}
