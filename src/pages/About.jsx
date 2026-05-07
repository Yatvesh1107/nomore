import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

    gsap.from(imageRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
      delay: 0.4,
      ease: "power3.out",
    });
  });

  return (
    <>

    <Navbar />

      <section className="relative h-screen overflow-hidden bg-black text-white">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-44 md:px-12">

          {/* Top Right Text */}
          <div className="flex justify-end">
            <p className="max-w-xl text-right text-lg font-medium leading-relaxed md:text-[20px]">
              Discover who we are — a creative studio passionate about
              crafting bold brands, immersive experiences, and innovative
              design expert solutions.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-end pb-8 justify-between">

            {/* Huge Heading */}
            <h1 className="text-[15vw] font-[900/uppercase leading-[0.82] tracking-[-0.09em] md:text-[9vw]">
              ABOUT
              <br />
              NOMORE STD
            </h1>

            {/* Scroll Text */}
            <p className="mb-1 hidden text-lg md:block">
              (Scroll down)
            </p>

          </div>

        </div>

      </section>

    </>
  );
};

export default AboutUs;