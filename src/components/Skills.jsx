import { motion } from 'framer-motion';

const skills = [
  { name: "React.js / Next.js", level: "Expert" },
  { name: "Node.js / Express", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "MongoDB / SQL", level: "Proficient" },
  { name: "Git / GitHub", level: "Advanced" },
  { name: "Postman / APIs", level: "Advanced" },
];

const languages = [
  { name: "Spanish (Native)", level: "Native" },
  { name: "English (FCE - High)", level: "B2/C1" },
];

export default function Skills() {
  return (
    <section className="w-full py-20 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
           <h3 className="text-2xl font-semibold text-white mb-6">Technical Arsenal</h3>
           <p className="text-secondary leading-relaxed mb-8">
             I bring a diverse toolkit to the table, specializing in the JavaScript ecosystem. My academic background gives me a strong foundation in software architecture, while my professional work focuses on shipping real-world products.
           </p>
           
           <h4 className="text-white font-medium mb-4 mt-8">Languages</h4>
           <div className="flex gap-4">
              {languages.map((lang, i) => (
                <div key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-secondary border border-white/5">
                  {lang.name}
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 bg-surface rounded-lg border border-white/5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              <span className="block text-white font-medium mb-1">{skill.name}</span>
              <span className="block text-xs text-secondary">{skill.level}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
