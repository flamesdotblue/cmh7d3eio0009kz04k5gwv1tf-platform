import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <NavBar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
