import Image from "next/image";
import Link from "next/link";
import React from "react";

const Middle = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center flex-col w-auto p-10 items-center text-center">
          <div className="mt-10">
            <h1 className="text-5xl font-PlayfairDisplay">
              We produce and craft <br />
              <strong>experiences to live.</strong>
            </h1>
          </div>
          <div>
            <h2 className="mt-5 text-2xl font-mono">
              Unique experiences that physically
              <br />
              and emotionally engage the general public.
            </h2>
          </div>
          {/* <div className="left-[50%] w-1 h-7 my-20 border"></div> */}
          <hr className="my-10 h-20 bg-black w-[1px] opacity-40" />
          <div>
            <h1 className="mt-5 text-6xl font-DancingScript">
              ON-SITE INSTALLATIONS /<br />
              CLIPS & MOTION DESIGN /<br />
              WEBSITES /<br />
              VIRTUAL REALITY /<br />
              AUGMENTED REALITY /
            </h1>
          </div>
          <div className="mt-10">
            <Link href="/about-awp">
              <h1 className="uppercase font-bold font-AbrilFatface">
                More about the studio
              </h1>
            </Link>
          </div>
        </div>
        <div className="mt-24 left-0">
          <div className="w-[80%] h-[600px]" data-aos="fade-right">
            <img
              src="/Entertainment.png"
              alt=""
              className="object-fit"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="ml-[20%] mt-16 w-[40%]">
            <h1
              className="text-[50px] uppercase my-8 font-Tan"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              Entertainment
            </h1>
            <span className="text-[20px] leading-6">
              Welcome to the Entertainment section of AWP Gaming Studios, where
              creativity and innovation come together to bring you exciting
              gaming experiences like never before. As a technology company
              dedicated to pushing boundaries, we pride ourselves on using the
              latest technologies and collaborating with top talent to create
              captivating games and immersive worlds that transport players into
              new dimensions of entertainment.
            </span>
            <Link href="/entertainment">
              <h1 className="uppercase font-bold mt-10">
                SEE More about AWP Entertainment
              </h1>
            </Link>
          </div>
        </div>
        <div className="mt-32 w-full flex justify-end">
          <div className="w-[80%]">
            <div className="w-[100%] h-[600px]">
              <img
                src="/graphic.png"
                alt=""
                className="object-fit"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="w-[40%]">
              <h1
                className="text-[50px] uppercase my-8 font-Tan"
                data-aos="flip-up"
                data-aos-duration="1500"
              >
                Graphic Design
              </h1>
              <span className="text-[20px] leading-6">
                At AWP Gaming Studios, graphic design is not just about creating
                visually stunning artwork. It is about pushing boundaries and
                utilizing the latest technologies to bring our gaming projects
                to life. Our graphic design department is a dynamic team of
                talented professionals who specialize in using tools like
                Blender, Maya, Adobe Illustrator, and other cutting-edge
                software to create captivating 2D and 3D art, images, and
                animations. One of our most exciting projects is the creation of
                our first brand of characters, &quot;The Aliees.&quot; These
                adorable baby aliens from the planet Okra have become an instant
                hit. Our graphic design and animation team worked tirelessly to
                produce the first cut of an 8-minute pilot featuring these
                lovable characters.
              </span>
              <Link href="/graphic-design">
                <h1 className="uppercase font-bold mt-10">
                  SEE more about AWP Graphic Design
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-32 left-0">
          <div className="w-[80%] h-[600px]">
            <img
              src="/vr.png"
              alt=""
              className="object-fit"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="ml-[20%] mt-16 w-[40%]">
            <h1
              className="font-Tan text-[50px] uppercase my-8"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              Virtual Reality
            </h1>
            <span className="text-[20px] leading-6">
              At AWP Gaming Studios, we are not just a gaming studio; we are a
              technology company that thrives on pushing the boundaries of
              innovation. With a team of talented developers, designers, and
              animators, we strive to create immersive and unforgettable
              experiences for our customers and partners, taking them beyond the
              confines of traditional gaming. One of the most exciting aspects
              of our company is our exploration of virtual reality (VR). We
              believe that VR has the potential to revolutionize the gaming
              industry and offer entirely new levels of immersion and
              interactivity. Our team of skilled developers is constantly
              working on incorporating VR technology into our games to provide
              players with unique and unforgettable experiences.
            </span>
            <Link href="/virtual-reality">
              <h1 className="uppercase font-bold mt-10">
                SEE more about AWP Virtual Reality PROJECTS
              </h1>
            </Link>
          </div>
        </div>
        <div className="mt-32 w-full flex justify-end">
          <div className="w-[80%]">
            <div className="w-[100%] h-[600px]">
              <img
                src="/ar.png"
                alt=""
                className="object-fit"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="w-[40%]">
              <h1
                className="font-Tan text-[50px] uppercase my-8"
                data-aos="flip-up"
                data-aos-duration="1500"
              >
                Augmented Reality
              </h1>
              <span className="text-[20px] leading-6">
                At AWP Gaming Studios, we are pushing the boundaries of gaming
                experiences by incorporating Augmented Reality (AR) into our
                projects. AR allows us to blend the real world with the virtual,
                creating immersive and interactive experiences that bring our
                games to life in ways never seen before. With a firm focus on
                innovation and using the latest technologies, our talented team
                of developers and designers is committed to delivering the most
                captivating and creative AR experiences possible. One of our
                most exciting projects utilizing AR is our upcoming game, which
                combines elements from popular titles like Pokémon Go and Axie
                Infinity. In this game, players will embark on a thrilling
                adventure where they can capture and interact with our adorable
                characters, &quot;The Aliees.&quot; These lovable baby aliens
                from the planet Okra will sing, dance, and engage in unique
                activities, all within the context of the players&apos;
                real-world surroundings.
              </span>
              <Link href="augmented-reality">
                <h1 className="uppercase font-bold mt-10">
                  SEE more about AWP Augmented Reality PROJECTS
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-32 left-0">
          <div className="w-[80%] h-[600px]">
            <img
              src="/branding.png"
              alt=""
              className="object-fit"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="ml-[20%] mt-16 w-[40%]">
            <h1
              className="font-Tan text-[50px] uppercase my-8"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              Brands &Content
            </h1>
            <span className="text-[20px] leading-6">
              At AWP Gaming Studios, we are paving the way for immersive gaming
              experiences that transcend the boundaries of traditional gameplay.
              We believe in creating a winning partnership with our
              customers/partners, and our diverse range of Brands & Content
              reflects our commitment to pushing the boundaries of technology
              and creativity. The Aliees: Our first brand of characters, the
              Aliees, are cute little baby aliens from the planet Okra. These
              lovable creatures sing, dance, and bring joy to players of all
              ages. We have produced an exciting 8-minute pilot that showcases
              the Aliees&apos; world and their adventures. Prepare to be
              captivated by their charm and join them in their augmented reality
              game, where the Aliees come to life in a cross between Pokémon GO
              and Axie Infinity.
            </span>
            <Link href="/brands-content">
              <h1 className="uppercase font-bold mt-10">
                SEE more about AWP Brands & Content PROJECTS
              </h1>
            </Link>
          </div>
        </div>
        <div className="mt-32 w-full flex justify-end">
          <div className="w-[80%]">
            <div className="w-[100%] h-[600px]">
              <img
                src="/technology.png"
                alt=""
                className="object-fit"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="w-[40%]">
              <h1
                className="font-Tan text-[50px] uppercase my-8"
                data-aos="flip-up"
                data-aos-duration="1500"
              >
                Technology
              </h1>
              <span className="text-[20px] leading-6">
                At AWP Gaming Studios, we are at the forefront of technology and
                embrace cutting-edge advancements to create innovative gaming
                experiences. Our talented team of developers and designers
                utilizes a wide range of technologies, programming languages,
                and software to bring our creative visions to life. Blockchain
                Technologies: AWP Gaming Studios recognizes the transformative
                potential of blockchain technology within the gaming industry.
                We have collaborated with some of India&apos;s most talented
                blockchain developers to create the Okra Token, a utility crypto
                token that serves as the backbone of our ecosystem. By
                leveraging blockchain technology, we ensure transparency,
                security, and seamless transactions within our gaming
                environment.
              </span>
              <Link href="/technology">
                <h1 className="uppercase font-bold mt-10">
                  SEE OUR Technology PROJECTS
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-32 left-0">
          <div className="w-[80%] h-[600px]">
            <img
              src="/gaming.png"
              alt=""
              className="object-fit"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="ml-[20%] mt-16 w-[40%]">
            <h1
              className="font-Tan text-[50px] uppercase my-8"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              Gaming
            </h1>
            <span className="text-[20px] leading-6">
              At AWP Gaming Studios, we are passionate about creating immersive
              gaming experiences that push the boundaries of creativity and
              technology. With over 200 unfinished games on Roblox, we are
              building a unique network where players can seamlessly transport
              themselves between games, unleashing the full potential of
              interconnected gameplay. Our graphic design department utilizes
              industry-leading software such as Blender, Maya, and Adobe
              Illustrator to create stunning 2D and 3D art, images, and
              animations. We believe in using and teaching consumers how to
              leverage the latest technologies to deliver the most innovative
              projects and products.
            </span>
            <Link href="/gaming">
              <h1 className="uppercase font-bold mt-10">
                SEE more about AWP Gaming PROJECTS
              </h1>
            </Link>
          </div>
        </div>
        <div className="mt-32 w-full flex justify-end">
          <div className="w-[80%]">
            <div className="w-[100%] h-[600px]">
              <img
                src="/ai.png"
                alt=""
                className="object-fit"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="w-[40%]">
              <h1
                className="font-Tan text-[50px] uppercase my-8"
                data-aos="flip-up"
                data-aos-duration="1500"
              >
                About AWP Studios
              </h1>
              <span className="text-[20px] leading-6">
                At AWP Gaming Studios, we are dedicated to providing the most
                creative projects and products for our customers, whom we
                consider our valued partners. Our name, AWP, stands for A
                Winning Partnership, reflecting our commitment to collaborate
                closely with our customers to achieve success together. With
                over 200 unfinished games on Roblox, we are building the largest
                network of games, where players can seamlessly transport
                themselves between different gaming experiences. Each of these
                games is crafted by our talented team of game developers,
                allowing us to own a percentage of each game that has been
                pre-purchased by our customers turned partners. This unique
                approach ensures that we remain invested in the success of our
                games and in building an engaged gaming community. Our graphic
                design department is equipped with cutting-edge software such as
                Blender, Maya, and Adobe Illustrator, empowering us to create
                visually stunning 2D and 3D art, images, and animations. We take
                pride in not only utilizing these latest technologies but also
                teaching our consumers how to utilize them, fostering innovation
                within the gaming industry.
              </span>
              <Link href="/about-awp">
                <h1 className="uppercase font-bold mt-10">About AWP Studios</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col w-auto mt-20 items-center text-center">
        <div className="w-full">
          <Link href="#">
            <div>
              <h1>DISCOVER OUR SELECTION OF PROJECTS</h1>
            </div>
          </Link>
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
