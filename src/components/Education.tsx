
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-8 sm:p-12"
      >
        <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-white/5 rounded-full mb-6">
          EDUCATION
        </span>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Master of Computer Science</h3>
            <p className="text-sm font-mono text-gray-400 mt-1">Stanford University • 2014 - 2016</p>
            <p className="mt-2 text-gray-400">Specialized in Artificial Intelligence and Machine Learning</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Bachelor of Software Engineering</h3>
            <p className="text-sm font-mono text-gray-400 mt-1">MIT • 2010 - 2014</p>
            <p className="mt-2 text-gray-400">Focus on Software Architecture and Systems Design</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
