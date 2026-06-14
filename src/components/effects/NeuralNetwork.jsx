import { useEffect, useRef } from "react";

export default function NeuralNetwork({
  particlesCount = 100,
  lineDistance = 100,
  particleColor = "rgba(255,255,255,0.85)"
}) {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let particles = [];
    let animationId;

    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    const resize = () => {

      const parent = canvas.parentElement;

      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;

      particles = [];

      const dynamicParticles =
        window.innerWidth >= 1600
          ? 260
          : window.innerWidth >= 1200
          ? 220
          : window.innerWidth >= 768
          ? 180
          : 120;

      for (let i = 0; i < dynamicParticles; i++) {
        particles.push(new Particle());
      }

    };

    class Particle {

      constructor() {

        this.x = Math.random() * width;
        this.y = Math.random() * height;

this.vx = (Math.random() - 0.5) * 1;
this.vy = (Math.random() - 0.5) * 1;

        this.size = Math.random() * 1.2 + 0.3;

      }

      update() {

        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= width) {
          this.vx *= -1;
        }

        if (this.y <= 0 || this.y >= height) {
          this.vy *= -1;
        }

        if (mouse.x && mouse.y) {

          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;

          const distance =
            Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {

            this.x -= dx * 0.002;
            this.y -= dy * 0.002;

          }

        }

      }

      draw() {

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = particleColor;
        ctx.fill();

      }

    }

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    const moveMouse = (e) => {

      const rect =
        canvas.getBoundingClientRect();

      mouse.x =
        e.clientX - rect.left;

      mouse.y =
        e.clientY - rect.top;

    };

    window.addEventListener(
      "mousemove",
      moveMouse
    );

    const connect = () => {

      for (let a = 0; a < particles.length; a++) {

        for (let b = a + 1; b < particles.length; b++) {

          const dx =
            particles[a].x -
            particles[b].x;

          const dy =
            particles[a].y -
            particles[b].y;

          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );

          if (distance < lineDistance) {

            const opacity =
              (lineDistance - distance) /
              lineDistance;

            ctx.beginPath();

            ctx.strokeStyle =
              `rgba(
                255,
                255,
                255,
                ${opacity * 0.18}
              )`;

            ctx.lineWidth = 0.7;

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

      particles.forEach((particle) => {

        particle.update();
        particle.draw();

      });

      connect();

      animationId =
        requestAnimationFrame(
          animate
        );

    };

    animate();

    return () => {

      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        moveMouse
      );

    };

  }, [
    particlesCount,
    lineDistance,
    particleColor
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="neural-network"
    />
  );

}