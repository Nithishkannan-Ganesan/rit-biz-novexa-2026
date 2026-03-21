import { useParams, Link } from "react-router-dom";
import "./EventDetail.css";
import { useState } from "react";

import bannerBg from "../assets/images/banner-bg.png";
import clgLogo from "../assets/images/Ramco-logo.jpg";
import eventBg from "../assets/images/event-bg.jpg";

/* EVENT DATA */
const eventData = {
  paper: {
    title: "Stranger Minds (Paper Presentation)",
    time: "11:00 AM - 1:00 PM",
    location: "Mechanical Seminar Hall",
    about:
      "Stranger Minds is a thrilling on-the-spot technical paper presentation event where participants step into the unknown.",
    teamSize: "2 members",
    coordinators: ["Ramya K, Nithish Kannan G"],
    faculty: "M Rama Krishnan",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  coding: {
    title: "SpellCraft Coding",
    time: "11:00 AM - 1:00 PM",
    location: "Business Analytics Lab",
    about: [
      {
        title: "Round 1 (MCQ Quiz)",
        desc: "Time-bound MCQs based on speed and accuracy."
      },
      {
        title: "Round 2 (Debugging/Coding)",
        desc: "Solve coding/debugging problems in chosen language."
      },
      {
        title: "Round 3 (Scenario-Based Coding)",
        desc: "Real-world problem solving using VS Code."
      }
    ],
    teamSize: "2 members",
    coordinators: ["Santhosh G, SivaPriya"],
    faculty: "M Jeya Sundari",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },
  web: {
    title: "Slytherin WebForge (Web Design)",
    time: "11:00 AM - 1:00 PM",
    location: "Data Analytics Lab",
    about: "",
    teamSize: "2 members",
    coordinators: [
      "Thanalakshmi G, Kishore T",
      
    ],
    faculty: "M Shabana Fathima",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  ctf: {
    title: "Heist Protocol (CTF Challenge)",
    time: "11:00 AM - 1:00 PM",
    location: "OOPA Lab",
    about: "",
    teamSize: "2 members",
    coordinators: [
      "Jason Ezra, Kaviya N",
      
    ],
    faculty: "M Preethi Ram",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  esports: {
    title: "Forbidden Arena (Esports)",
    time: "2:00 PM - 3:00 PM",
    location: "Class Room",
    about: "",
    teamSize: "Team Event",
    coordinators: [
      "Ashin Sree P, Manoj Kumar M",
      
    ],
    faculty: "Ereena Veerappa Dinesh",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  debate: {
    title: "Throne of Crowns (Geo-Politics Debate)",
    time: "2:00 PM - 3:00 PM",
    location: "Mechanical Seminar Hall",
    about: "",
    teamSize: "2 members",
    coordinators: [
      "Vaishnavi V, Jason Ezra",
      
    ],
    faculty: "M Preethi Ram",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  auction: {
    title: "Wizarding Premier Auction (IPL Auction)",
    time: "2:00 PM - 3:00 PM",
    location: "Data Analytics Lab",
    about: "",
    teamSize: "Individual",
    coordinators: [
      "Raja Pandiyan, Mufrin Ashika O J",
    ],
    faculty: "M Jeya Sundari",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  quiz: {
    title: "Wizard's Quiz Bowl",
    time: "2:00 PM - 3:00 PM",
    location: "Business Analytics Lab",
    about: "",
    teamSize: "2 members",
    coordinators: [
      "Kaavyadharshini, Bala Vignesh S",
      
    ],
    faculty: "M Rekha",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  }
};

export default function EventDetail() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id } = useParams();
  const event = eventData[id];

  if (!event) {
    return (
      <div style={{ color: "white", textAlign: "center", padding: "50px" }}>
        <h2>Event Not Found</h2>
        <Link to="/events">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="event-detail-page">

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

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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

      {menuOpen && <div className="overlay-blur" onClick={() => setMenuOpen(false)} />}

      {/* MAIN */}
      <div
        className="event-detail-container"
        style={{ backgroundImage: `url(${eventBg})` }}
      >

        <div className="particles">
          {[...Array(40)].map((_, i) => <span key={i}></span>)}
        </div>

        <div className="event-content">

          <h1 className="event-title">{event.title}</h1>

          {/* ABOUT */}
          <div className="event-card-box full">
            <h2>About the Event</h2>

            {Array.isArray(event.about) ? (
              event.about.map((item, i) => (
                <div key={i} className="round-box">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))
            ) : event.about ? (
              <p>{event.about}</p>
            ) : (
              <p>Details will be updated soon.</p>
            )}
          </div>

          {/* DETAILS */}
          <div className="event-row">

            <div className="event-card-box half">
              <h2>Event Details</h2>
              <p><b>Date :</b> 10th April 2026</p>
              <p><b>Time :</b> {event.time}</p>
              <p><b>Location :</b> {event.location}</p>
            </div>

            <div className="event-card-box half">
              <h2>Prize Pool</h2>
              <p><b>1st :</b> {event.prize?.[0]}</p>
              <p><b>2nd :</b> {event.prize?.[1]}</p>
            </div>

          </div>

          {/* TEAM + COORD */}
          <div className="event-row">

            <div className="event-card-box half">
              <h2>Team</h2>
              <p>{event.teamSize}</p>
            </div>

            <div className="event-card-box half">
              <h2>Coordinators</h2>

              {event.coordinators?.map((c, i) => (
                <p key={i}>{c}</p>
              ))}

              <p><b>Faculty :</b> {event.faculty}</p>
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