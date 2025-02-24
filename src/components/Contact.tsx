import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/20">
          CONTACT INFORMATION
        </span>
        <div className="space-y-6 mt-8">
          <motion.a
            href="mailto:srsitogomez@gmail.com"
            className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Mail className="w-5 h-5 group-hover:stroke-cyan-400" />
            <span>srsitogomez@gmail.com</span>
          </motion.a>
          <motion.a
            href="tel:+34625492411"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Phone className="w-5 h-5" />
            <span>+34 625 49 24 11</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jos%C3%A9-g%C3%B3mez-sevillano-b70530177/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Linkedin className="w-5 h-5 group-hover:stroke-cyan-400" />
            <span>LinkedIn Profile</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
