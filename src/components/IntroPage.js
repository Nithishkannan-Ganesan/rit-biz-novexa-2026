import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
import bgImage from "../assets/images/hogwart-bg.webp";
import { useEffect, useState } from "react";

export default function IntroPage() {
  const navigate = useNavigate();

  // 🔥 TIMER STATE
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("April 10, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="intro-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="intro-content">

        <h1 className="intro-title">
          Welcome to RIT Biz Novexa
        </h1>

        <p className="intro-subtitle">
          A Magical Symposium Awaits You
        </p>

        {/* 🔥 TIMER */}
        <div className="countdown">

          <div className="time-box">
            <h2>{timeLeft.days || 0}</h2>
            <span>DAYS</span>
          </div>

          <div className="time-box">
            <h2>{timeLeft.hours || 0}</h2>
            <span>HOURS</span>
          </div>

          <div className="time-box">
            <h2>{timeLeft.minutes || 0}</h2>
            <span>MINUTES</span>
          </div>

          <div className="time-box">
            <h2>{timeLeft.seconds || 0}</h2>
            <span>SECONDS</span>
          </div>

        </div>

        {/* BUTTON */}
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