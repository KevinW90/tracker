import React from 'react';

import '../css/button.scss';

const button = ({text}) => {
  //type is round or rect
  return (
    <div className="btn">
      {text}
    </div>
  );
};

export default button;