import { Link } from "react-router-dom";
import "./Hackathon.css";
import { useState } from "react";

import bannerBg from "../assets/images/banner-bg.png";
import clgLogo from "../assets/images/Ramco-logo.jpg";
import eventBg from "../assets/images/event-bg.jpg";
import hackPoster from "../assets/images/hackposter.jpeg";

export default function Hackathon() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hp-container fade-in">
    <div className="hackathon-page">

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

      {/* MAIN */}
      <div
        className="hackathon-container"
        style={{ backgroundImage: `url(${eventBg})` }}
      >

        {/* PARTICLES */}
        <div className="particles">
          {[...Array(40)].map((_, i) => <span key={i}></span>)}
        </div>

        <div className="hackathon-content">

          {/* HEADER ROW */}
          <div className="hackathon-header-row">

            <h1 className="hackathon-title">
              Cook the Code (Hackathon)
            </h1>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdtfSL_Aj2loBJLwo4ntS5Ey0mmMriLE17cHP-FzUAtHVJvzA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              REGISTER NOW
            </a>

          </div>

          {/* POSTER */}
          <div className="hackathon-poster">
            <img src={hackPoster} alt="Hackathon Poster" />
          </div>

          {/* ABOUT */}
          <div className="event-card-box full">
            <h2>About the Hackathon</h2>
            <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
              {`Problem Statement
              • The problem statement will be given at the start of the event
              • Participants must work only on the given problem
              • Pre-decided ideas are not allowed

              Originality
              • All code and designs must be created during the hackathon
              • Use of pre-built projects is strictly not allowed
              • Open-source libraries and APIs can be used`}
              </p>
          </div>

          {/* DETAILS */}
          <div className="event-row">

            <div className="event-card-box half">
              <h2>Event Details</h2>
              <p><b>Date :</b> 10th April 2026</p>
              <p><b>Time :</b> 11:00 AM - 1:00 PM</p>
              <p><b>Location :</b> IT Lab</p>
            </div>

            <div className="event-card-box half">
              <h2>Prize Pool</h2>
              <p><b>1st :</b> ₹1000 Cash Prize + Certificate</p>
              <p><b>2nd :</b> ₹500 Cash Prize + Certificate</p>
              <p><b>Others :</b> Participation Certificate(Hard copy)</p>
            </div>

          </div>

          {/* COORDINATORS */}
          <div className="event-row">

            <div className="event-card-box half">
              <h2>Student Coordinators</h2>
              <p>Gayathri Devi, Kathirvel G</p>
            </div>

            <div className="event-card-box half">
              <h2>Faculty Coordinator</h2>
              <p>B Yazhini</p>
            </div>

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
    </div>
  );
}