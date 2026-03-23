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
    teamSize: "2 - 3 members",
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
    teamSize: "2 - 3 members",
    coordinators: ["Santhosh G, SivaPriya"],
    faculty: "M Jeya Sundari",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },
  web: {
  title: "Slytherin WebForge (Web Design)",
  time: "11:00 AM - 1:00 PM",
  location: "Data Analytics Lab",

  about: [
    {
      title: "About the Event",
      desc: "Frontend Frenzy is a dynamic web design competition where participants build visually stunning and responsive web interfaces using modern frontend technologies with the support of AI tools.",
      points: [
        "Focus on UI/UX design and creativity",
        "Use of AI tools like ChatGPT allowed",
        "Emphasis on smart problem-solving",
        "Deliver a complete frontend solution within limited time"
      ]
    },
    {
      title: "Event Challenge",
      desc: "Participants will design a real-world frontend solution based on a given problem statement.",
      points: [
        "1 Hour development time",
        "Real-world application problem",
        "Fully working frontend prototype",
        "No backend required"
      ]
    },
    {
      title: "Technologies Allowed",
      desc: "Participants can use any modern frontend stack.",
      points: [
        "HTML, CSS, JavaScript",
        "React, Angular, Vue",
        "Bootstrap, Tailwind",
        "AI tools like ChatGPT, Copilot"
      ]
    },
    {
      title: "Rules & Guidelines",
      desc: "Participants must follow fair usage and explain their work.",
      points: [
        "No pre-built templates",
        "AI usage allowed (must understand code)",
        "Must explain design and implementation",
        "No plagiarism between teams",
        "Judges decision is final"
      ]
    },
    {
      title: "Judging Criteria",
      desc: "Evaluation is based on multiple performance factors.",
      points: [
        "UI/UX & Design Quality",
        "Responsiveness",
        "Creativity & Problem Solving",
        "Efficient use of AI tools",
        "Understanding & explanation",
        "Time management"
      ]
    },
    {
      title: "Event Workflow",
      desc: "Step-by-step process followed during the competition.",
      points: [
        "Registration & Setup",
        "Instructions & Rules",
        "Problem Statement Release",
        "Development Phase",
        "Mid-Twist Feature Addition",
        "Submission",
        "Evaluation & Judging",
        "Results & Awards"
      ]
    }
  ],

  teamSize: "Individual / Team of 2",
  coordinators: ["Thanalakshmi G, Pradeep K"],
  faculty: "M Shabana Fathima",
  prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  ctf: {
  title: "Heist Protocol (CTF Challenge)",
  time: "11:00 AM - 1:00 PM",
  location: "OOPA Lab",

  about: [
    {
      title: "Round 1 (Beginner CTF)",
      desc: "Basic problem-solving challenges to identify hidden flags.",
      points: [
        "Easy Cryptography (Caesar Cipher, Base64)",
        "Web Basics (view page source, hidden HTML content)",
        "Logic and puzzle-based questions",
        "Beginner-friendly and open to all participants",
        "Shortlisting based on number of correct flags"
      ]
    },
    {
      title: "Round 2 (Intermediate CTF)",
      desc: "Moderately challenging tasks involving data analysis.",
      points: [
        "Image-based challenges (basic steganography)",
        "File-based challenges (hidden data in text/PDF files)",
        "QR/clue-based challenges",
        "Final evaluation based on total flags captured"
      ]
    }
  ],

  teamSize: "2 - 3 members",
  coordinators: ["Jason Ezra, Kaviya N"],
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
    teamSize: "2 - 3 members",
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
    teamSize: "2 - 3 members",
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
                <p key={i}><b>Students : </b>{c}</p>
              ))}

              <p><b>Faculty : </b> {event.faculty}</p>
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
  );
}