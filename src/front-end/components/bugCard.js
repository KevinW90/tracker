import React from 'react';

import '../css/bug-card.scss';

const bugCard = ({title, status, description}) => {
  return (
    <div className="bug-card">
      <div className="bug-card-title">{title}</div>
      <div className="bug-card-status">{status}</div>
      <div className="bug-card-description">{description}</div>
    </div>
  );
};

export default bugCard;