"use client";

import Image from "next/image";

import ss from "./scroll.module.scss";
// typical import
// import gsap from "gsap";
import "./styles/testing.css";
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap } from "gsap";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

// import "./home.css";
import { useEffect, useRef } from "react";

const ScrollAnimation = () => {
  const ref = useRef<Array<HTMLDivElement | null>>([]);

  const addtoRefs = (el: HTMLDivElement | null) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  useEffect(() => {
    ref.current.forEach((el: any) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          left: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            // end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="divSpace">Scroll Down</div>
      <div className="box-container">
        <div ref={addtoRefs} className="box">
          box1
        </div>
        <div ref={addtoRefs} className="box">
          box2
        </div>
        <div ref={addtoRefs} className="box">
          box3
        </div>
        <div ref={addtoRefs} className="box">
          box4
        </div>
        <div ref={addtoRefs} className="box">
          box5
        </div>
        <div ref={addtoRefs} className="box">
          box6
        </div>
        <div ref={addtoRefs} className="box">
          box7
        </div>
      </div>
    </>
  );
};

export default ScrollAnimation;
