import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <h2>KP Public School in Jamui</h2>
          <p>
            Empowering students with skills and confidence leads to success,
            innovation, and growth.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/registration">Registration</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/facilities">Facilities</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: kppsjamui59@gmail.com</p>
          <p>Phone: +91 8877668996</p>
          <p>
            Address:
            <br />
            Swami Vivekanand Colony,Sikandra Road,Near-Power House
            <br />
            MAHISOURI, JAMUI 811307
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} KP PUBLIC SCHOOL JAMUI. All rights
          reserved.
          <br />
          <a
            href="https://www.instagram.com/im_jaisingh?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by @im_ JAI SINGH
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
