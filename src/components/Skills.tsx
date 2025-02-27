import { motion } from "framer-motion";

const skills = [
  "Eagerness to improve",
  "Determination",
  "Passion and attention to detail",
  "Creativity",
  "Teamwork (both for learning and mentoring)",
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8"
    >
      <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/20">
        PROFESSIONAL SKILLS
      </span>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <p className="text-white">{skill}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
