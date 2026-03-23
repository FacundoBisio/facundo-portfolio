import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';
import profileImg from '../../assets/yoiconico.jpg';

export default function About() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position spring for smooth tracking
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  
  // Radius spring for expansion animation
  // 0% when not hovered, expands to 150% (full cover) when hovered
  const radius = useSpring(0, { stiffness: 100, damping: 20 });

  function handleMouseMove({ clientX, clientY }) {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseEnter({ clientX, clientY }) {
    setIsHovered(true);
    // Set initial position immediately to avoid jumping
    if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    radius.set(300); // Expand well beyond 100% to cover corners
  }

  function handleMouseLeave() {
    setIsHovered(false);
    radius.set(0); 
  }

  const maskImage = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, black 100%, transparent 100%)`;

  return (
    <section id="sobre-mi" className="w-full py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <span className="text-accent font-medium mb-3 md:mb-4 block text-sm md:text-base">About Me</span>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8 text-white leading-tight">
          Systems Engineering Student & <span className="text-accent">Fullstack Creator</span>.
        </h2>
        <div className="space-y-4 md:space-y-6 text-secondary text-base md:text-lg leading-relaxed">
          <p>
            I'm Facundo Bisio, a developer from Córdoba, Argentina, currently studying <strong>Software Engineering at Universidad Siglo 21</strong> (3rd Year) and holding a Technician degree in Programming from ITS Villada.
          </p>
          <p>
            As a <strong>freelance developer</strong>, I've built production websites for international clients. For <strong>Confituras Palmelita</strong> (Spain), I deployed a multi-language e-commerce site implementing hreflang strategy for international SEO, Schema.org markup for enhanced SERP visibility, and Core Web Vitals optimization using fetchpriority="high" for critical assets. For <strong>EUSA Partners</strong>, I developed a premium "Founder Applications" platform with Tailwind CSS and PHP backend, featuring optimistic UI for instant user feedback and technical SEO with JSON-LD/Open Graph integration.
          </p>
          <p>
            I also founded <strong>FFMates Store</strong>, a scalable e-commerce platform where I engineered the entire architecture using <strong>React Context API</strong> for global state management, built a performant product catalog with <strong>Node.js/Express</strong> backend, and implemented error boundary handling for robust UX.
          </p>
          <p>
            I specialize in the <strong>MERN stack (MongoDB, Express, React, Node)</strong>, modern CSS frameworks like <strong>Tailwind CSS</strong>, and advanced techniques like optimistic UI, international SEO (hreflang, Schema.org), and Core Web Vitals optimization. I'm passionate about clean code, performance, and creating intuitive user experiences.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative w-full md:w-auto"
      >
        {/* Container for the effect */}
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative z-10 w-full aspect-4/5 max-w-[280px] sm:max-w-sm mx-auto md:ml-auto md:mr-0 bg-surface rounded-2xl overflow-hidden border border-white/5"
        >
           {/* Background: Black and White Image (Always Visible) */}
           <img 
             src={profileImg} 
             alt="Facundo Bisio B&W" 
             className="absolute inset-0 w-full h-full object-cover filter grayscale pointer-events-none" 
           />

           {/* Foreground: Color Image (Revealed by Mask) */}
           <motion.img 
             style={{ maskImage, WebkitMaskImage: maskImage }}
             src={profileImg} 
             alt="Facundo Bisio Color" 
             className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
           />
           
           {/* Hint text if not hovered */}
           {!isHovered && (
             <div className="absolute bottom-4 right-4 pointer-events-none opacity-50 text-xs text-white">
                Hover to reveal
             </div>
           )}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-full h-full border border-white/10 rounded-2xl z-0" />
      </motion.div>
    </section>
  );
}
