import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="w-full py-20 md:py-32">
       <div className="mb-12 md:mb-20 flex items-end justify-between">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Selected Work</h2>
          <span className="text-secondary hidden md:block">Case Studies ({projects.length})</span>
       </div>

       <motion.div 
         variants={staggerContainer}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
         className="w-full border-t border-white/10"
       >
         {projects.map((project, index) => (
           <motion.a 
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             key={index}
             variants={fadeInUp}
             className="group w-full py-8 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 cursor-pointer hover:bg-white/5 transition-all duration-500 px-4 md:px-6 -mx-4 md:-mx-6 rounded-lg relative overflow-hidden"
           >
             {/* Hover Glow Effect specifically for project cards */}
             <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

             <div className="md:w-1/3 relative z-10">
               <span className="text-xs font-mono text-accent mb-1 md:mb-2 block">{project.category}</span>
               <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
             </div>
             
             <div className="md:w-1/3 relative z-10">
               <p className="text-secondary mb-4">{project.description}</p>
               <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs text-secondary/60 bg-white/5 px-2 py-1 rounded-sm">{tech}</span>
                  ))}
               </div>
             </div>

             <div className="md:w-auto relative z-10 text-right">
               <span className="text-sm font-mono text-gray-600 block mb-2">{project.year}</span>
               <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">Visit Project &rarr;</span>
             </div>
           </motion.a>
         ))}
       </motion.div>
    </section>
  );
}
