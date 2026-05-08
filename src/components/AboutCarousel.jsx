function AboutCarousel() {
  const images = [
    "/images/about1.png",
    "/images/about2.png",
    "/images/about3.png",
  ];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-8 md:px-10">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      {/* MARQUEE */}
      <div className="marquee flex gap-8">

        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="min-w-[22vw] overflow-hidden"
          >
            <img
              src={img}
              alt=""
              className="h-[540px] w-full object-cover object-center grayscale transition-all duration-700 hover:scale-[1.03]"
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default AboutCarousel;