import { useEffect, useRef } from "react";
import chrome from "../assets/images/chrome.png";

function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (imageRef.current) {
        imageRef.current.style.transform = `
          translate(-50%, -50%) translateY(${scrollY * -0.12}px)
        `;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-black px-5 py-20 text-center"
    >
      <div className="absolute left-[-180px] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute right-[-180px] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full border border-white/10" />

      <p className="relative z-10 mb-8 flex items-center gap-3 text-sm font-bold tracking-widest">
        <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />
        ABOUT US
      </p>

      <h2 className="relative z-10 max-w-6xl text-[13vw] font-black leading-[0.9] tracking-[-0.06em] md:text-[7vw]">
        POWERING BRANDS
        <br />
        WITH IMAGINATION
        <br />
        BOLD IMPACT
      </h2>

      <img
        ref={imageRef}
        src={chrome}
        alt=""
        className="absolute left-3/5 md:left-41px top-[100%] z-20 w-[280px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out md:w-[500px]"
      />

      <p className="relative z-30 mt-44 max-w-5xl text-lg font-bold leading-snug text-white/90 md:mt-56 md:text-2xl">
        We came together with a single vision — to create experiences that
        inspire and designs that leave a lasting impression. What started as a
        small group of passionate creatives has grown into an award-winning
        agency.
      </p>
    </section>
  );
}

export default About;