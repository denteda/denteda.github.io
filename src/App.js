// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo_black.png';
import emblem from './assets/emblem_black.png';

const GoogleReviews = () => (
    <div>
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.0191556693303!2d26.7416406!3d38.2790488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb93bbe72190a5%3A0x5d7af6bcbe3ab5d8!2zw5Z6ZWwgREVOVEVEQSBBxJ_EsXogdmUgRGnFnyBTYcSfbMSxxJ_EsSBQb2xpa2xpbmnEn2k!5e0!3m2!1sen!2str!4v1725211531403!5m2!1sen!2str"
                width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className="google-reviews">
            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            <div class="elfsight-app-44b19ef1-e94a-47da-bd4d-9e6d09fb6713" data-elfsight-app-lazy></div>
        </div>
    </div>
);

const TopHeader = () => (
    <div className="top-header">
        <div className="contact-info">
            <span>✉ info@denteda.com ☎ (232) 759 00 75</span>
        </div>
        <a id="top-header-wp" href="https://wa.me/905072790323" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp fa-3x"></i>
        </a>
        <a id="top-header-yt" href="https://www.youtube.com/denteda" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-3x"></i>
        </a>
        <a href="https://www.instagram.com/denteda.clinic" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-3x"></i>
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=clinic@denteda.com&tf=cm" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope fa-3x"></i>
        </a>
    </div>
);

const Navbar = () => {
    React.useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <img src={logo} alt="Denteda Logo" className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

const Hero = () => (
    <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1>Welcome to Denteda Dental Clinic</h1>
            <p>Your Smile, Our Passion</p>
            <a href="/contact">Schedule an Appointment</a>
        </div>
    </section>
);

const Home = () => (
    <div className="home">
        <h2>Welcome to Denteda Dental Clinic</h2>
        <p>Located in the heart of Izmir, we are dedicated to creating beautiful smiles with a touch of care and expertise. At Denteda, your dental health is our top priority.</p>
        <img src={emblem} alt="Denteda Emblem" className="emblem" />
    </div>
);

const About = () => (
    <div className="about">
        <h2>About Denteda</h2>
        <p>At Denteda, we combine modern technology with a personalized approach to ensure that every patient receives the best care possible. Our clinic, located in Izmir, Turkey, offers a wide range of dental services from preventive care to cosmetic and restorative dentistry.</p>
        <p>Our experienced team of dentists and hygienists is committed to making your visit comfortable and stress-free. We are passionate about helping you achieve and maintain a healthy, beautiful smile.</p>
        <p>Whether you're looking for a routine check-up or more specialized treatment, Denteda is here to meet all your dental needs.</p>
    </div>
);

const Contact = () => (
    <div className="contact">
        <h2>Contact Denteda</h2>
        <p>If you have any questions or would like to schedule an appointment, please don't hesitate to reach out. We are located in Izmir, Turkey.</p>
        <p><strong>Address:</strong> 123 Dental St, Izmir, Turkey</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> clinic@denteda.com</p>
        <form onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
        }}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" required />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" required />
            </div>
            <button type="submit">Send Message</button>
        </form>

    </div>
);

const Footer = () => (
    <footer>
        <p>&copy; 2024 Denteda Dental Clinic. All rights reserved.</p>
        <p>Located in Izmir, Turkey. Contact us at (555) 123-4567 or visit us at 123 Dental St, Izmir.</p>
    </footer>
);

function App() {
    return (
        <Router>
            <div className="App">
                <TopHeader />
                <Navbar />
                <Hero />
                <GoogleReviews />
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
