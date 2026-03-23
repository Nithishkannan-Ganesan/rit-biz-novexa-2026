import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./IntroPage.css";
import bgImage from "../assets/images/hogwart-bg.webp";

export default function IntroPage() {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("April 10, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const [loading, setLoading] = useState(false);

  const handleEnter = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/home");
    }, 1800); // give time for animation
  };;

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

        {/* 🔥 COUNTDOWN TIMER */}
        <div className="countdown">

          <div className="time-box">
            <h2>{timeLeft.days}</h2>
            <span>DAYS</span>
          </div>

          <div className="time-box">
            <h2>{timeLeft.hours}</h2>
            <span>HOURS</span>
          </div>

          <div className="time-box">
            <h2>{timeLeft.minutes}</h2>
            <span>MINUTES</span>
          </div>

          <div className="time-box">
            <h2>{timeLeft.seconds}</h2>
            <span>SECONDS</span>
          </div>

        </div>

        <button className="intro-btn" onClick={handleEnter}>
          Enter the Castle 🏰
        </button>

        {loading && (
  <div className="magic-portal">
    <div className="core"></div>

    {[...Array(6)].map((_, arm) => (
      [...Array(220)].map((_, i) => (
        <span
          key={`${arm}-${i}`}
          style={{
            "--i": i,
            "--arm": arm,
            "--rand": Math.random()
          }}
        ></span>
      ))
    ))}
  </div>
)}

      </div>

    </div>
  );
}