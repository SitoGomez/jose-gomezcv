import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Contact from "../components/Contact";
import { BackgroundAndAnimation } from "../components/BackgroundAndAnimation";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-900 to-blue-900">
      <BackgroundAndAnimation />
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
