import LogoLoop from '../ui/LogoLoop';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  const contactData = [
    { label: "facubisio433@gmail.com", icon: <Mail />, href: "mailto:facubisio433@gmail.com" },
    { label: "LinkedIn", icon: <Linkedin />, href: "https://www.linkedin.com/in/facundo-bisio-25a104247/" },
    { label: "GitHub", icon: <Github />, href: "https://github.com/FacundoBisio" },
    { label: "+54 9 351 366 2570", icon: <Phone />, href: "tel:+5493513662570" },
  ];

  return (
    <section id="contacto" className="w-full py-24 md:py-40 flex flex-col items-center text-center overflow-hidden">
      <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter px-4">
        Let's build something great.
      </h2>
      <p className="text-base md:text-xl text-secondary mb-16 md:mb-20 max-w-lg px-4">
        Open to Fullstack / Frontend opportunities.<br/>
        Based in Córdoba, Argentina.
      </p>

      <LogoLoop items={contactData} speed={30} />
    </section>
  );
}
