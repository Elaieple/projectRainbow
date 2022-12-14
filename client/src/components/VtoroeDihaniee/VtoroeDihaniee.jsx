/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import './VtoroeDihaniee.css';

export default function VtoroeDihaniee() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [accept, setAccept] = useState(false);
  const [visible, setVisible] = useState(false);
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const sendEntry = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setVisible(!visible);
    setAccept(!accept);
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
      <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <div className="null" />
      <div className="photoContainer">
        <div className="photoText">
          <p>ПРОЕКТ ВТОРОЕ ДЫХАНИЕ</p>
        </div>
        <button type="button" className="button1">УЧАСТВОВАТЬ</button>
      </div>
      <div className="container1">
        <div className="bottomContainer">
          <div className="bottomText1">
            <p>
              ПРОЕКТ ПОДДЕРЖАН
              {' '}
              <br />
              {' '}
              ФОНДОМ ПРЕЗИДЕНСКИХ ГРАНТОВ
              {' '}
            </p>
          </div>
          <div className="data">
            <p>01.03.2022 - 01.05.2022</p>
          </div>
        </div>
        <div className="celiContainer">
          <div className="celi">
            <p>ЦЕЛИ</p>
          </div>
          <div className="celiText">
            <p>
              Вовлечение подростков с двигательной и ментальной инвалидностью в жизнь
              {' '}
              <br />
              {' '}
              арт-мастерской, где они под руководством мастеров создают вещи своими
              {' '}
              <br />
              {' '}
              руками. Идея мастерской - делать простые и полезные вещи, которые
              {' '}
              <br />
              {' '}
              пригождаютсяя в быту.
            </p>
          </div>
        </div>
        <div className="zadachiContainer">
          <div className="zadachi">
            <p>ЗАДАЧИ</p>
          </div>
          <div className="zadachiText">
            <p>
              Под арт-мастерскую выделено пространство общей площадью 113 кв м. На
              {' '}
              <br />
              {' '}
              постоянной основе, сменяя друг-друга, в мастерской работают четыре
              {' '}
              <br />
              {' '}
              мастера: художник, скульптор, резчик по дереву и специалист по декоративно-
              {' '}
              <br />
              {' '}
              прикладному искусству.
            </p>
          </div>
        </div>
        <div />
      </div>
      <div className="container2">
        <div className="kak">
          <p>КАК УЧАСТВОВАТЬ?</p>
        </div>
        <div className="container3">
          <div className="blok1 bloksize">
            <div className="blok1num nums">1</div>
            <div className="blok1Text">Оставьте заявку на сайте, чтобы  мы смогли с вами связаться и добавить в участники </div>
          </div>
          <div className="blok2 bloksize">
            <div className="blok2num nums">2</div>
            <div className="blok2Text">За сутки до мероприятия мы вас ещё раз оповестим, чтобы уточнить детали и ваше участие</div>
          </div>
          <div className="blok3 bloksize">
            <div className="blok3num nums">3</div>
            <div className="blok3Text">
              Взять с собой перчатки, воду и небольшой перекус, так как мероприятие  на целый
              {' '}
              <br />
              {' '}
              день
            </div>
          </div>
          <div className="blok4 bloksize">
            <div className="blok4num nums">4</div>
            <div className="blok4Text">
              В назначенный день быть на месте, готовым к участию и одетым по
              {' '}
              <br />
              {' '}
              погоде
            </div>
          </div>
        </div>
        <div className="container4">
          <div className="firstText">НОВОСТИ ПРОЕКТА:</div>
          <div className="firstText2">
            72 ребенка с двигательной и ментальной инвалидностью
            {' '}
            <br />
            {' '}
            стали постоянными участниками наших проектов
          </div>
        </div>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ maxWidth: '300px' }} src="kartinka3.png" className="d-block w-100" alt="gachi" />
          </div>
          <div className="carousel-item">
            <img style={{ maxWidth: '300px' }} src="kartinka2.png" className="d-block w-100" alt="gachi" />
          </div>
          <div className="carousel-item">
            <img style={{ maxWidth: '300px' }} src="kartinka1.png" className="d-block w-100" alt="gachi" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="form-container-main">
        <div className={visible ? 'thankyou' : 'closedBlock'}>
          <h1>
            СПАСИБО!
          </h1>
          <p>Мы получили ваше сообщение и ответим на него в ближайшее время!</p>
          <p>Сделали ошибку?</p>
          <button type="button" className="sendFormButton" onClick={() => { setVisible(!visible); setAccept(!accept); }}>Отправить снова</button>
        </div>
        <div className={visible ? 'closedBlock' : 'form-container'}>
          <h1>Записаться на мероприятие:</h1>
          <form className="form-entry" onSubmit={sendEntry}>
            <input className="form-input" type="text" name="name" placeholder="Имя:" />
            <input className="form-input" type="text" name="phone" placeholder="Телефон:" />
            <input style={{ display: 'none' }} type="text" name="message" defaultValue="Желающий участвовать в мероприятии" />
            <div className="check-container">
              <input type="checkbox" className="checkbox-input" checked={accept} value={accept} onChange={() => setAccept(!accept)} />
              <p>
                Нажимая на кнопку «Отправить заявку», я даю согласие на обработку
                {' '}
                <span className="personal-data-text">персональных данных</span>
                {' '}
                и соглашаюсь c
                {' '}
                <span className="personal-data-text">политикой конфиденциальности</span>
                {' '}
              </p>
            </div>
            <button type="submit" className={!accept ? 'sendFormButton disabled' : 'sendFormButton'} disabled={!accept}>Отправить</button>
          </form>
        </div>
        <div className="form-picture-container">
          <img className="form-picture" src="hands.jpg" alt="hands" />
        </div>

      </div>

    </>
  );
}
