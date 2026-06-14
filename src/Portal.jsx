import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortalLayout from "./layouts/PortalLayout";

import Inicio from "./pages/portal/Inicio";
import Servicios from "./pages/portal/Servicios";
import Nosotros from "./pages/portal/Nosotros";
import Contacto from "./pages/portal/Contacto";

function Portal() {
  return (
    <BrowserRouter>
      <PortalLayout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </PortalLayout>
    </BrowserRouter>
  );
}

export default Portal;