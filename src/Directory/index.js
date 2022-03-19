import React from "react";
import Product1 from './../assets/Product1.png';
import Product2 from './../assets/Product2.png';

const Directory = props => {
  return (
    <div className="Directory">
      <div className="wrap">
      <div
        className='item'
        style={{
          backgroundImage: `url(${Product1})`
        }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${Product2})`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Directory;