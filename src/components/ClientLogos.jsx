import logo from "../assets/images/logo .svg";
import logo1 from "../assets/images/logo-1.svg";
import logo2 from "../assets/images/logo-2.svg";
import logo3 from "../assets/images/logo-3.svg";
import logo5 from "../assets/images/logo-5.svg";

function ClientLogos() {
  const logos = [logo, logo1, logo2, logo3, logo5];

  return (
    <section className="bg-black px-5 py-24 md:px-10">
      <div className="grid gap-5 md:grid-cols-5">
        {logos.map((item, index) => (
          <div
            key={index}
            className="flex h-[220px] items-center justify-center rounded-md border border-white/20 bg-black transition-all duration-500 hover:border-white/50 hover:bg-white/[0.03]"
          >
            <img src={item} alt="" className="w-[180px] object-contain opacity-90" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientLogos;