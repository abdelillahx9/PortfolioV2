import { useEffect, useRef, useState } from 'react';

const InteractiveNet = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let nodes: Node[] = [];
    let stars: Star[] = [];
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    const interactionRadius = 200; // Distance at which nodes react to mouse
    const connectionDistance = 150; // Maximum distance for nodes to connect

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

    // Node class
    class Node {
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      opacity: number;
      vx: number;
      vy: number;
      twinkleSpeed: number;
      twinklePhase: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.baseOpacity = Math.random() * 0.4 + 0.3; // 0.3-0.7 range
        this.opacity = this.baseOpacity;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Movement with boundaries - bounce off edges
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas!.width, this.x));
        this.y = Math.max(0, Math.min(canvas!.height, this.y));

        // Calculate distance to mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Increase opacity if mouse is near
        if (distance < interactionRadius) {
          const brightness = 1 - (distance / interactionRadius);
          this.opacity = this.baseOpacity + brightness * 0.7;
        } else {
          // Gentle twinkling effect
          this.twinklePhase += this.twinkleSpeed;
          this.opacity = this.baseOpacity + Math.sin(this.twinklePhase) * 0.2;
        }
      }

      draw() {
        ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();

        // Add glow effect for brighter nodes
        if (this.opacity > 0.6) {
          ctx!.strokeStyle = `rgba(167, 139, 250, ${this.opacity * 0.6})`; // Purple glow
          ctx!.lineWidth = 1.5;
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.size + 3, 0, Math.PI * 2);
          ctx!.stroke();
        }
      }

      // Check connection to another node
      canConnectTo(other: Node): boolean {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < connectionDistance;
      }

      drawConnection(other: Node) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          // Calculate connection opacity based on distance and node brightness
          const distanceOpacity = 1 - (distance / connectionDistance);
          const brightnessOpacity = (this.opacity + other.opacity) / 2;
          const opacity = distanceOpacity * brightnessOpacity * 0.5;

          // Draw connection
          ctx!.strokeStyle = `rgba(167, 139, 250, ${opacity})`; // Purple connections
          ctx!.lineWidth = opacity * 2 + 0.5; // Thicker for brighter connections
          ctx!.beginPath();
          ctx!.moveTo(this.x, this.y);
          ctx!.lineTo(other.x, other.y);
          ctx!.stroke();
        }
      }
    }

    // Initialize nodes
    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < 80; i++) { // Fewer nodes for cleaner network
        nodes.push(new Node());
      }
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < 100; i++) { // Fewer stars to not overwhelm the network
        stars.push(new Star());
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas completely (no trails)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars first (background layer)
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Draw connections first (behind nodes)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].canConnectTo(nodes[j])) {
            nodes[i].drawConnection(nodes[j]);
          }
        }
      }

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
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
    initNodes();
    initStars();
    animate();

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-transform duration-300 ease-out cursor-none ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ pointerEvents: 'auto' }}
      />

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-background-light/30 dark:bg-background-dark/30 pointer-events-none"></div>
    </div>
  );
};

export default InteractiveNet;