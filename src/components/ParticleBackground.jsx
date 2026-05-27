"use client";

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle template
    class Particle {
      constructor() {
        this.reset();
        // randomize starting position y
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = Math.random() * 0.6 + 0.2;
        this.speedX = Math.sin(Math.random() * Math.PI * 2) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.001;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Wave motion
        this.speedX += Math.sin(this.y * 0.01) * 0.01;

        // Handle bounds or fading
        if (this.y < -10) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
      }
    }

    // Initialize particles (fewer on mobile for peak performance)
    const particleCount = window.innerWidth < 768 ? 35 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0; // reset shadow
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full opacity-65"
    />
  );
}
