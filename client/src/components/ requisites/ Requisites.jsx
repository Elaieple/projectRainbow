/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import logo from './pdf-icon.png';
import './requsites.css';

function Requsites() {
  const [select, setSelect] = useState(false);

  const watchDocuments = () => {
    setSelect(!select);
  };

  return (
    <div className="main-container">
      <hr />
      <div className="info-container">
        <p className="title">
          Реквизиты
        </p>
        <table className={select ? 'table_dark show' : 'table_dark close'}>
          <tr>
            <th>Полное наименование организации</th>
            <th>Автономная некоммерческая общеобразовательная организация "Комплексный общеобразовательный центр для детей с ДЦП "Выше Радуги"</th>
          </tr>
          <tr>
            <th>Сокращенное наименование организации</th>
            <th>АНОО "Комплексный общеобразовательный центр для детей с ДЦП "Выше Радуги"</th>
          </tr>
          <tr>
            <th>Наименование должности руководителя</th>
            <th>Директор</th>
          </tr>
          <tr>
            <th>Ф.И.О. руководителя</th>
            <th>Акинцева Екатерина Леонидовна</th>
          </tr>
          <tr>
            <th>Юридический адрес</th>
            <th>443081, Российской Федерации, Самарская область, город Самара, улица Стара Загора, дом 56, квартира 11</th>
          </tr>
          <tr>
            <th>Фактический адрес</th>
            <th>443066, Российской Федерации, Самарская область, город Самара, улица 22 партсъезда, дом 40а</th>
          </tr>
          <tr>
            <th>Телефон</th>
            <th>+7 927 787 63 89</th>
          </tr>
          <tr>
            <th>ИНН/ КПП</th>
            <th>6319238062/631901001</th>
          </tr>
          <tr>
            <th>ОГРН</th>
            <th>1196313026403</th>
          </tr>
          <tr>
            <th>ОКПО</th>
            <th>36802229</th>
          </tr>
          <tr>
            <th>ОКВЭД</th>
            <th>85.12</th>
          </tr>
        </table>
        <button className="buttonPlus" type="button" onClick={watchDocuments}>{select ? '-' : '+'}</button>
      </div>
      <hr />
      <div className="info-container">
        <p className="title">
          Банковкие реквизиты
        </p>
        <button type="button" className="buttonPlus">+</button>

      </div>
      <hr />
      <div className="info-container">
        <p className="title">
          Учредительные документы
        </p>
        <button type="button" className="buttonPlus">+</button>
      </div>
      <hr />
      <div className="info-container">
        <p className="title">
          Документы
        </p>
        <div className="document-container close">
          <div className="document">
            <a href="#" download>
              <img className="pdfLogo" src={logo} alt="logo" />
              <p>Лист записи ЕГРЮЛ</p>
            </a>

          </div>
          <div className="document">
            <a href="#" download>

              <img className="pdfLogo" src={logo} alt="logo" />
              <p>Свидетельство о регистрации в Минюсте</p>
            </a>
          </div>
          <div className="document">
            <a href="#" download>
              <img className="pdfLogo" src={logo} alt="logo" />
              <p>Устав</p>
            </a>
          </div>
          <div className="document">
            <a href="#" download>
              <img className="pdfLogo" src={logo} alt="logo" />
              <p>Свидетельство о регистрации в ИФНС</p>
            </a>
          </div>
        </div>
        <button type="button" className="buttonPlus">+</button>
      </div>
      <hr />

    </div>

  );
}

export default Requsites;
