import { motion } from "framer-motion";

const generateSquares = (num) => {
  return Array.from({ length: num }).map((_, index) => ({
    id: index,
    size: Math.random() * 20 + 20, // Random size (20px - 40px)
    xStart: Math.random() * 100, // Random starting X position (%)
    yStart: Math.random() * 100, // Random starting Y position (%)
    duration: Math.random() * 4 + 4, // Movement duration (4s - 8s)
    delay: Math.random() * 2, // Delay to make movements staggered
  }));
};

const squares = generateSquares(40); // Generate 40 animated squares

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[60vh] flex items-center justify-center px-4 bg-gray-900 overflow-hidden"
    >
      {/* Background Floating Squares */}
      <div className="absolute inset-0 pointer-events-none">
        {squares.map(({ id, size, xStart, yStart, duration, delay }) => (
          <motion.div
            key={id}
            className="absolute bg-cyan-400/30 rounded-md"
            style={{
              width: size,
              height: size,
              left: `${xStart}%`,
              top: `${yStart}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0], // Fade in & out
              x: ["0%", "20%", "-30%", "40%", "0%"], // Move in different directions
              y: ["0%", "-30%", "20%", "-20%", "0%"], // Move up/down
              rotate: [0, 30, -30, 0], // Slight rotation effect
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left max-w-2xl"
          >
            <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/20">
              NODEJS TYPESCRIPT SOFTWARE DEVELOPER
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500">
              José Gómez
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl">
              Computing and I have been a match since I tried my first computer
              at the age of 7. I'm curious and self-taught, always eager to take
              the next step further in all aspects of my life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-cyan-500/20">
              <img
                src="public/lovable-uploads/fc1c2277-1ed8-44ad-9aaa-a530fbce73d4.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
            </div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
