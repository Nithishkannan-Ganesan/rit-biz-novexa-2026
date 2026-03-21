import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
import bgImage from "../assets/images/hogwart-bg.webp";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div
      className="intro-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* ✨ PARTICLES */}
      <div className="particles">
        {[...Array(40)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>


      {/* CONTENT */}
      <div className="intro-content">

        <h1 className="intro-title">
          Welcome to RIT Biz Novexa
        </h1>

        <p className="intro-subtitle">
          A Magical Symposium Awaits You
        </p>

        <button
          className="intro-btn"
          onClick={() => navigate("/home")}
        >
          Enter the Castle 🏰
        </button>

      </div>

    </div>
  );
}