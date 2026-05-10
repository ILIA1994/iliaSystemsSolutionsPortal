export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Ilia Systems Solutions
        </a>

        <div className="d-none d-lg-flex gap-4 align-items-center">
          <a href="#" className="nav-link-custom">Inicio</a>
          <a href="#" className="nav-link-custom">Servicios</a>
          <a href="#" className="nav-link-custom">Tecnologías</a>
          <a href="#" className="nav-link-custom">Proyectos</a>

          <button className="btn btn-primary px-4 rounded-pill">
            Agenda una reunión
          </button>
        </div>
      </div>
    </nav>
  )
}