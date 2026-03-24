import { useState } from "react";

import gryffindor from "../assets/images/griff.png";
import ravenclaw from "../assets/images/raven.png";
import hufflepuff from "../assets/images/huff.png";
import slytherin from "../assets/images/slyt.png";

const houses = [
  {
    name: "Gryffindor",
    img: gryffindor,
    color: "#ff4d4d",
    events: ["SpellCraft Coding(Coding)", "Wizarding Premier Auction(IPL auction)", "Forbidden Arena(Esports)"]
  },
  {
    name: "Ravenclaw",
    img: ravenclaw,
    color: "#4da6ff",
    events: ["Heist Protocol(CTF)", "Wizard's Quiz Bowl(Quiz)"]
  },
  {
    name: "Hufflepuff",
    img: hufflepuff,
    color: "#ffd11a",
    events: ["Stranger Minds(Paper Presentation)", "Cook the Code(Hackathon)"]
  },
  {
    name: "Slytherin",
    img: slytherin,
    color: "#33cc99",
    events: ["Slytherin WebForge(Web Design)", "Throne of Crowns(Debate)"]
  }
];

export default function HousesSection() {
  const [activeHouse, setActiveHouse] = useState(houses[0]);

  return (
    <div className="houses-wrapper">

      <div className="about-bottom houses-center-section">
  <div className="houses-heading-box">
    <p className="houses-intro">
      Each house unveils <span>two signature events</span>
      <small> one technical and one non-technical experience</small>
      <small><span>Click on the houses to view events conducted by respective houses</span></small>
    </p>
  </div>

  
</div>

      <div className="houses-content">

        {/* LEFT → HOUSE IMAGES */}
        <div className="houses-left">
          {houses.map((house, index) => (
            <div
              key={index}
              className={`house-card ${
                activeHouse.name === house.name ? "active" : ""
              }`}
              onMouseEnter={() => setActiveHouse(house)}
            >
              <img src={house.img} alt={house.name} />
              <p>{house.name}</p>
            </div>
          ))}
        </div>

        {/* RIGHT → EVENTS */}
        <div className="houses-right">

          <h3 style={{ color: activeHouse.color }}>
            {activeHouse.name} Events
          </h3>

          <ul>
            {activeHouse.events.map((event, i) => (
              <li key={i}>{event}</li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
}