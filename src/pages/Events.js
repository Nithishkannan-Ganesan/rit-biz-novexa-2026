import "./Events.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import bannerBg from "../assets/images/banner-bg.png";
import clgLogo from "../assets/images/Ramco-logo.jpg";
import eventBg from "../assets/images/event-bg.jpg";

import paperImg from "../assets/images/paper.png";
import codingImg from "../assets/images/coding.png";
import webImg from "../assets/images/web.png";
import ctfImg from "../assets/images/ctf.png";

import esportsImg from "../assets/images/esports.png";
import debateImg from "../assets/images/debate.png";
import auctionImg from "../assets/images/auction.png";
import quizImg from "../assets/images/quiz.png";


export default function Events() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hp-container fade-in">
    <div className="events-page">

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

      {menuOpen && (
        <div className="overlay-blur" onClick={() => setMenuOpen(false)} />
      )}

      {/* CONTENT */}
      <div
        className="events-container"
        style={{ backgroundImage: `url(${eventBg})` }}
      >

        {/* PARTICLES */}
        <div className="events-particles">
          {[...Array(40)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        {/* TECH */}
        <div className="events-header-row">
          <h1 className="events-title">TECHNICAL EVENTS</h1>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdtfSL_Aj2loBJLwo4ntS5Ey0mmMriLE17cHP-FzUAtHVJvzA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="register-btn"
          >
            REGISTER NOW
          </a>
        </div>

        <p className="events-note">
          NOTE: CLICK ON THE EVENT IMAGES TO VIEW DETAILS
        </p>

        <div className="events-grid">
          <Link to="/event/paper" className="event-card">
            <img src={paperImg} alt="Paper Presentation" />
            <h3>Stranger Minds</h3>
          </Link>

          <Link to="/event/coding" className="event-card">
            <img src={codingImg} alt="Coding Event" />
            <h3>SpellCraft Coding</h3>
          </Link>

          <Link to="/event/web" className="event-card">
            <img src={webImg} alt="Web Design" />
            <h3>Slytherin WebForge</h3>
          </Link>

          <Link to="/event/ctf" className="event-card">
            <img src={ctfImg} alt="CTF Event" />
            <h3>Heist Protocol</h3>
          </Link>
        </div>

        {/* NON TECH */}
        <h1 className="events-title">NON-TECHNICAL EVENTS</h1>

        <div className="events-grid">
          <Link to="/event/esports" className="event-card">
            <img src={esportsImg} alt="Esports" />
            <h3>Forbidden Arena</h3>
          </Link>

          <Link to="/event/debate" className="event-card">
            <img src={debateImg} alt="Debate" />
            <h3>Throne of Crowns</h3>
          </Link>

          <Link to="/event/auction" className="event-card">
            <img src={auctionImg} alt="Auction" />
            <h3>Wizarding Auction</h3>
          </Link>

          <Link to="/event/quiz" className="event-card">
            <img src={quizImg} alt="Quiz" />
            <h3>Wizard Quiz Bowl</h3>
          </Link>
        </div>

      </div>

      {/* FOOTER */}
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
            <b>RIT CSBS Instagram</b>
          </a>

          <a href="https://www.linkedin.com/posts/rit-csbs-212949257_with-the-advent-of-welcomingfreshers-to-activity-6999695434801655809-vrEU?utm_source=share&utm_medium=member_desktop" className="social-btn">
             <b>RIT CSBS LinkedIn </b>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100087866146448" className="social-btn">
             <b>RIT CSBS Facebook </b>
          </a>

        </div>

      </footer>

    </div>
    </div>
  );
}