import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import ContactUs from "./routes/ContactUs";
import Footer from "./components/Footer/Footer";
import RegistrationForm from "./routes/RegistrationForm";
import FacilityList from "./routes/FacilityList";
import AboutUs from "./routes/AboutUs";
import RulesAndRegulations from "./routes/RulesAndRegulations";
import Gallery from "./routes/Gallery";
import ReceiptPage from "./routes/ReceiptPage";
import ThankYou from "./routes/ThankYou";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/receipt" element={<ReceiptPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/facilities" element={<FacilityList />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/rules" element={<RulesAndRegulations />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
