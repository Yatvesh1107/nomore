import Hero from "./components/Hero";
import About from "./components/About";
import ClientLogos from "./components/ClientLogos";
import Work from "./components/Work";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <About />
      <ClientLogos />
      <Work />
      <Services />
      <Projects />
      <Achievement />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default App;