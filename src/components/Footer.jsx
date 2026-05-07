function Footer() {
  return (
    <footer className="bg-black px-5 pb-5 pt-20 text-black">
      <div className="rounded-[32px] bg-[#ececec] px-8 py-8 md:px-12 md:py-10">
        
        {/* TOP */}
        <div className="grid gap-10 border-b border-black/10 pb-10 md:grid-cols-3">
          
          <div>
            <p className="text-[1.7rem] font-medium text-black/50">
              Call Today :
            </p>

            <h4 className="mt-2 text-[2rem] font-semibold">
              +62 523 735 1221
            </h4>
          </div>

          <div className="text-center">
            <p className="text-[1.7rem] font-medium text-black/50">
              Email :
            </p>

            <h4 className="mt-2 text-[2rem] font-semibold">
              hello.nomore@gmail.com
            </h4>
          </div>

          <div className="text-right">
            <p className="text-[1.7rem] font-medium text-black/50">
              Admin :
            </p>

            <h4 className="mt-2 text-[2rem] font-semibold">
              support-nomore@gmail.com
            </h4>
          </div>
        </div>

        {/* CENTER */}
        <div className="py-24 text-center">
          <h1 className="text-[13vw] font-black uppercase leading-none tracking-[-0.08em] text-black">
            LET&apos;S-TALK
          </h1>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-black/10 pt-8 md:flex-row">
          
          <div className="flex items-center gap-5 text-[1.2rem] font-medium">
            <p>
              Designed by <span className="text-black/45">Vektora</span>
            </p>

            <p>
              Powered by <span className="text-black/45">Webflow</span>
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-5 text-3xl">
            <i className="ri-twitter-x-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-threads-line"></i>
          </div>

          {/* LINKS */}
          <div className="flex items-center gap-6 text-[1.2rem] font-medium text-black/60">
            <p>Style guide</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>404</p>
          </div>
        </div>
      </div>
    </footer>
  );``
}

export default Footer;