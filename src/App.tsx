import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { Admin } from './pages/Admin';
import { ClientSpace } from './pages/ClientSpace';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-herbes-50/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/client" element={<ClientSpace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
