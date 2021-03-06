import React from 'react';

import '../css/menu.scss';

const menu = (props) => {
  return (
    <div className="menu">
      <div className="logo">
        <span className="title">bug</span>
        <i className="fas fa-bug"></i>
        <span className="title">squisher</span>
      </div>

      <div className="menu-items">
        <div className="menu-item">
          <div className="btn" onClick={props.createBug}>
            <i className="fas fa-plus"></i>
            Create Bug
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;