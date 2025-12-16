import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
// import { NotFound } from './components/NotFound'; 

const App: React.FC = () => {
  // Removed strict client-side path checking to ensure the portfolio 
  // loads correctly in all environments (preview URLs, subfolders, etc.)
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative z-10 bg-sanity-black">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;