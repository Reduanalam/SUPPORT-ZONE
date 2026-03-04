import { useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatusPanel from "./components/TaskStatusPanel";
import Footer from "./components/Footer";

import INITIAL_TICKETS from "./data/tickets";
import "./styles/App.css";

function App() {
  // All open tickets
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  // Tickets currently in progress (added to task panel)
  const [inProgress, setInProgress] = useState([]);
  // Resolved tickets
  const [resolved, setResolved] = useState([]);

  // New Ticket button click
  const handleNewTicket = () => {
    toast.info("New ticket form coming soon! 📝", {
      position: "top-right",
      autoClose: 2500,
    });
  };

  // Clicking a ticket card → add to In Progress
  const handleCardClick = useCallback(
    (ticket) => {
      if (inProgress.find((t) => t.id === ticket.id)) {
        toast.warning(`"${ticket.title}" is already in progress.`, {
          position: "top-right",
          autoClose: 2500,
        });
        return;
      }
      setInProgress((prev) => [...prev, ticket]);
      toast.success("Ticket added to In Progress! 🚀", {
        position: "top-right",
        autoClose: 2000,
      });
    },
    [inProgress]
  );

  // Complete button → resolve ticket
  const handleComplete = useCallback((ticket) => {
    // 1. Remove from In Progress
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    // 2. Add to Resolved
    setResolved((prev) => [ticket, ...prev]);
    // 3. Remove from open tickets list
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    // 4. Toast notification
    toast.success(`"${ticket.title}" has been resolved! ✅`, {
      position: "top-right",
      autoClose: 3000,
    });
  }, []);

  return (
    <>
      <ToastContainer theme="light" />

      {/* Navbar */}
      <Navbar onNewTicket={handleNewTicket} />

      {/* Banner: two stat cards */}
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      {/* Main */}
      <main className="main-section">
        <div className="main-layout">

          {/* LEFT: Ticket grid */}
          <section className="tickets-section">
            <div className="section-heading">
              <h2>Support Tickets ({tickets.length})</h2>
              <div className="section-sort">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort">
                  <option>Newest First</option>
                  <option>Priority</option>
                  <option>Status</option>
                </select>
              </div>
            </div>

            {tickets.length === 0 ? (
              <div className="tickets-empty">
                <div className="tickets-empty__icon">🎉</div>
                <h3>All tickets resolved!</h3>
                <p>Great work — the queue is clear.</p>
              </div>
            ) : (
              <div className="tickets-grid">
                {tickets.map((ticket, i) => (
                  <div key={ticket.id} style={{ animationDelay: `${i * 0.04}s` }}>
                    <TicketCard ticket={ticket} onClick={handleCardClick} />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* RIGHT: Task status panel */}
          <TaskStatusPanel
            inProgress={inProgress}
            resolved={resolved}
            onComplete={handleComplete}
          />

        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
