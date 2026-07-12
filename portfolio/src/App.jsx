import React from "react";
import "./assets/css/index.css";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      
      {/* Unified background for Skills to Contact sections */}
      <div className="relative bg-[#020617]">
        {/* Grid Background - spans entire sections */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Animated particles overlay - continuous across all sections */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d440,transparent_50%),radial-gradient(circle_at_80%_80%,#3b82f640,transparent_50%)] animate-pulse opacity-30 pointer-events-none" />
        
        {/* Content sections */}
        <div className="relative z-10">
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}
