import { motion } from 'framer-motion';

const projects = [
  {
    title: "Tienda Mates",
    category: "E-Commerce / Fullstack",
    description: "Complete e-commerce for 'Mates' with cart, catalog, and product details. Built with React Context API for global state and Node.js/Express backend.",
    stack: ["React", "Node.js", "Express", "Tailwind"],
    year: "2024",
    link: "https://tienda-mates.vercel.app/",
    repo: "https://github.com/FacundoBisio/Tienda-Mates"
  },
  {
    title: "Palmelita",
    category: "Official Website / Business",
    description: "Official site for 'Palmelita' (Canary Islands). AI-optimized development focusing on premium aesthetic, multi-language support, and SEO.",
    stack: ["HTML5", "CSS3", "JavaScript", "AI Augmented"],
    year: "2024",
    link: "https://confituras.vercel.app/",
    repo: "https://github.com/FacundoBisio/confituras"
  },
  {
    title: "EUSA Website",
    category: "Institutional Website",
    description: "Modern web presence for EUSA. Focused on clear information architecture and accessible user experience.",
    stack: ["React", "Vite", "Tailwind"],
    year: "2024",
    link: "https://eusa-website.vercel.app/", // Inferred or placeholder
    repo: "https://github.com/FacundoBisio/eusa-website"
  },
  {
    title: "Clima App",
    category: "Utility / API Integration",
    description: "Real-time weather application integrating external meteorological APIs. Features dynamic background changes based on weather conditions.",
    stack: ["React", "API Integration", "CSS Modules"],
    year: "2023",
    link: "#",
    repo: "https://github.com/FacundoBisio/clima-app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-32">
       <div className="mb-20 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">Selected Work</h2>
          <span className="text-secondary hidden md:block">Case Studies ({projects.length})</span>
       </div>

       <div className="w-full border-t border-white/10">
         {projects.map((project, index) => (
           <motion.a 
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             key={index}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: index * 0.1, duration: 0.5 }}
             className="group w-full py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-white/5 transition-all duration-500 px-6 -mx-6 rounded-lg relative overflow-hidden"
           >
             {/* Hover Glow Effect specifically for project cards */}
             <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

             <div className="md:w-1/3 relative z-10">
               <span className="text-xs font-mono text-accent mb-2 block">{project.category}</span>
               <h3 className="text-3xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
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
       </div>
    </section>
  );
}
