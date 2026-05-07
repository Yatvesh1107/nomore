import { useRef, useState } from "react";
import textImage from "../assets/images/text.png";

function Hero() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const toggleVideo = () => {
        if (!videoRef.current) return;

        playing ? videoRef.current.pause() : videoRef.current.play();
        setPlaying(!playing);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/70" />

            <nav className="relative z-20 flex h-24 items-center justify-between px-6 md:px-12">
                <h2 className="text-2xl font-bold">Nomore ©</h2>

                <div className="hidden gap-10 text-sm font-bold md:flex">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#work">WORK</a>
                    <a href="#projects">PROJECTS</a>
                </div>

                <button className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-black">
                    LET&apos;S TALK
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
                        ➜
                    </span>
                </button>
            </nav>

            <button
                onClick={toggleVideo}
                className="absolute right-8 top-32 z-30 text-sm font-bold md:right-14"
            >
                {playing ? "Pause" : "Play"}
            </button>

            

            <div className="relative  z-10 flex h-[calc(100vh-96px)] flex-col justify-center px-6 md:px-24">
                <p className="absolute left-6 top-[12%] z-20 text-sm font-bold tracking-wide md:left-24">
                    POWERED BY CREATIVITY
                </p>

                <div className="absolute bottom-[25%] left-[50%] -translate-x-1/2 w-full flex justify-center">
                    <img
                        src={textImage}
                        alt="Creative Studio"
                        className="w-[92vw] md:w-[88vw] object-contain"
                    />
                </div>

                

                <p className="mt-10 max-w-sm text-left text-base font-bold leading-tight md:absolute md:bottom-16 md:right-20 md:text-center md:text-lg">
                    We transform ideas into fully-realized design experiences — from UI/UX
                    and illustration to development — creating work that elevates brands.
                </p>
            </div>

            <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-b from-transparent to-black" />
        </section>
    );
}

export default Hero;