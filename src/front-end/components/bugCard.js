import React from 'react';

import '../css/bug-card.scss';
import '../css/button.scss';


const bugCard = ({id, title, status, description, resolution, deleteBug, resolveBug}) => {
  let statusClass = status.replace(' ', '-');
  return (
    <div className="bug-card" id={id}>
      <div className="content">
        <div className="bug-card-title">{title}</div>
        <div className={`bug-card-status ${statusClass}`}></div>
        <div className="bug-card-description">{description}</div>
        <div className="bug-card-info">
          <div className="date-submitted">
            <div className="title">submitted</div>
            <div className="date">02/26/24</div>
          </div>
          <div className="date-resolved">
            {status === 'resolved' ? 
              <div className="title">resolved</div>
              :
              <div className="btn" onClick={() => resolveBug(id)}>
                resolve
              </div>}
          </div>
        </div>
      </div>
      <div className="delete">
        <i className="btn fas fa-trash" onClick={() => deleteBug(id)}></i>
      </div>
    </div>
  );
};

export default bugCard;