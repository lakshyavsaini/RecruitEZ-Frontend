
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const particles: HTMLDivElement[] = [];
    const numParticles = 20;
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      
      // Random size between 50px and 150px
      const size = Math.random() * 100 + 50;
      
      // Set styling for particles
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      
      // Random blue/purple gradient
      const hue1 = Math.floor(Math.random() * 60) + 210; // Blues and purples
      const hue2 = Math.floor(Math.random() * 60) + 240; // More purples
      particle.style.background = `radial-gradient(circle, hsla(${hue1}, 80%, 70%, 0.2), hsla(${hue2}, 90%, 50%, 0.1))`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Add blur for glass effect
      particle.style.filter = 'blur(15px)';
      particle.style.zIndex = '0';
      
      // Add transition
      particle.style.transition = 'transform 1s ease-out';
      
      container.appendChild(particle);
      particles.push(particle);
      
      // Set initial "random" positions
      particle.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    }
    
    // Handle mousemove event
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      particles.forEach((particle, i) => {
        const particleRect = particle.getBoundingClientRect();
        const particleX = particleRect.left + particleRect.width/2 - rect.left;
        const particleY = particleRect.top + particleRect.height/2 - rect.top;
        
        // Calculate distance from mouse to particle
        const dx = x - particleX;
        const dy = y - particleY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Move away from cursor with strength inversely proportional to distance
        const maxDistance = 300;
        const strength = Math.max(0, 1 - distance / maxDistance);
        const moveX = -dx * strength * 0.3;
        const moveY = -dy * strength * 0.3;
        
        // Apply movement
        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => {
        container.removeChild(particle);
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    />
  );
};

export default AnimatedBackground;
