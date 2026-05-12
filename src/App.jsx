
import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Services />
      <Stats />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
