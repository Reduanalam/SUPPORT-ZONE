import { useState } from "react";
import "../styles/TaskStatusPanel.css";

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <polyline points="2,6 5,9 10,3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TaskStatusPanel({ inProgress, resolved, onComplete }) {
  const [activeTab, setActiveTab] = useState("inprogress");

  return (
    <aside className="task-panel">
      <div className="task-panel__card">

        {/* Header */}
        <div className="task-panel__header">
          <h3 className="task-panel__title">Task Status</h3>
          <span className="task-panel__count">
            {inProgress.length + resolved.length} tickets
          </span>
        </div>

        {/* Tabs */}
        <div className="task-panel__tabs">
          <button
            className={`task-panel__tab${activeTab === "inprogress" ? " active" : ""}`}
            onClick={() => setActiveTab("inprogress")}
          >
            In Progress ({inProgress.length})
          </button>
          <button
            className={`task-panel__tab${activeTab === "resolved" ? " active" : ""}`}
            onClick={() => setActiveTab("resolved")}
          >
            Resolved ({resolved.length})
          </button>
        </div>

        {/* Body */}
        <div className="task-panel__body">

          {/* IN PROGRESS TAB */}
          {activeTab === "inprogress" && (
            inProgress.length === 0 ? (
              <div className="task-panel__empty">
                <div className="task-panel__empty-icon">📋</div>
                <p>No tickets in progress.<br />Click a ticket to start.</p>
              </div>
            ) : (
              inProgress.map(ticket => (
                <div key={ticket.id} className="task-item">
                  <p className="task-item__title">{ticket.title}</p>
                  <button
                    className="btn-complete"
                    onClick={() => onComplete(ticket)}
                  >
                    Complete
                  </button>
                </div>
              ))
            )
          )}

          {/* RESOLVED TAB */}
          {activeTab === "resolved" && (
            resolved.length === 0 ? (
              <div className="task-panel__empty">
                <div className="task-panel__empty-icon">✅</div>
                <p>No resolved tickets yet.</p>
              </div>
            ) : (
              resolved.map(ticket => (
                <div key={ticket.id} className="resolved-item">
                  <div className="resolved-item__check">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="resolved-item__title">{ticket.title}</p>
                    <p className="resolved-item__customer">{ticket.customer}</p>
                  </div>
                </div>
              ))
            )
          )}

        </div>
      </div>
    </aside>
  );
}

export default TaskStatusPanel;
