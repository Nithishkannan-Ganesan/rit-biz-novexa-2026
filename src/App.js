import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import IntroPage from "./components/IntroPage";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Hackathon from "./pages/Hackathon";
import Contact from "./pages/Contact";

/* 🔥 WRAPPER FOR INTRO */
function IntroWrapper() {
  const navigate = useNavigate();

  return (
    <IntroPage onEnter={() => navigate("/home")} />
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* Intro Page */}
        <Route path="/" element={<IntroWrapper />} />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🔥 Fallback Route (VERY IMPORTANT for deployment) */}
        <Route path="*" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;