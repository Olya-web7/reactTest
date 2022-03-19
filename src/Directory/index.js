import React from "react";
import Product1 from './../assets/Product1.png';
import Product2 from './../assets/Product2.png';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
      <div
        className='item'
        style={{
          backgroundImage: `url(${Product1})`
        }}
        >
          <a>
            WOMEN
          </a>
        </div>
        <div
          className='item'
          style={{
            backgroundImage: `url(${Product2})`
          }}
        >
          <a>
            MEN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;