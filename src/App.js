// src/App.js
import React, { useState, useRef, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo_white.png'; // Make sure this path is correct
import emblem from './assets/emblem.png'; // Make sure this path is correct

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const menuOptions = [
    <Link to="/">Home</Link>, 
    <Link to="/about">About</Link>, 
    <Link to="/contact">Contact</Link>
  ];

  return (
    <nav>
      <img src={logo} alt="Denteda Logo" className="logo" />
      <ul>
        <Dropdown options={menuOptions} />
      </ul>
    </nav>
  );
};

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Denteda Dental Clinic</h2>
      <p>Located in the heart of Izmir, we are dedicated to creating beautiful smiles with a touch of care and expertise. At Denteda, your dental health is our top priority.</p>
      <img src={emblem} alt="Denteda Emblem" className="emblem" />
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About Denteda</h2>
      <p>At Denteda, we combine modern technology with a personalized approach to ensure that every patient receives the best care possible. Our clinic, located in Izmir, Turkey, offers a wide range of dental services from preventive care to cosmetic and restorative dentistry.</p>
      <p>Our experienced team of dentists and hygienists is committed to making your visit comfortable and stress-free. We are passionate about helping you achieve and maintain a healthy, beautiful smile.</p>
      <p>Whether you're looking for a routine check-up or more specialized treatment, Denteda is here to meet all your dental needs.</p>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="contact">
      <h2>Contact Denteda</h2>
      <p>If you have any questions or would like to schedule an appointment, please don't hesitate to reach out. We are located in Izmir, Turkey.</p>
      <p><strong>Address:</strong> 123 Dental St, Izmir, Turkey</p>
      <p><strong>Phone:</strong> (555) 123-4567</p>
      <p><strong>Email:</strong> info@denteda.com</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Denteda Dental Clinic. All rights reserved.</p>
      <p>Located in Izmir, Turkey. Contact us at (555) 123-4567 or visit us at 123 Dental St, Izmir.</p>
    </footer>
  );
}

const SocialMediaHeader = () => {
  return (
    <div className="social-media-header">
      <a href="https://api.whatsapp.com/send/?phone=905072790323&text&type=phone_number" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.youtube.com/denteda" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://www.instagram.com/denteda.clinic" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://mail.google.com/mail/u/0/?fs=1&to=clinic@denteda.com&tf=cm" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-google"></i>
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <SocialMediaHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
