

// import React, { useState } from "react";

// import serviceVideo from "../../public/videos/service.mp4";

// import service6 from "../assets/images/service-6.png";
// import service7 from "../assets/images/service-7.png";
// import service8 from "../assets/images/service-8.png";
// import service9 from "../assets/images/service-9.png";

// const services = [
//   {
//     title: "BRANDING",
//     image: service7,
//     tags: ["Brand Strategy", "Visual Identity", "Guidelines", "Packaging", "Storytelling"],
//     desc: "We craft unique brand identities that tell a story, define personality, and create meaningful connections with audiences across every touchpoint.",
//   },
//   {
//     title: "UI / UX DESIGN",
//     image: service8,
//     tags: ["User Research", "Wireframing", "Prototyping", "Interface Design", "Usability Testing"],
//     desc: "We design intuitive and engaging interfaces, focusing on user-centered experiences that are both visually appealing and highly functional.",
//   },
//   {
//     title: "DEVELOPMENT",
//     image: service9,
//     tags: ["Frontend", "Backend", "Web Apps", "CMS", "Optimization"],
//     desc: "We build fast, responsive, and scalable digital products with clean code and smooth performance.",
//   },
//   {
//     title: "ILLUSTRATION",
//     image: service6,
//     tags: ["2D Art", "3D Visuals", "Motion", "Characters", "Creative Assets"],
//     desc: "We create bold illustrations and visuals that make brands feel alive across digital platforms.",
//   },
// ];

// const Services = () => {
//   const [activeImage, setActiveImage] = useState(null);

//   const [position, setPosition] = useState({
//   x: 0,
//   y: 0,
// });

// const handleMouseMove = (e) => {
//   setPosition({
//     x: e.clientX,
//     y: e.clientY,
//   });
// };

//   return (
//     <main className="bg-black text-white overflow-hidden">
//       <section className="relative min-h-screen overflow-hidden bg-black text-white">
//         <video
//           className="absolute inset-0 h-full w-full object-cover"
//           src={serviceVideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60" />

//         <div className="relative z-10 min-h-screen px-6 pt-36 md:px-12">
//           <p className="absolute right-8 top-[52%] max-w-[410px] text-center text-xl font-medium leading-snug md:right-16">
//             From branding and UI/UX to 2D/3D illustration and development, we
//             turn ideas into engaging, memorable experiences across every medium
//           </p>

//           <h1 className="absolute bottom-10 left-6 text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.07em] md:left-12 md:text-[8vw]">
//             SERVICE &
//             <br />
//             CAPABILITIES
//           </h1>

//           <p className="absolute bottom-8 right-8 text-base font-semibold md:right-16">
//             (Scroll down)
//           </p>
//         </div>
//       </section>

//     <section className="relative bg-black px-6 py-20 md:px-10">
//   <div className="mb-10 flex items-center gap-3 text-xl">
//     <span className="h-5 w-5 rounded-full border-4 border-gray-500 bg-[#d9fbff]" />
//     <span>SERVICE</span>
//   </div>

//   {services.map((item, index) => (
//     <div
//       key={index}
//       onMouseEnter={() => setActiveImage(item.image)}
//       onMouseLeave={() => setActiveImage(null)}
//       onMouseMove={(e) =>
//         setPosition({
//           x: e.clientX,
//           y: e.clientY,
//         })
//       }
//       className="relative mb-8 flex min-h-[270px] cursor-pointer items-center justify-between overflow-visible rounded-xl bg-white px-10 py-10 text-black"
//     >
//       <div>
//         <h2 className="text-[5vw] font-black leading-none tracking-[-0.06em]">
//           {item.title}
//         </h2>

//         <div className="mt-8 flex max-w-[520px] flex-wrap gap-3">
//           {item.tags.map((tag) => (
//             <span
//               key={tag}
//               className="rounded-full border border-black px-5 py-1 text-lg"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       <p className="max-w-[420px] text-2xl font-medium leading-tight">
//         {item.desc}
//       </p>
//     </div>
//   ))}

//   {activeImage && (
//     <img
//       src={activeImage}
//       alt=""
//       className="pointer-events-none fixed z-[999] h-[330px] w-[330px] object-cover"
//       style={{
//         left: position.x - 165,
//         top: position.y - 165,
//       }}
//     />
//   )}
// </section>
//     </main>
//   );
// };

// export default Services;












import React, { useState, useRef, useEffect } from "react";

