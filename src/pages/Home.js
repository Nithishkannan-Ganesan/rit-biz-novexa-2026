import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import bgImage from "../assets/images/hogwart-bg.webp";
import clgLogo from "../assets/images/Ramco-logo.jpg";
import houses from "../assets/images/houses.png";
import aboutbg from "../assets/images/about-section-bg.png";
import bannerBg from "../assets/images/banner-bg.png";
import poster from "../assets/images/poster.jpeg";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hp-container fade-in">

      {/* 🔝 COLLEGE HEADER */}
      <div
        className="college-header"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >

        {/* LEFT LOGO */}
        <div className="header-left">
          <img src={clgLogo} alt="logo" />
        </div>

        {/* CENTER TEXT */}
        <div className="header-center">
          <h1>RAMCO INSTITUTE OF TECHNOLOGY</h1>

          <p>(An Autonomous Institution)</p>

          <p>Approved by AICTE & Affiliated to Anna University</p>

          <p>NAAC Accredited with ‘A+’ Grade</p>

          <h2>DEPARTMENT OF CSBS</h2>

          <p>Computer Science and Business Systems</p>
        </div>

        {/* RIGHT LOGO (OPTIONAL EMPTY) */}
        <div className="header-right"></div>

      </div>

      {/* 🧭 NAVBAR */}
      <div className="navbar">

              {/* LEFT HAMBURGER */}
              <div 
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? "✕" : "☰"}
              </div>

              {/* CENTER TITLE */}
              <h2 className="metallic-text">
                RIT Biz Novexa 2026
              </h2>

              {/* DESKTOP LINKS */}
              <div className="nav-links desktop">
                <Link to="/home">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/hackathon">Hackathon</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            {/* MOBILE SIDEBAR */}
            <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>

              <div className="sidebar-top">
                <span 
                  className="close-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </span>
              </div>

              <div className="sidebar-links">
                <Link to="/home" onClick={()=>setMenuOpen(false)}>Home</Link>
                <Link to="/events" onClick={()=>setMenuOpen(false)}>Events</Link>
                <Link to="/hackathon" onClick={()=>setMenuOpen(false)}>Hackathon</Link>
                <Link to="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
              </div>

      </div>

      {/* DARK OVERLAY */}
      {menuOpen && (
        <div 
          className="overlay-blur"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* 🎬 HERO */}
      <div className="hero">

        {/* ✨ PARTICLES */}
        <div className="particles">
          {[...Array(40)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        {/* BACKGROUND */}
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* CONTENT */}
        <div className="hero-content">

          <h1 className="hero-title">
            WizardTech Symposium 2026
          </h1>

          <p className="hero-text">
            Welcome to the World of Wizards. Enter the magical realm of
            technology, creativity, and innovation.
          </p>

          <a 
            href={poster}
            download="poster.jpeg"
            className="hero-btn"
          >
            VIEW POSTER
          </a>

        </div>

      </div>

      {/* 🧾 ABOUT + HOUSES */}
      <div
        className="about-wrapper"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >

        {/* ABOUT CARD */}
        <div className="about-card">

          <h2 className="about-title">
            About RIT Biz Novexa
          </h2>

          <p>
            RIT Biz Novexa is a dynamic symposium organized by the Department of 
            Computer Science and Business Systems at Ramco Institute of Technology.

            <br /><br />

            The symposium features technical and non-technical events including 
            coding, paper presentations, marketing, and interactive competitions.

            <br /><br />

            Join us where creativity meets technology.
          </p>

        </div>

        {/* HOUSES */}
        <div className="houses-container">
          <p style={{color: "white", margin: "20px"}}>
            You will be chosen into any one of the four major houses to participate
          </p>

          <div className="house-image">
            <img src={houses} alt="houses" />
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

          <a href="https://www.instagram.com/ritcsbs?igsh=MThsYWpzN2JndHNtZw==" className="social-btn">
            <b> CSBS Instagram</b>
          </a>

          <a href="https://www.linkedin.com/posts/rit-csbs-212949257_with-the-advent-of-welcomingfreshers-to-activity-6999695434801655809-vrEU?utm_source=share&utm_medium=member_desktop" className="social-btn">
             <b> CSBS LinkedIn </b>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100087866146448" className="social-btn">
             <b> CSBS Facebook </b>
          </a>

        </div>

      </footer>

    </div>
  );
}