import { motion } from "framer-motion";

export const BackgroundAndAnimation = () => {
  //Animated background gradient
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
    <>
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
    </>
  );
};
