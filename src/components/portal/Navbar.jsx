import { useState, useEffect } from "react";

import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

import {
  NavLink
} from "react-router-dom";

import {
  FaChevronDown
} from "react-icons/fa";

import "../../styles/portal/navbar.css";

export default function NavbarComponent() {

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(
        window.scrollY > 80
      );

      const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  return (

    <>

      {/* BARRA DE PROGRESO */}

      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`
        }}
      />

      {/* NAVBAR */}

      <Navbar
        expand="lg"
        className={
          isScrolled
            ? "iss-navbar scrolled"
            : "iss-navbar"
        }
      >

        <Container
          fluid
          className="iss-container"
        >

          {/* LOGO */}

          <Navbar.Brand
            as={NavLink}
            to="/"
            className="iss-brand"
          >

            <div className="iss-logo"></div>

            <div className="iss-brand-text">

              <h3>
                Ilia Systems Solutions
              </h3>

              <span>
                Consultoría • IA • Automatización
              </span>

            </div>

          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navbar"
            className="iss-toggle"
          />

          <Navbar.Collapse
            id="main-navbar"
          >

            <Nav
              className="ms-auto iss-nav"
            >

              <Nav.Link
                as={NavLink}
                to="/"
                end
                className="iss-link"
              >
                Inicio
              </Nav.Link>

              {/* SERVICIOS */}

              <div className="iss-services">

                <button
                  className="iss-services-btn"
                  onClick={() =>
                    setServicesOpen(
                      !servicesOpen
                    )
                  }
                >

                  Servicios

                  <FaChevronDown
                    className={
                      servicesOpen
                        ? "rotate"
                        : ""
                    }
                  />

                </button>

                <div
                  className={
                    servicesOpen
                      ? "iss-dropdown open"
                      : "iss-dropdown"
                  }
                >

                  <NavLink
                    to="/servicios"
                    className="iss-service-item"
                    onClick={() =>
                      setServicesOpen(false)
                    }
                  >
                    Inteligencia Artificial
                  </NavLink>

                  <NavLink
                    to="/servicios"
                    className="iss-service-item"
                    onClick={() =>
                      setServicesOpen(false)
                    }
                  >
                    Desarrollo Software
                  </NavLink>

                  <NavLink
                    to="/servicios"
                    className="iss-service-item"
                    onClick={() =>
                      setServicesOpen(false)
                    }
                  >
                    Cloud Solutions
                  </NavLink>

                  <NavLink
                    to="/servicios"
                    className="iss-service-item"
                    onClick={() =>
                      setServicesOpen(false)
                    }
                  >
                    Automatización
                  </NavLink>

                </div>

              </div>

              <Nav.Link
                as={NavLink}
                to="/nosotros"
                className="iss-link"
              >
                Nosotros
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/contacto"
                className="iss-link"
              >
                Contacto
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

    </>

  );

}