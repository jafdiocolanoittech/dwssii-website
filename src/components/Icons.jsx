export const ChimesIcon = ({ value }) => {
  const icons = {
    'Christ-Centered': (
      <svg viewBox="0 0 100 100" className="chimes-icon">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M50 20 L50 80 M30 50 L70 50" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
      </svg>
    ),
    'Harmony with Nature': (
      <svg viewBox="0 0 100 100" className="chimes-icon">
        <path d="M50 20 Q30 40 50 60 Q70 40 50 20" fill="currentColor" opacity="0.3" />
        <path d="M50 40 Q35 55 50 75 Q65 55 50 40" fill="currentColor" opacity="0.5" />
        <path d="M50 60 L50 85" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    'Integrity': (
      <svg viewBox="0 0 100 100" className="chimes-icon">
        <rect x="25" y="30" width="50" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M35 55 L45 65 L65 40" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    ),
    'Mission-Hearted': (
      <svg viewBox="0 0 100 100" className="chimes-icon">
        <path d="M50 30 C40 20 20 20 20 40 C20 60 50 80 50 80 C50 80 80 60 80 40 C80 20 60 20 50 30" 
              fill="currentColor" opacity="0.8" />
      </svg>
    ),
    'Excellence': (
      <svg viewBox="0 0 100 100" className="chimes-icon">
        <polygon points="50,15 61,40 88,40 66,58 75,85 50,68 25,85 34,58 12,40 39,40" 
                 fill="currentColor" opacity="0.8" />
      </svg>
    ),
    'Servant Leadership': (
      <svg viewBox="0 0 100 100" className="chimes-icon">
        <circle cx="50" cy="35" r="12" fill="currentColor" opacity="0.6" />
        <path d="M30 75 Q30 55 50 55 Q70 55 70 75" fill="currentColor" opacity="0.4" />
        <path d="M50 55 L50 85 M40 70 L50 85 L60 70" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    )
  };

  return icons[value] || null;
};