import { useEffect, useRef } from "react";
import "../styles/stats.css";

export default function Stats(){

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 100
    };

    const resizeCanvas = () => {

      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;

    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("mousemove", (e) => {

      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

    });

    class Particle{

      constructor(){

        this.x = Math.random() * width;
        this.y = Math.random() * height;

this.vx = (Math.random() - 0.5) * 0.6;
this.vy = (Math.random() - 0.5) * 0.6;

        this.size = Math.random() * 1.5 + 0.5;

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

        const distance = Math.sqrt(dx * dx + dy * dy);

        if(distance < mouse.radius){

          this.x -= dx / 60;
          this.y -= dy / 60;

        }

      }

      draw(){

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.fill();

      }

    }

    const createParticles = () => {

      particles = [];

      for(let i = 0; i < 55; i++){

        particles.push(new Particle());

      }

    };

    createParticles();

    const connectParticles = () => {

      for(let a = 0; a < particles.length; a++){

        for(let b = a; b < particles.length; b++){

          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;

          const distance = dx * dx + dy * dy;

          if(distance < 10000){

            ctx.beginPath();

            ctx.strokeStyle =
              "rgba(255,255,255,0.16)";

            ctx.lineWidth = 1.3;

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

      ctx.clearRect(0,0,width,height);

      particles.forEach((particle) => {

        particle.update();
        particle.draw();

      });

      connectParticles();

      requestAnimationFrame(animate);

    };

    animate();

    return () => {

      window.removeEventListener("resize", resizeCanvas);

    };

  }, []);

  return(

    <section className="stats-section">

      {/* =====================================
          NEURAL NETWORK
      ===================================== */}

      <canvas
        ref={canvasRef}
        className="stats-network"
      />

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="container-custom">

        <span className="section-mini">
          IMPACTO QUE GENERAMOS
        </span>

        <h2 className="section-title">
          Resultados medibles que impulsan tu crecimiento
        </h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>+70%</h3>
            <p>Mayor eficiencia operativa</p>
          </div>

          <div className="stat-card">
            <h3>-60%</h3>
            <p>Reducción de tiempo</p>
          </div>

          <div className="stat-card">
            <h3>-40%</h3>
            <p>Disminución de costos</p>
          </div>

          <div className="stat-card">
            <h3>+35%</h3>
            <p>Mejora en productividad</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Visibilidad y control</p>
          </div>

        </div>

      </div>

    </section>
  )

}