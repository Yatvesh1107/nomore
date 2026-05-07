import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {services}  from "../data/services";

gsap.registerPlugin(ScrollTrigger);

function Services() {
    useEffect(() => {
  const cards = gsap.utils.toArray(".service-card");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      }
    );
  });

  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);
//   useEffect(() => {
//     gsap.utils.toArray(".service-card").forEach((card) => {
//       gsap.from(card, {
//         y: 120,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//         },
//       });
//     });
//   }, []);

  return (
    <section className="mb-8 bg-black px-4 py-10">
      <div className="mb-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-[#d9fbff]" />
          <p className="text-[22px] font-medium uppercase text-white">
            Service
          </p>
        </div>

        <h2 className="text-[7vw] font-black uppercase leading-[0.85] tracking-[-0.06em] text-white">
          FULL-SPECTRUM
          <br />
          <span className="text-[#d9fbff]">CREATIVE</span>
        </h2>
      </div>

      <div className="relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card sticky top-[80px] mb-10 flex min-h-[300px] items-center justify-between rounded-[40px] bg-[#ececec] px-10 py-12"
            style={{
              zIndex: services.length - index,
            }}
          >
            <div className="flex items-center gap-10">
              <span className="text-5xl font-bold text-[#ff5c39]">
                {service.number}
              </span>

              <h3 className="text-[5vw] font-black leading-none text-black">
                {service.title}
              </h3>
            </div>

            <img
              src={service.image}
              alt={service.title}
              className="h-[220px] w-[320px] object-cover shadow-2xl"
            />

            <p className="max-w-[360px] text-[28px] leading-tight text-black">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;