import serviceVideo from "../../public/videos/service.mp4";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import service6 from "../assets/images/service-6.png";
import service7 from "../assets/images/service-7.png";
import service8 from "../assets/images/service-8.png";
import service9 from "../assets/images/service-9.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "BRANDING",
    image: service7,
    tags: [
      "Brand Strategy",
      "Visual Identity",
      "Guidelines",
      "Packaging",
      "Storytelling",
    ],
    desc: "We craft unique brand identities that tell a story, define personality, and create meaningful connections with audiences across every touchpoint.",
  },
  {
    title: "UI / UX DESIGN",
    image: service8,
    tags: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Interface Design",
      "Usability Testing",
    ],
    desc: "We design intuitive and engaging interfaces, focusing on user-centered experiences that are both visually appealing and highly functional.",
  },
  {
    title: "DEVELOPMENT",
    image: service9,
    tags: ["Frontend", "Backend", "Web Apps", "CMS", "Optimization"],
    desc: "We build fast, responsive, and scalable digital products with clean code and smooth performance.",
  },
  {
    title: "ILLUSTRATION",
    image: service6,
    tags: [
      "2D Art",
      "3D Visuals",
      "Motion",
      "Characters",
      "Creative Assets",
    ],
    desc: "We create bold illustrations and visuals that make brands feel alive across digital platforms.",
  },
];

const Services = () => {
  const [activeImage, setActiveImage] = useState(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const sliderRef = useRef(null);
  const workflowRef = useRef(null);

 useEffect(() => {
  const slider = sliderRef.current;
  const workflow = workflowRef.current;

  const totalMove = slider.scrollWidth - workflow.offsetWidth;

  gsap.to(slider, {
    x: -totalMove,
    ease: "none",
    scrollTrigger: {
      trigger: workflow,
      start: "top top",
      end: () => `+=${totalMove}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
    },
  });
}, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={serviceVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60" />

        <div className="relative z-10 min-h-screen px-6 pt-36 md:px-12">
          <p className="absolute right-8 top-[52%] max-w-[410px] text-center text-xl font-medium leading-snug md:right-16">
            From branding and UI/UX to 2D/3D illustration and development, we
            turn ideas into engaging, memorable experiences across every medium
          </p>

          <h1 className="absolute bottom-10 left-6 text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.07em] md:left-12 md:text-[8vw]">
            SERVICE &
            <br />
            CAPABILITIES
          </h1>

          <p className="absolute bottom-8 right-8 text-base font-semibold md:right-16">
            (Scroll down)
          </p>
        </div>
      </section>

      <section className="relative bg-black px-6 py-20 md:px-10">
        <div className="mb-10 flex items-center gap-3 text-xl">
          <span className="h-5 w-5 rounded-full border-4 border-gray-500 bg-[#d9fbff]" />
          <span>SERVICE</span>
        </div>

        {services.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveImage(item.image)}
            onMouseLeave={() => setActiveImage(null)}
            onMouseMove={(e) =>
              setPosition({
                x: e.clientX,
                y: e.clientY,
              })
            }
            className="relative mb-8 flex min-h-[270px] cursor-pointer items-center justify-between overflow-visible rounded-xl bg-white px-10 py-10 text-black"
          >
            <div>
              <h2 className="text-[5vw] font-black leading-none tracking-[-0.06em]">
                {item.title}
              </h2>

              <div className="mt-8 flex max-w-[520px] flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black px-5 py-1 text-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="max-w-[420px] text-2xl font-medium leading-tight">
              {item.desc}
            </p>
          </div>
        ))}

        {activeImage && (
          <img
            src={activeImage}
            alt=""
            className="pointer-events-none fixed z-[999] h-[330px] w-[330px] object-cover"
            style={{
              left: position.x - 165,
              top: position.y - 165,
            }}
          />
        )}
      </section>

      <section
        ref={workflowRef}
        className="overflow-hidden bg-black py-20"
      >
        <div className="mb-10 px-10">
          <p className="text-xl text-white">OUR WORKFLOW</p>

          <h1 className="text-[8vw] font-black uppercase leading-none text-white">
            WHAT <span className="text-[#d9fbff]">NEXT</span>
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex w-[320vw] gap-10 px-10"
        >
          <div className="h-[500px] w-[900px] rounded-[30px] bg-white p-10 text-black">
            CARD 1
          </div>

          <div className="h-[500px] w-[900px] rounded-[30px] bg-white p-10 text-black">
            CARD 2
          </div>

          <div className="h-[500px] w-[900px] rounded-[30px] bg-white p-10 text-black">
            CARD 3
          </div>

          <div className="h-[500px] w-[900px] rounded-[30px] bg-white p-10 text-black">
            CARD 4
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;