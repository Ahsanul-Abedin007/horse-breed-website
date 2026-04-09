import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Home from '@/pages/Home';
import Breeds from '@/pages/Breeds';
import BreedDetail from '@/pages/BreedDetail';
import Marketplace from '@/pages/Marketplace';
import HorseProfile from '@/pages/HorseProfile';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/breeds/:slug" element={<BreedDetail />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/horses/:slug" element={<HorseProfile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
