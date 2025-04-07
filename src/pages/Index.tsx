
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';

const Index = () => {
  useEffect(() => {
    // Create floating code elements for background effect
    const createFloatingCode = () => {
      const codeSnippets = [
        'function init() { return true; }',
        'const app = new App();',
        'import React from "react";',
        '<div className="container">',
        'addEventListener("load", startup)',
        'export default Component;',
        'npm install tailwindcss',
        'git commit -m "Initial commit"',
        'docker-compose up -d',
        'python manage.py runserver',
        'SELECT * FROM users WHERE active = 1;',
        'const data = await fetch("/api");',
        '@tailwind base;',
        'const [state, setState] = useState();',
        'useEffect(() => { }, []);',
      ];
      
      const container = document.querySelector('body');
      
      for (let i = 0; i < 12; i++) {
        const codeElement = document.createElement('div');
        codeElement.className = `floating-code code-block-${(i % 4) + 1}`;
        codeElement.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random positioning
        codeElement.style.top = `${Math.random() * 100}vh`;
        codeElement.style.left = `${Math.random() * 100}vw`;
        
        container?.appendChild(codeElement);
      }
    };
    
    createFloatingCode();
    
    // Cleanup function
    return () => {
      document.querySelectorAll('.floating-code').forEach(el => el.remove());
    };
  }, []);
  
  return (
    <div className="min-h-screen" style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233060A9' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")` 
    }}>
      <Navbar />
      <Header />
      
      <div className="tech-pattern">
        <About />
      </div>
      
      <div className="dots-pattern">
        <Experience />
      </div>
      
      <div className="bg-gradient-radial from-white via-primary/5 to-white">
        <Projects />
      </div>
      
      <div className="circuit-pattern">
        <Skills />
      </div>
      
      <div className="dots-pattern">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
