import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import service4 from "../assets/images/service-4.png";
import service10 from "../assets/images/service-10.png";
import service3 from "../assets/images/service-3.png";

import logo from "../assets/logos/logo-4.svg";
import logo1 from "../assets/logos/logo-1.svg";
import logo2 from "../assets/logos/logo-2.svg";
import logo3 from "../assets/logos/logo-3.svg";
import logo5 from "../assets/logos/logo-5.svg";

gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
    const sectionRef = useRef(null);
    const [activeImage, setActiveImage] = useState(service4);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-text", {
                y: 120,
                opacity: 100,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".testimonial-image", {
                scale: 1.2,
                opacity: 100,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonial-image",
                    start: "top 85%",
                },
            });

            gsap.from(".logo-box", {
                y: 80,
                opacity: 100,
                stagger: 0.12,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".logos-wrapper",
                    start: "top 90%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-black px-8 py-24 text-white md:px-14"
        >
            <div className="mx-auto max-w-[1650px]">
                {/* MAIN SECTION */}
                <div className="grid items-center gap-0 lg:grid-cols-[0.92fr_1.08fr]">

                    {/* LEFT */}
                    <div className="testimonial-text relative z-10 pr-[-40px]">

                        <h2 className="max-w-[820px] text-[4.2vw] font-medium leading-[1.04] tracking-[-0.06em] text-white">
                            “Working with Nomore Studio was an absolute game-changer for
                            our brand. Their creativity, attention to detail, and 100%
                            passionate approach.”
                        </h2>

                        <div className="mt-20">
                            <h4 className="text-[2rem] font-semibold">
                                Nakata Nicole
                            </h4>

                            <p className="mt-2 text-[1.5rem] text-white/55">
                                Marketing Director
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative -ml-[750px] h-[750px] overflow-hidden rounded-[20px]">

                        <img
                            src={activeImage}
                            alt=""
                            className="testimonial-image h-full w-full object-cover transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
                    </div>
                </div>

              {/* LOGOS */}
{/* LOGOS */}
<div className="logos-wrapper mt-14 grid grid-cols-5 gap-5">
  <div
    onClick={() => setActiveImage(service4)}
    className="logo-box group flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
  >
    <img src={logo} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
  </div>

  <div
    onClick={() => setActiveImage(service3)}
    className="logo-box group flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
  >
    <img src={logo1} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
  </div>

  <div
    onClick={() => setActiveImage(service10)}
    className="logo-box group flex  self-starth-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
  >
    <img src={logo2} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
  </div>

  <div
    onClick={() => setActiveImage(service3)}
    className="logo-box group self-start flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
  >
    <img src={logo3} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
  </div>

  <div
    onClick={() => setActiveImage(service10)}
    className="logo-box group self-start flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
  >
    <img src={logo5} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
  </div>
</div>
            </div>
        </section>
    );
}

export default Testimonial;