import { useEffect, useRef } from "react";
import "../styles/hero.css";

export default function Hero(){

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if(!ctx) return;

    let width;
    let height;

    let particles = [];

    const mouse = {
      x:null,
      y:null,
      radius:120
    };

    const resizeCanvas = () => {

      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      (e) => {

        mouse.x = e.x;
        mouse.y = e.y;

      }
    );

    class Particle{

      constructor(){

        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - .5) * .55;
        this.vy = (Math.random() - .5) * .55;

        this.size = Math.random() * 1.4 + .9;

      }

      update(){

        this.x += this.vx;
        this.y += this.vy;

        if(this.x > width || this.x < 0){
          this.vx *= -1;
        }

        if(this.y > height || this.y < 0){
          this.vy *= -1;
        }

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;

        const distance =
          Math.sqrt(dx * dx + dy * dy);

        if(distance < mouse.radius){

          this.x -= dx / 100;
          this.y -= dy / 100;

        }

      }

      draw(){

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 6
        );

        ctx.fillStyle =
          "rgba(255, 255, 255, 0.99)";

        ctx.fill();

      }

    }

    const createParticles = () => {

      particles = [];

      for(let i = 0; i < 85; i++){

        particles.push(
          new Particle()
        );

      }

    };

    createParticles();

    const connectParticles = () => {

      for(let a = 0; a < particles.length; a++){

        for(let b = a; b < particles.length; b++){

          const dx =
            particles[a].x -
            particles[b].x;

          const dy =
            particles[a].y -
            particles[b].y;

          const distance =
            dx * dx + dy * dy;

          if(distance < 12000){

            ctx.beginPath();

            ctx.strokeStyle =
              "rgb(255, 255, 255)";

            ctx.lineWidth = 1;

            ctx.moveTo(
              particles[a].x,
              particles[a].y
            );

            ctx.lineTo(
              particles[b].x,
              particles[b].y
            );

            ctx.stroke();

          }

        }

      }

    };

    const animate = () => {

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      particles.forEach((particle)=>{

        particle.update();
        particle.draw();

      });

      connectParticles();

      requestAnimationFrame(
        animate
      );

    };

    animate();

    return () => {

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

    };

  }, []);

  return(

    <section className="hero-section">

      <canvas
        ref={canvasRef}
        className="neural-canvas"
      />

      <div className="hero-overlay"></div>

      <div className="hero-blur"></div>

      <div className="container-custom hero-grid">

        {/* ===========================
            LEFT
        =========================== */}

        <div className="hero-content">

          <span className="hero-mini">
            CONSULTORÍA • AUTOMATIZACIÓN • IA
          </span>

          <h1>
            Soluciones digitales
            para empresas modernas
          </h1>

          <p>
            Automatizamos procesos,
            conectamos sistemas y
            optimizamos operaciones
            para acelerar el crecimiento
            de tu empresa.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Agendar reunión
            </button>

            <button className="secondary-btn">
              Ver servicios
            </button>

          </div>

          <div className="hero-tags">

            <div className="hero-tag">
              Automatización
            </div>

            <div className="hero-tag">
              APIs
            </div>

            <div className="hero-tag">
              IA
            </div>

            <div className="hero-tag">
              Integraciones
            </div>

          </div>

        </div>

        {/* ===========================
            RIGHT
        =========================== */}

        <div className="hero-visual">

          <div className="main-panel">

            <div className="panel-header">

              <div className="panel-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="panel-title">
                Ilia Systems
              </div>

            </div>

            <div className="panel-body">

              <div className="panel-card">

                <div className="panel-icon">
                  ⚡
                </div>

                <div>
                  <h4>
                    Automatización
                  </h4>

                  <p>
                    Procesos inteligentes
                  </p>
                </div>

              </div>

              <div className="panel-card">

                <div className="panel-icon">
                  🔗
                </div>

                <div>
                  <h4>
                    Integraciones
                  </h4>

                  <p>
                    Sistemas conectados
                  </p>
                </div>

              </div>

              <div className="panel-card">

                <div className="panel-icon">
                  📊
                </div>

                <div>
                  <h4>
                    Optimización
                  </h4>

                  <p>
                    Mayor productividad
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className="floating-card floating-1">

            <span>
              +70%
            </span>

            <p>
              eficiencia
            </p>

          </div>

          <div className="floating-card floating-2">

            <span>
              IA
            </span>

            <p>
              automatización
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}