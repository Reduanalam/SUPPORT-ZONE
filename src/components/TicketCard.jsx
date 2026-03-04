import "../styles/TicketCard.css";

const AVATAR_COLORS = [
  "#7c3aed","#0ea5e9","#f59e0b","#ef4444",
  "#10b981","#8b5cf6","#f97316","#06b6d4",
  "#ec4899","#14b8a6"
];

function getAvatarColor(name) {
  let hash = 0;
  for (const c of name) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name) {
  return name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
}

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  });
}

function PriorityBadge({ priority }) {
  const p = priority.toLowerCase();
  return (
    <span className={`priority-badge priority-badge--${p}`}>
      <span className="priority-badge__dot" />
      {priority}
    </span>
  );
}

function StatusBadge({ status }) {
  const s = status.toLowerCase();
  return (
    <span className={`status-badge status-badge--${s}`}>
      <span className="status-badge__dot" />
      {status}
    </span>
  );
}

function TicketCard({ ticket, onClick }) {
  const color = getAvatarColor(ticket.customer);
  return (
    <div
      className="ticket-card"
      onClick={() => onClick(ticket)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onClick(ticket)}
    >
      {/* Header: title + status */}
      <div className="ticket-card__header">
        <h3 className="ticket-card__title">{ticket.title}</h3>
        <StatusBadge status={ticket.status} />
      </div>

      {/* Description */}
      <p className="ticket-card__desc">{ticket.description}</p>

      {/* Footer: priority + customer + date */}
      <div className="ticket-card__footer">
        <PriorityBadge priority={ticket.priority} />
        <div className="ticket-card__meta">
          <div
            className="ticket-card__avatar"
            style={{ background: color }}
            title={ticket.customer}
          >
            {getInitials(ticket.customer)}
          </div>
          <span>{ticket.customer}</span>
          <span>·</span>
          <span>{formatDate(ticket.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
