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
        title: "Round 2 (Debugging)",
        desc: "Debug the given code using the choosen programming language."
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
      title: "Round 1",
      desc: "Frontend Frenzy is a dynamic web design competition where participants build visually stunning and responsive web interfaces using modern frontend technologies with the support of AI tools.",
      points: [
        "Focus on UI/UX design and creativity",
        "Use of AI tools like ChatGPT allowed",
        "Emphasis on smart problem-solving",
        "Deliver a complete frontend solution within limited time"
      ]
    },
    {
      title: "Round 2",
      desc: "Participants will design a real-world frontend solution based on a given problem statement within an hour(No backend required).",
      points: [
        "1 Hour development time",
        "Real-world application problem",
        "Fully working frontend prototype",
        "No backend required"
      ]
    },
    {
      title: "Technologies Allowed",
      desc: "Participants can use any modern frontend stack such as HTML, CSS, JavaScript, React, Angular, Vue, Bootstrap, Tailwind,AI tools like ChatGPT, Copilot.",
      
    },
    {
      title: "Judging Criteria",
      desc: "Evaluation is based on multiple performance factors such as UI/UX & Design Quality, Responsiveness, Efficient use of AI tools, Understanding & explanation and Time management.",
      
    }
  ],

  teamSize: "Individual / Team of 2",
  coordinators: ["Thanalakshmi G, Kishore T"],
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
    faculty: "Ereena Veerappa Dinesh",
    prize: ["₹1000 Cash Prize + Certificate", "₹500 Cash Prize + Certificate"]
  },

  debate: {
  title: "Throne of Crowns (Geo-Politics Debate)",
  time: "2:00 PM - 3:00 PM",
  location: "Mechanical Seminar Hall",
  about: [
    {
      title: "Round 1 (Opening Round)",
      desc: `Each team presents arguments based on their assigned stance
• 3 Affirmative teams (For the motion) and 3 Negative teams (Against the motion)
• Structured presentation order followed and Focus on clarity, logic, and confidence`
    },
    {
      title: "Round 2 (Rebuttal Round)",
      desc: `Advanced round with higher difficulty
• New topic will be given on the spot and Only top 4 teams will qualify
• Teams must present fresh arguments and Includes rebuttal and counter-arguments`
    },
    
    {
      title: "Evaluation Criteria",
      desc: `Judging based on multiple factors
• Strength of arguments and Logical reasoning
• Confidence & presentation and Rebuttal effectiveness
• Clarity and structure and Team coordination`
    },
    {
      title: "Rules & Regulations",
      desc: `Strict guidelines to ensure fairness
• Teams must stick to assigned side (For/Against) and No prior topic knowledge will be given
• No use of mobile phones or electronic devices and Plagiarism or misconduct leads to disqualification
• Judges’ decision is final`
    }
  ],
  teamSize: "2-3 members (6 teams per topic)",
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
  about: [
    {
      title: "Pre-Event Responsibilities",
      desc: `• Prepare player list with categories and base prices and Design clear rules and guidelines
• Arrange random shuffle method for team formation and Assign IPL team names randomly to each group
• Fix budget limits for each team and Arrange materials (player sheets, bid cards, scoreboard)
• Brief participants about event flow and rules`
    },
    {
      title: "During the Event",
      desc: `• Act as an auction host or assist the auctioneer and Conduct smooth bidding process
• Ensure teams follow their assigned franchises and Monitor budget usage and player selection
• Update the scoreboard after each bid and Maintain discipline and fairness and Resolve conflicts or confusion instantly
• Keep the event engaging and time-bound`
    }
  ],
  teamSize: "2 - 3 members",
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
  about: [
    {
      title: "Round 1 (Preliminary Round)",
      desc: `Basic knowledge round covering multiple domains
• Questions from various topics
• Tests general awareness and fundamentals
• Participants with highest scores qualify for next round`
    },
    {
      title: "Round 2 (Rapid Fire Round)",
      desc: `Speed-based answering round
• Limited time to answer questions
• Focus on speed and accuracy
• Tests presence of mind and quick thinking`
    },
    {
      title: "Round 3 (Final Challenge Round)",
      desc: `Final competitive round among top participants
• Includes tougher and analytical questions
• Tests deeper understanding and logic
• Determines the ultimate winner`
    }
  ],
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
                  <p style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
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