import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import ContactUs from "./pages/ContactUs";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router basename="/QIIT.edu">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    </Router>
  );
}

export default App;
