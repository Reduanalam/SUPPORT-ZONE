import "../styles/Banner.css";

// In-Progress icon  
function InProgressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
      <path d="M12 7v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Resolved icon  
function ResolvedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="banner-inner">

        {/* LEFT: In Progress   */}
        <div className="stat-card stat-card--purple">
          <div className="stat-card__pattern" />
          <div className="stat-card__top">
            <span className="stat-card__label">Total In Progress</span>
            <span className="stat-card__count">{inProgressCount}</span>
          </div>
          <div className="stat-card__icon">
            <InProgressIcon />
          </div>
        </div>

        {/* RIGHT: Resolved   */}
        <div className="stat-card stat-card--green">
          <div className="stat-card__pattern" />
          <div className="stat-card__top">
            <span className="stat-card__label">Total Resolved</span>
            <span className="stat-card__count">{resolvedCount}</span>
          </div>
          <div className="stat-card__icon">
            <ResolvedIcon />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
