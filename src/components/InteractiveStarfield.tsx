import { useEffect, useRef } from 'react';

const InteractiveStarfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars: Star[] = [];
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    const interactionRadius = 120; // Reduced for more focused interaction

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      baseOpacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random() * 0.2 + 0.1; // Much lower base opacity for calm appearance
        this.baseOpacity = this.opacity;
      }

      update() {
        // Calculate distance to mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Only increase opacity if mouse is very near - otherwise stay calm
        if (distance < interactionRadius) {
          const brightness = 1 - (distance / interactionRadius);
          this.opacity = this.baseOpacity + brightness * 0.8; // More dramatic light-up effect
        } else {
          // Stay at base opacity - no twinkling
          this.opacity = this.baseOpacity;
        }
      }

      draw() {
        ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();

        // Add glow effect for brighter stars (only when mouse is near)
        if (this.opacity > 0.5) {
          ctx!.strokeStyle = `rgba(200, 220, 255, ${this.opacity * 0.6})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.size + 2, 0, Math.PI * 2);
          ctx!.stroke();
        }
      }
    }

    // Initialize stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < 150; i++) { // Reduced from 200 for calmer appearance
        stars.push(new Star());
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with very subtle trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    initStars();
    animate();

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white z-10">
        <h1 className="text-5xl font-bold mb-2">Hi There! 👋</h1>
        <h2 className="text-4xl font-bold mb-4">
          I'M <span className="text-purple-400 font-extrabold">ABDELILLAH CHIKH</span>
        </h2>
        <p className="text-xl text-slate-300">Full-Stack Developer</p>
      </div>
    </div>
  );
};

export default InteractiveStarfield;