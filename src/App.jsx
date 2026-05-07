import Hero from "./components/Hero";
import About from "./components/About";
import ClientLogos from "./components/ClientLogos";
import Work from "./components/Work";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
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
    </main>
  );
}

export default App;