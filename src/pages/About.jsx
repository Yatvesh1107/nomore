import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar";
import AboutCarousel from "../components/AboutCarousel";
import Journey from "../components/Journey";
import Footer from "../components/Footer";

const AboutUs = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 140,
      opacity: 0,
      duration: 1.3,
      ease: "power4.out",
    });

    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });
  });

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden bg-black text-white">

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-[0.94] object-cover object-center"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col justify-between px-8 pb-10 pt-44 md:px-14">

          {/* TOP RIGHT TEXT */}
          <div className="flex justify-end pt-10">

            <p
              ref={textRef}
              className="max-w-[620px] text-right text-[20px] font-medium leading-[1.6]"
            >
              Discover who we are — a creative studio passionate about
              crafting bold brands, immersive experiences, and innovative
              design expert solutions.
            </p>

          </div>

          {/* BOTTOM SECTION */}
          <div className="flex items-end justify-between pb-4">

            {/* HUGE TITLE */}
            <h1
              ref={titleRef}
              className="text-[13vw] font-[900] uppercase leading-[0.82] tracking-[-0.09em] md:text-[8vw]"
            >
              ABOUT
              <br />
              NOMORE STD
            </h1>

            {/* SCROLL TEXT */}
            <p className="mb-1 hidden text-lg md:block">
              (Scroll down)
            </p>

          </div>

        </div>

      </section>

      {/* IMAGE MARQUEE */}
      <AboutCarousel />

      <Journey />

      <Footer/>
    </>
  );
};

export default AboutUs;