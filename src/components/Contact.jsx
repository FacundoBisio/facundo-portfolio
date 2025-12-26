export default function Contact() {
  return (
    <section id="contact" className="w-full py-40 flex flex-col items-center text-center">
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
        Let's build something great.
      </h2>
      <p className="text-xl text-secondary mb-12 max-w-lg">
        Open to Fullstack / Frontend opportunities.<br/>
        Based in Córdoba, Argentina.
      </p>

      <a href="mailto:facubisio433@gmail.com" className="text-3xl md:text-4xl text-white hover:text-accent transition-colors font-semibold mb-12 block">
        facubisio433@gmail.com
      </a>
      
      <div className="flex gap-8">
        <a href="https://linkedin.com/in/facundo-bisio-griffa-25a104247/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">LinkedIn</a>
        <a href="https://github.com/FacundoBisio" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">GitHub</a>
        <a href="tel:+5493513662570" className="text-secondary hover:text-white transition-colors">+54 9 351 366 2570</a>
      </div>
    </section>
  );
}
