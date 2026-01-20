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
    <section id="sobre-mi" className="w-full py-32 flex flex-col md:flex-row items-center gap-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <span className="text-accent font-medium mb-4 block">About Me</span>
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white leading-tight">
          Systems Engineering Student & <span className="text-gray-500">Fullstack Creator</span>.
        </h2>
        <div className="space-y-6 text-secondary text-lg leading-relaxed">
          <p>
            I'm Facundo Bisio, a developer from Córdoba, Argentina, currently studying <strong>Software Engineering at Universidad Siglo 21</strong> (2nd Year) and holding a Technician degree in Programming from ITS Villada.
          </p>
          <p>
            My experience ranges from developing patient management systems for <strong>DownIsUp Córdoba</strong> to building full-featured e-commerce platforms. I specialize in the <strong>MERN stack (MongoDB, Express, React, Node)</strong> and obsess over performance, clean code, and intuitive UX.
          </p>
          <p>
             I've also worked as an Intern at <strong>Kunan S.A.</strong>, collaborating in Agile/Scrum environments to optimize web app performance.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative"
      >
        {/* Container for the effect */}
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative z-10 w-full aspect-4/5 max-w-sm ml-auto bg-surface rounded-2xl overflow-hidden border border-white/5"
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
