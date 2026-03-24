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
    events: ["Coding", "Quiz"]
  },
  {
    name: "Ravenclaw",
    img: ravenclaw,
    color: "#4da6ff",
    events: ["Paper Presentation", "Debate"]
  },
  {
    name: "Hufflepuff",
    img: hufflepuff,
    color: "#ffd11a",
    events: ["IPL Auction", "Marketing"]
  },
  {
    name: "Slytherin",
    img: slytherin,
    color: "#33cc99",
    events: ["Web Design", "Esports"]
  }
];

export default function HousesSection() {
  const [activeHouse, setActiveHouse] = useState(houses[0]);

  return (
    <div className="houses-wrapper">

      <h2 className="houses-title">
        Each house conduct two events( one technical and one non-technical event)
      </h2>

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