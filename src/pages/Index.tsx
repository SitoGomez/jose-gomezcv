import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Contact from "../components/Contact";

const Index = () => {
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

  const squares = generateSquares(40);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-900 to-blue-900">
      {/* Animated Background Gradient */}

      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-600 via-indigo-900 to-blue-900 z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Floating Particles */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <div className="space-y-12">
          <About />
          <Experience />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-12xl mx-auto">
            <Skills />
            <Languages />
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
