import React from 'react';
import './order.css';
import Onas from '../onas/Onas';

export default function Order() {
  return (
    <>
      <div className="containervam">
        <div className="title"> ОТЧЕТЫ</div>
        <br />
        <div className="year" id="1">
          2021
          <button type="button">+</button>
        </div>
      </div>
      <Onas />
    </>
  );
}
