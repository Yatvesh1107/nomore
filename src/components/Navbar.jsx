// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className="relative z-20 flex h-24 items-center justify-between px-6 md:px-12">
//                 <h2 className="text-2xl font-bold">Nomore ©</h2>

//                 <div className="hidden gap-10 text-sm font-bold md:flex">
//                     <a href="#home">HOME</a>
//                     <a href="/about">ABOUT</a>
//                     {/* <a href="#work">sed</a> */}
//                     <a href="#projects">PROJECTS</a>
//                 </div>

//                 <button className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-black">
//                     LET&apos;S TALK
//                     <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
//                         ➜
//                     </span>
//                 </button>
//             </nav>
//   )
// }

// export default Navbar










import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 z-50 w-full">
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/0" />

      <nav className="relative z-20 flex h-24 items-center justify-between px-6 md:px-12">
        
        <h2 className="text-2xl font-bold text-white">
          Nomore ©
        </h2>

       <div className="hidden gap-10 text-sm font-bold text-white md:flex">
  <Link to="/">HOME</Link>

  <Link to="/about">ABOUT</Link>

  <Link to="/services">SERVICES</Link>
  <Link to="/projects">PROJECTS</Link>

  
</div>

        <button className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-black">
          LET&apos;S TALK

          <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
            ➜
          </span>
        </button>

      </nav>
    </div>
  );
};

export default Navbar;