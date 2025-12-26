import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-start pt-20">
      
      {/* Abstract Background Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-medium text-secondary mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] text-white my-6">
          Building <span className="opacity-50">polished</span> <br />
          digital experiences.
        </h1>

        <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed mb-10">
          I'm Facundo Bisio — a Senior Frontend Engineer specialized in high-performance UIs, design systems, and creative development.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 text-center">
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </a>
          
          <a href="#contact" className="px-8 py-4 bg-surface text-white font-medium rounded-full border border-white/5 hover:bg-white/5 transition-colors text-center flex items-center justify-center">
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 text-white/30 text-sm flex items-center gap-4"
      >
        <div className="w-px h-12 bg-linear-to-b from-white/0 via-white/20 to-white/0" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
