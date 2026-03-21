import "./Contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import contactBg from "../assets/images/contact-bg.webp";
import clgLogo from "../assets/images/Ramco-logo.jpg";
import bannerBg from "../assets/images/banner-bg.png";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contact-page">

      {/* HEADER */}
      <div
        className="college-header"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="header-left">
          <img src={clgLogo} alt="RIT Logo" />
        </div>

        <div className="header-center">
          <h1>RAMCO INSTITUTE OF TECHNOLOGY</h1>
          <p>(An Autonomous Institution)</p>
          <p>Approved by AICTE & Affiliated to Anna University</p>
          <p>NAAC Accredited with ‘A+’ Grade</p>
          <h2>DEPARTMENT OF CSBS</h2>
          <p>Computer Science and Business Systems</p>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="navbar">

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        <h2 className="metallic-text">RIT Biz Novexa 2026</h2>

        <div className="nav-links desktop">
          <Link to="/home">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/hackathon">Hackathon</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>✕</span>
        </div>

        <div className="sidebar-links">
          <Link to="/home" onClick={()=>setMenuOpen(false)}>Home</Link>
          <Link to="/events" onClick={()=>setMenuOpen(false)}>Events</Link>
          <Link to="/hackathon" onClick={()=>setMenuOpen(false)}>Hackathon</Link>
          <Link to="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay-blur" onClick={() => setMenuOpen(false)} />
      )}

      {/* CONTACT SECTION */}
      <div
        className="contact-bg"
        style={{ backgroundImage: `url(${contactBg})` }}
      >

        <div className="contact-overlay"></div>

        {/* PARTICLES */}
        <div className="contact-particles">
          {[...Array(30)].map((_, i) => <span key={i}></span>)}
        </div>

        <div className="contact-container">

          <h1 className="contact-title">CONTACT US</h1>

          <h2 className="contact-subtitle">COORDINATORS CONTACT</h2>

          <div className="contact-cards">

            <div className="contact-card">
              <h3>YASHWIN</h3>
              <a href="tel:+918248818119">+91 8248818119</a>
            </div>

            <div className="contact-card">
              <h3>ASHINSHREE</h3>
              <a href="tel:+918220315775">+91 8220315775</a>
            </div>

            <div className="contact-card">
              <h3>Coordinator 3</h3>
              <a href="tel:+91">+91</a>
            </div>

            <div className="contact-card">
              <h3>Coordinator 4</h3>
              <a href="tel:+91">+91</a>
            </div>

          </div>

          <h2 className="contact-subtitle">FOR QUERIES & SUPPORT</h2>

          <div className="contact-email-box">
            <span>EMAIL ADDRESS</span>
            <br />
            <a href="mailto:techphoenix2026@gmail.com">
              techphoenix2026@gmail.com
            </a>

            <p>
              For any queries, suggestions, or assistance related to RIT Biz Novexa
            </p>
          </div>

        </div>
      </div>

      {/* 🔻 FOOTER */}
      <footer className="footer-modern">

        <p className="footer-copy">
          © 2026 RIT Biz Novexa. All Rights Reserved.
        </p>

        <p className="footer-design">
          Designed & Developed by Nithish Kannan G
        </p>

        <div className="footer-socials">

          <a href="/" className="social-btn">
            🔵 CSBS Department
          </a>

          <a href="/" className="social-btn">
            🌐 ritcsbs.in
          </a>

          <a href="/" className="social-btn">
            💼 CSBS LinkedIn
          </a>

          <a href="/" className="social-btn">
            ▶ CSBS YouTube
          </a>

        </div>

      </footer>

    </div>
  );
}