import "../../styles/portal/Inicio.css";
import BImagen from "../../components/portal/inicio/BImagen.jsx"
import BQuienesSomos from "../../components/portal/inicio/BQuienesSomos.jsx"
import BPilares from "../../components/portal/inicio/BPilares.jsx"
export default function Inicio() {
  return (
    <section >
    <BImagen/>
     <BQuienesSomos/>
     <BPilares/>
    </section>
  );
}