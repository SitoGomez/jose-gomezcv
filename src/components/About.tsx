
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-8 sm:p-12"
      >
        <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-cyan-500/10 rounded-full mb-6">
          ABOUT ME
        </span>
        <h2 className="text-3xl font-bold mb-6">But before start... a little bit about who I am.</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Computing and I have been a match since I tried my first computer at the age of 7. 
          I already had a clear vocation in school, so later on, I completed the intermediate 
          and advanced degrees in web programming.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I am curious as well as self-taught since I can remember, which has served me well 
          in trying to go one step further in all aspects of my life.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
