import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function Layout({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll smoothness
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Mouse Spotlight Effect
    const handleMouseMove = (e) => {
      // Global effects
      if (containerRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        containerRef.current.style.setProperty('--gx', `${x}px`);
        containerRef.current.style.setProperty('--gy', `${y}px`);
      }
    };

    // Smooth Scroll for Anchors
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element, { offset: -50 }); // Offset for nice spacing
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="antialiased min-h-screen selection:bg-blue-500/30 selection:text-blue-200 relative"
      style={{
         "--gx": "50%",
         "--gy": "50%"
      }}
    >
      {/* Global Mouse Spotlight Background */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--gx) var(--gy), rgba(59, 130, 246, 0.15), transparent 80%)`
        }} 
      />

      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 z-[-2] bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <main className="relative flex flex-col items-center w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {children}
      </main>
    </div>
  );
}
