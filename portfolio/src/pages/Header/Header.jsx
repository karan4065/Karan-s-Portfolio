import React, { useState, useEffect, useRef } from "react";
import {
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaRocket,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  const navLinks = [
    { id: "home",       icon: FaRocket,      text: "Hero"       },
    { id: "skills",     icon: FaCode,        text: "Skills"     },
    { id: "experience", icon: FaBriefcase,   text: "Experience" },
    { id: "education",  icon: FaGraduationCap, text: "Education" },
    { id: "projects",   icon: FaLaptopCode,  text: "Projects"   },
    { id: "contact",    icon: FaEnvelope,    text: "Contact"    },
  ];

  // Update sliding pill position whenever active index changes
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
      });
    }
  }, [activeIndex, isMenuOpen]);

  // IntersectionObserver to track which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers = [];

    const handleIntersect = (entries) => {
      // Find all intersecting sections and pick the one highest on screen
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length === 0) return;
      // Pick the one closest to top of viewport
      intersecting.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      );
      const topEntry = intersecting[0];
      const sectionId = topEntry.target.getAttribute("data-section");
      if (!sectionId) return;
      const idx = sectionIds.indexOf(sectionId);
      if (idx !== -1) {
        setActiveLink(sectionId);
        setActiveIndex(idx);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.querySelector(`[data-section="${id}"]`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(`[data-section="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl border-b border-cyan-500/10 md:bg-transparent md:border-none md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-blue-900 via-slate-600 to-indigo-600 animate-gradient-x">
          <nav
            ref={navRef}
            className="relative bg-gradient-to-r from-slate-900/90 via-slate-900/90 to-slate-900/90 backdrop-blur-md md:rounded-full px-4 md:px-3 py-2.5 border border-cyan-500/10"
          >
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white font-bold text-base"
              >
                Portfolio
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop sliding pill background */}
            <div
              className="hidden md:block absolute top-1/2 -translate-y-1/2 h-[calc(100%-10px)] rounded-full bg-gradient-to-r from-cyan-900 pointer-events-none"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                transition: "left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            />

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-1 py-3 md:py-0">
                {navLinks.map(({ id, icon: Icon, text }, i) => (
                  <button
                    key={id}
                    ref={(el) => (itemRefs.current[i] = el)}
                    onClick={() => scrollToSection(id)}
                    className={`relative z-10 px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-colors duration-200 flex items-center gap-2
                      ${
                        activeLink === id
                          ? "text-white"
                          : "text-gray-300 hover:text-white hover:bg-cyan-500/10 md:hover:bg-transparent"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base transition-transform duration-300 ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span>{text}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
