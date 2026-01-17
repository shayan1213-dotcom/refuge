import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <div className="bg-refuge-dark min-h-screen text-refuge-cream selection:bg-refuge-gold selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;