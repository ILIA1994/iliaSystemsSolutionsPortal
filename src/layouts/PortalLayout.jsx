import Navbar from "../components/portal/Navbar";
import Footer from "../components/portal/Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import FloatingBot from "./FloatingBot";
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <FloatingWhatsApp />
      <FloatingBot />
      <Footer />
    </>
  );
}