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
  
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  
  const [inProgress, setInProgress] = useState([]);
  
  const [resolved, setResolved] = useState([]);

  
  const handleNewTicket = () => {
    toast.info("New ticket form coming soon! 📝", {
      position: "top-right",
      autoClose: 2500,
    });
  };
 
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

  
  const handleComplete = useCallback((ticket) => {
     
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    
    setResolved((prev) => [ticket, ...prev]);
    
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    
    toast.success(`"${ticket.title}" has been resolved! ✅`, {
      position: "top-right",
      autoClose: 3000,
    });
  }, []);

  return (
    <>
      <ToastContainer theme="light" />
 
      <Navbar onNewTicket={handleNewTicket} />

     
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      
      <main className="main-section">
        <div className="main-layout">

          
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
