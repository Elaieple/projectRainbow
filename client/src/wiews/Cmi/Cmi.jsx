import React from 'react';
import './cmi.css';
import Onas from '../onas/Onas';

export default function Cmi() {
  return (
    <>
      <div className="container">
        <div className="title"> СМИ о нас</div>
        <div className="contents">
          <div className="date">09.04.2022</div>
          <div className="ostex">
            <img className="png" src="./ico/18.svg" alt="foto" />
            <div className="cont">
              <div className="title1">В Самаре открылся образовательный центр для детей с ДЦП «Выше радуги»</div>
              <button type="button">Подробнее </button>
            </div>
          </div>
        </div>
        <button className="bu" type="button">1</button>
      </div>
      <Onas />

    </>
  );
}
