import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

import "../styles/navbar.css";

export default function NavbarComponent(){

  return(

    <Navbar
      expand="lg"
      className="custom-navbar"
    >

      <Container
        fluid
        className="container-custom"
      >

        {/* =========================
            LOGO
        ========================= */}

        <Navbar.Brand
          className="navbar-brand-custom"
        >

          <div className="logo-wrapper">

            <div className="logo-circle"></div>

            <div className="logo-text">

              <h3>
                Ilia Systems Solutions
              </h3>

              <span>
                Consultoría • IA • Automatización
              </span>

            </div>

          </div>

        </Navbar.Brand>

        {/* =========================
            TOGGLE
        ========================= */}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggle"
        />

        {/* =========================
            MENU
        ========================= */}

        <Navbar.Collapse
          id="basic-navbar-nav"
        >

          <Nav className="ms-auto align-items-lg-center nav-container">

            <Nav.Link href="#">
              Inicio
            </Nav.Link>

            <Nav.Link href="#">
              Servicios
            </Nav.Link>

            <Nav.Link href="#">
              Soluciones
            </Nav.Link>

            <Nav.Link href="#">
              Nosotros
            </Nav.Link>

            <Nav.Link href="#">
              Recursos
            </Nav.Link>

            <Nav.Link href="#">
              Contacto
            </Nav.Link>

   

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  )
}