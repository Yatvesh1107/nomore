import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Journey() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);

  useGSAP(() => {
   gsap.fromTo(
  leftRef.current,
  {
    y: 250,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 70%",
      end: "top top",
      scrub: 1,
    },
  }
);

ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top top",
  end: "bottom bottom",
  pin: leftRef.current,
  pinSpacing: false,
});
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[220vh] overflow-hidden bg-black text-white"
    >

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/girl.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-2 gap-20 px-8 py-24 md:px-16">

        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className="flex h-screen flex-col justify-center"
        >

          <div className="mb-8 flex items-center gap-4">
            <div className="h-4 w-4 rounded-full bg-[#d9fbff]" />

            <p className="text-xl font-medium uppercase tracking-wide">
              WHAT WE HAVE DONE
            </p>
          </div>

          <h2 className="text-[7vw] font-[900] uppercase leading-[0.9] tracking-[-0.06em]">
            OUR
            <br />
            <span className="text-[#d9fbff]">
              JOURNEY
            </span>
            <br />
            SO FAR
          </h2>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-40 pt-20">

          <div>
            <h3 className="text-[9vw] font-[900] leading-none">
              2013
            </h3>

            <p className="mt-4 text-3xl leading-relaxed text-white/90">
              The year we founded the company
            </p>
          </div>

          <div>
            <h3 className="text-[9vw] font-[900] leading-none">
              6
            </h3>

            <p className="mt-4 text-3xl leading-relaxed text-white/90">
              Years of design expertise
            </p>
          </div>

          <div>
            <h3 className="text-[9vw] font-[900] leading-none">
              23
            </h3>

            <p className="mt-4 text-3xl leading-relaxed text-white/90">
              Industries impacted through innovative design
            </p>
          </div>

          <div>
            <h3 className="text-[9vw] font-[900] leading-none">
              200
            </h3>

            <p className="mt-4 text-3xl leading-relaxed text-white/90">
              Global collaborations bringing ideas to life
            </p>
          </div>

          <div>
            <h3 className="text-[9vw] font-[900] leading-none">
              23
            </h3>

            <p className="mt-4 text-3xl leading-relaxed text-white/90">
              Digital experiences launched across platforms
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Journey;