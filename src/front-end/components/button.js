import React from 'react';

import '../css/button.scss';

const button = ({type, text, icon}) => {
  //type is round or rect
  return (
    <div className={`btn btn-${type} fas fa-${icon}`}>
      {text}
    </div>
  );
};

export default button;