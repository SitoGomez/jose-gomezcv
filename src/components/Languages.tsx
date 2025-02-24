
import { motion } from "framer-motion";

const Languages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8"
    >
      <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/20">
        LANGUAGES
      </span>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">English</h3>
          <p className="text-gray-300">B1 English (ISE I) (09/2017 - 06/2018)</p>
          <p className="text-gray-400 mt-2">Individual and conversation classes taken between 2018 and 2022</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-300">Currently working in an international company where the official language is English</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Languages;
