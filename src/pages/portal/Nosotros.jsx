import "../../styles/portal/nosotros.css";
import BNosotros from "../../components/portal/nosotros/BNosotros.jsx"
import BMiembros from "../../components/portal/nosotros/BMiembros.jsx"
import { section } from "framer-motion/client";
export default function Nosotros() {
  return (
   
    <section >
          <BNosotros/>
          <BMiembros/>
    </section>

  );
}