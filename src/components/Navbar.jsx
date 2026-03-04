import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ onNewTicket }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo — left side */}
      <div className="navbar-logo">
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="28" rx="6" fill="#7c3aed"/>
          <path d="M8 14h12M14 8v12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        Support Ticket
      </div>

      {/* Nav links — right side */}
      <ul className={`navbar-links${open ? " open" : ""}`}>
        <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#" onClick={() => setOpen(false)}>Tickets</a></li>
        <li><a href="#" onClick={() => setOpen(false)}>About Us</a></li>
        <li><a href="#" onClick={() => setOpen(false)}>Contacts</a></li>
        <li><a href="#" onClick={() => setOpen(false)}>Blog</a></li>
        <button className="btn-new-ticket" onClick={() => { onNewTicket(); setOpen(false); }}>
          New Ticket
        </button>
      </ul>

      {/* Mobile toggle */}
      <button
        className="navbar-toggle"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
