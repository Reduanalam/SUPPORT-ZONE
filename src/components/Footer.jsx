import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="26" height="26" rx="6" fill="#7c3aed"/>
              <path d="M7 13h12M13 7v12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            Support Ticket
          </div>
          <p className="footer__tagline">
            A modern platform to track and resolve customer support tickets efficiently and effectively.
          </p>
          <div className="footer__social">
            <a className="footer__social-link" href="#" title="Facebook">f</a>
            <a className="footer__social-link" href="#" title="Twitter">𝕏</a>
            <a className="footer__social-link" href="#" title="LinkedIn">in</a>
            <a className="footer__social-link" href="#" title="GitHub">⌥</a>
          </div>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Ticket Management</a></li>
            <li><a href="#">Live Chat Support</a></li>
            <li><a href="#">Analytics Dashboard</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer__col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 Support Ticket Zone. All rights reserved.
        </p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
