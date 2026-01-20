import { motion } from 'framer-motion';

const defaultItems = [
  { label: "Email", icon: "✉️" },
  { label: "LinkedIn", icon: "🔗" },
  { label: "GitHub", icon: "💻" },
];

export default function LogoLoop({ items = defaultItems, speed = 20 }) {
  // Duplicate items to ensure seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden relative fade-mask-x">
      <motion.div
        className="flex gap-16 w-max py-8 items-center"
        animate={{ x: "-50%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-white/50 hover:text-white transition-colors whitespace-nowrap group"
          >
            <span className="text-white/50 group-hover:scale-110 transition-transform">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
