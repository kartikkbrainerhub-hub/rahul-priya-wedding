"use client";

import { useEffect, useRef } from 'react';

export default function PetalRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let petals = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Petal {
      constructor() {
        this.reset();
        this.y = Math.random() * -canvas.height; // start off-screen
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 1.2 + 0.8;
        this.speedX = Math.random() * 1 - 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        // 70% crimson rose petals, 30% orange marigold petals
        this.type = Math.random() < 0.7 ? 'rose' : 'marigold';
        this.opacity = Math.random() * 0.4 + 0.5;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        // Sway back and forth
        this.speedX += Math.sin(this.y * 0.02) * 0.02;

        if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        if (this.type === 'rose') {
          // Crimson rose petal path (classic leaf/petal curve)
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-this.size, -this.size / 2, -this.size, this.size * 1.5, 0, this.size * 1.5);
          ctx.bezierCurveTo(this.size, this.size * 1.5, this.size, -this.size / 2, 0, 0);
          
          // Gradient for realistic rose velvet texture
          const grad = ctx.createRadialGradient(-2, 2, 1, 0, 0, this.size * 1.2);
          grad.addColorStop(0, '#E8C5C8'); // highlights
          grad.addColorStop(0.3, '#800020'); // deep maroon
          grad.addColorStop(1, '#5B0612'); // darkest edge
          ctx.fillStyle = grad;
        } else {
          // Marigold petal shape (rounded fan shape)
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(-this.size * 0.8, this.size * 0.4, -this.size * 0.5, this.size * 1.2);
          ctx.quadraticCurveTo(0, this.size * 1.6, this.size * 0.5, this.size * 1.2);
          ctx.quadraticCurveTo(this.size * 0.8, this.size * 0.4, 0, 0);

          const grad = ctx.createLinearGradient(0, 0, 0, this.size * 1.5);
          grad.addColorStop(0, '#FFD700'); // bright gold
          grad.addColorStop(0.5, '#FFA500'); // orange
          grad.addColorStop(1, '#FF4500'); // reddish orange
          ctx.fillStyle = grad;
        }

        ctx.fill();
        ctx.restore();
      }
    }

    // Fewer petals on mobile
    const petalCount = window.innerWidth < 768 ? 15 : 35;
    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((petal) => {
        petal.update();
        petal.draw();
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
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
    />
  );
}
