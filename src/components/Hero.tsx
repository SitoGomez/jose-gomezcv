import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[45vh] flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left max-w-2xl"
          >
            <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/20">
              NODEJS TYPESCRIPT SOFTWARE DEVELOPER
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-violet-500">
              José Gómez
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-xl">
              Computing and I have been a match since I tried my first computer
              at the age of 7. I'm curious and self-taught, always eager to take
              the next step further in all aspects of my life.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg"
          >
            <img
              src="/profile_picture.png"
              alt="José Gómez"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
