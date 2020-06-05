import React from 'react';

import '../css/bug-card.scss';

const bugCard = ({id, title, status, description}) => {
  // set status section color
  let color = '';
  switch (status) {
    case "submitted": color = "#ff4c4c"; break;
    case "in progress": color = "#ffff00"; break;
    case "resolved": color = "#4ca64c"; break;
    default: color = "blue";
  }

  return (
    <div className="bug-card" id={id}>
      <div className="bug-card-title">{title}</div>
      <div className="bug-card-status" style={{background: `${color}`}}>{status}</div>
      <div className="bug-card-description">{description}</div>
      <div className="bug-card-info">
        <div className="date-submitted">
          <div className="title">submitted</div>
          <div className="date">02/26/24</div>
        </div>
        <div className="date-resolved">
          <div className="title">resolved</div>
          <div className="btn">resolve</div>
        </div>
      </div>

      <div className="delete-icon">
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default bugCard;