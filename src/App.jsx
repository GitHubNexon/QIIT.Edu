import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
import Teaching from "./sub-pages/Teaching";
import CollegeResources from "./sub-pages/CollegeResources";
import K12Resources from "./sub-pages/K12Resources";
import Bachelors from "./sub-pages/Bachelors";
import Masters from "./sub-pages/Masters";
import EnrollForm from "./components/EnrollForm";
import Loading from "./components/Loading"; // Import the Loading component

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });

    // Set a timeout to start the fade-out effect after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Set a timeout to change the loading state after the fade-out duration
    const endLoading = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust this time to match your fade-out duration (500ms for example)

    // Clean up the timers if the component unmounts
    return () => {
      clearTimeout(timer);
      clearTimeout(endLoading);
    };
  }, []);

  return loading ? (
    <div
      className={`transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="absolute inset-0 backdrop-blur-md flex items-center justify-center">
        <Loading />
      </div>
    </div>
  ) : (
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
        <Route path="/enroll-form" element={<EnrollForm />} />  // Add this route to show the enroll form on the sub-page path
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
