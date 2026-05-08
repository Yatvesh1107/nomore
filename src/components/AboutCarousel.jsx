// 


function AboutCarousel() {
  const images = [
    "/images/about1.png",
    "/images/about2.png",
    "/images/about3.png",
  ];

  return (
    <section className="relative overflow-hidden bg-black py-30">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black via-black/80 to-transparent" />

      {/* MARQUEE */}
      <div className="marquee-wrapper flex w-max gap-10">

        {[...images, ...images, ...images].map((img, index) => (

          <div
            key={index}
            className="group relative min-w-[42vw] overflow-hidden rounded-[20px] md:min-w-[34vw]"
          >

            <img
              src={img}
              alt=""
              className="h-[72vh] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
            />

          </div>

        ))}

      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee-wrapper {
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>

    </section>
  );
}

export default AboutCarousel;