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
    about: [
      {
        title: "",
        desc: "Stranger Minds is a technical paper presentation event designed to evaluate participants’ knowledge, research ability, presentation skills, and innovation in emerging technologies. Participants can choose any one topic from the given list of 10 topics, prepare a presentation, and present it on the day of the symposium."
      }],
    teamSize: "1 - 3 members",
    coordinators: ["Ramya K, Nithish Kannan G"],
    faculty: "M Rama Krishnan",
    contact: "8220396695",
    prize: ["Shield(Team) + Certificate", "Shield(Team) + Certificate", "Participation certificates"],
    doc: "/docs/paper.pdf"
  },

  coding: {
    title: "SpellCraft Coding",
    time: "11:00 AM - 1:00 PM",
    location: "Business Analytics Lab",
    about: [
      {
        title: "",
        desc: "This is a coding competition conducted through a dedicated website platform.The event tests participants' programming knowledge, debugging skills, and problem-solving ability.Participants will complete all rounds on the website within the given time limits."
      }
    ],
    teamSize: "1 - 3 members",
    coordinators: ["Santhosh G, SivaPriya"],
    faculty: "M Jeya Sundari",
    contact: "9489707669",
    prize: ["Cash Prize + Certificate", "Cash Prize + Certificate", "Participation Certificates"],
    doc: "/docs/coding.pdf"
  },
  web: {
  title: "Slytherin WebForge (Web Design)",
  time: "11:00 AM - 1:00 PM",
  location: "Data Analytics Lab",

  about: [
    {
      title: "",
      desc: "This is a web designing competition that tests creativity, UI/UX skills, and logicalthinking. Participants will create modern and responsive web interfaces usingfrontend technologies.AI tools like ChatGPT are allowed, but participants must understand and explaintheir work.",
      points: [
        
      ]
    },
  ],

  teamSize: "Individual / Team of 2",
  coordinators: ["Thanalakshmi G, Pradeep K"],
  faculty: "M Shabana Fathima",
  contact: "9345395524",
  prize: ["Shield(Team) + Certificate", "Shield(Team) + Certificate", "Participation certificates"],
  doc: "/docs/web.pdf"
  },

  ctf: {
  title: "Heist Protocol (CTF Challenge)",
  time: "11:00 AM - 1:00 PM",
  location: "OOPS Lab",

  about: [
    {
      title: "",
      desc: "This is a technical Capture The Flag competition designed to test participants' cybersecurity skills, problem-solving abilities, reverse engineering expertise, and quick thinking under pressure. The event follows a Squid Game theme, where participants must survive multiple rounds by solving progressively difficult security challenges. Participants must rely on their technical skills and teamwork to capture flags within the given time. The competition focuses on engagement while challenging participants to think creatively and analytically.",
      points: [
      ]
    }
  ],

  teamSize: "1 - 3 members",
  coordinators: ["Kathirvel G, Kaviya N"],
  faculty: "M Preethi Ram",
  contact: "9344973243",
  prize: ["Shield(Team) + Certificate", "Shield(Team) + Certificate", "Participation certificates"],
  doc: "/docs/ctf.pdf"
  },

  esports: {
    title: "Forbidden Arena (Esports)",
    time: "2:00 PM - 3:00 PM",
    location: "Class Room",
    about: [
  {
    title: "Round 1 (Online Qualifier - Battle Royale)",
    desc: `• Battle Royale format conducted online
• All registered teams will participate
• Top 6 teams will be shortlisted
• Selection based on performance and survival`
  },
  {
    title: "Round 2 (Offline Finals - Clash Squad)",
    desc: `• Selected teams will compete live
• Fixtures will be created for matchups
• Teams will battle against each other
• Gameplay will test coordination and strategy
• One team will be crowned as the winner`
  }
],
    teamSize: "Team Event",
    coordinators: [
      "Ashin Sree P, Manoj Kumar M",
      
    ],
    contact: "8220315775",
    faculty: "Ereena Veerappa Dinesh",
    prize: ["₹2500 Cash Prize + Certificate", "₹1500 Cash Prize + Certificate", "Participation Certificate(Hard copy for 3 - 6 rankings and E-certificate for other participants)"],
    doc: "/docs/esports.pdf"
  },

  debate: {
  title: "Throne of Crowns (Geo-Politics Debate)",
  time: "2:00 PM - 3:00 PM",
  location: "Mechanical Seminar Hall",
  about: [
    {
      title: "",
      desc: "Throne of Crowns is an intellectual debate competition where participants engage in a battle of words, logic, and reasoning. The event tests critical thinking, presence of mind, confidence, structured argument building, and rebuttal skills. Topics will be revealed onthe spot to ensure spontaneity"
    }
  ],
  teamSize: "2 - 3 members (6 teams per topic)",
  coordinators: [
    "Vaishnavi V, Rajakaleeswaran S",
  ],
  contact: "9385538055",
  faculty: "M Preethi Ram",
  prize: ["Shield(Team) + Certificate", "Shield(Team) + Certificate", "Participation certificates"],
  doc: "/docs/debate.pdf"
},

  auction: {
  title: "Wizarding Premier Auction (IPL Auction)",
  time: "2:00 PM - 3:00 PM",
  location: "Data Analytics Lab",
  about: [
    {
      title: "",
      desc: `• Prepare player list with categories and base prices and Design clear rules and guidelines
• Arrange random shuffle method for team formation and Assign IPL team names randomly to each group
• Fix budget limits for each team and Arrange materials (player sheets, bid cards, scoreboard)
• Brief participants about event flow and rules`
    }
  ],
  teamSize: "2 - 4 members",
  coordinators: [
    "Raja Pandiyan P, Mufrin Ashika O J",
  ],
  contact: "9043515452",
  faculty: "M Jeya Sundari",
  prize: ["Shield(Team) + Certificate", "Shield(Team) + Certificate", "Participation certificates"],
  doc: "/docs/aution.pdf"
},

  quiz: {
  title: "Wizard's Quiz Bowl",
  time: "2:00 PM - 3:00 PM",
  location: "Business Analytics Lab",
  about: [
    {
      title: "",
      desc: "This is a fun non-technical quiz competition designed to test participants general knowledge, creativity, memory power, and quick thinking. The event includes multiple interesting rounds such as logical puzzles, picture guessing, estimation questions, and fun brain challenges. Participants must rely on their thinking skills and teamwork to answer questions within the given time. The quiz focuses on entertainment and engagement while encouraging participants to think quickly and creatively"
    }
  ],
  teamSize: "2 members",
  coordinators: [
    "Kaavyadharshini, Bala Vignesh S",
  ],
  contact: "8903590156",
  faculty: "M Rekha",
  prize: ["Shield(Team) + Certificate", "Shield(Team) + Certificate", "Participation certificates"],
  doc: "/docs/quiz.pdf"
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
    <div className="hp-container fade-in">
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
                  <p style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
                </div>
              ))
            ) : event.about ? (
              <p>{event.about}</p>
            ) : (
              <p>Details will be updated soon.</p>
            )}
            {/* VIEW DOCUMENT BUTTON */}
<div className="view-doc-container">
  <button
    className="view-doc-btn"
    onClick={() => window.open(event.doc, "_blank")}
  >
    OPEN RULEBOOK
  </button>
</div>
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
              <p><b>Others :</b> {event.prize?.[2]}</p>
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
              <p><b>Contact : </b> {event.contact}</p>
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