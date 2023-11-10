import React, { PropsWithChildren, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";


const Layout = ({ children }: PropsWithChildren) => {
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // useEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true, // looks for data-speed and data-lag attributes on elements
  //     smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  //   });
  //   ScrollTrigger.create({
  //     trigger: "#id",
  //     start: "top top",
  //     endTrigger: "#otherID",
  //     end: "bottom 50%+=100px",
  //     onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  //     onUpdate: (self) => {
  //       console.log(
  //         "progress:",
  //         self.progress.toFixed(3),
  //         "direction:",
  //         self.direction,
  //         "velocity",
  //         self.getVelocity()
  //       );
  //     },
  //   });
  // });
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
