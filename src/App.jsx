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
import Teaching from './sub-pages/Teaching';
import CollegeResources from "./sub-pages/CollegeResources";
import K12Resources from "./sub-pages/K12Resources";
import Bachelors from "./sub-pages/Bachelors";
import Masters from "./sub-pages/Masters";

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
          {/* main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
          {/* sub pages */}
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/college-resources" element={<CollegeResources />} />
          <Route path="/k-12-resources" element={<K12Resources />} />         
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    </Router>
  );
}

export default App;
